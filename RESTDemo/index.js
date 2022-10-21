const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid'); //For generating ID's
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

// Our fake database:
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

// **********************************
// INDEX - renders multiple comments
// **********************************
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

// **********************************
// NEW - renders a form
// **********************************
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

// **********************************
// CREATE - creates a new comment
// **********************************
app.post('/comments', (req, res) => {
    // console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    // res.send('It worked!');
    res.redirect('/comments')
});

// *******************************************
// SHOW - details about one particular comment
// *******************************************
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
});

// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
    // res.send('Updating something!');
});

// *******************************************
// EDIT - renders a form to edit a comment
// *******************************************
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

// *******************************************
// DELETE/DESTROY- removes a single comment
// *******************************************
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id != id);
    res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
    console.log(req.body);
    const { meat, qty } = req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos!`);
});

app.listen(3000, () => {
    console.log("Listening on Port 3000!");
});



/////////////////////////////////////////////////////////////////////////////////

// username
// text

// bob - hello!

// GET /allComments
// GET /all
// GET /showMeAllComments

// POST /newComment
// POST /makeComment

/////////////////////////////////////////////////////////////////////////////////

// CRUD Functionality Blueprints

// GET / comments - List all comments
// POST / comments - Create a new comments
// GET / comments/:id - Get one comment (using ID)
// PATCH / comments/:id - Update one comment
// DELETE /comments/:id - Destrory one comment