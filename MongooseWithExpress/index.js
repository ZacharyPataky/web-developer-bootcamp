const express = require('express')
const app = express();

const path = require('path');
const methodOverride = require('method-override');

const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
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

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

app.post('/products', async (req, res) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    console.log(newProduct);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
    // res.send('Making your productt!')
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', { product });
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    console.log(res.body);
    res.redirect(`/products/${product._id}`)
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
});

app.listen(3000, () => {
    console.log('App is listening at Port 3000')
});