const express = require('express')
const app = express();

const AppError = require('./AppError');

const path = require('path');
const methodOverride = require('method-override');

const mongoose = require('mongoose');
const Product = require('./models/product');
const { send } = require('process');

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("The MongoDB connection is open");
    })
    .catch(err => {
        console.log(`MongoDB Error: ${err}`);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const categories = ['Fruit', 'Vegetable', 'Dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        console.log(products);
        res.render('products/index', { products, category: 'All' });
    }
});

app.get('/products/new', wrapAsync((req, res, next) => {
    res.render('products/new', { categories });
}));

app.post('/products', wrapAsync(async (req, res, next) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    console.log(newProduct);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
    // res.send('Making your productt!')
}));

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => next(err));
    };
};

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product not found!', 404);
    }
    res.render('products/show', { product });
}));

app.get('/products/:id/edit', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product not found!', 404);
    }
    res.render('products/edit', { product, categories });
});

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    console.log(res.body);
    res.redirect(`/products/${product._id}`);
}));

app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
}));

const handleValidationError = err => {
    console.dir(err);
    return new AppError(`Validation Failed...${err.message}`, 400);
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') {
        err = handleValidationError(err);
    }
    next(err);
});

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log('App is listening at Port 3000')
});
