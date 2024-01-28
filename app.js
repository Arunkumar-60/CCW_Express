// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    res.render('index', { title: 'CCW - Home Page' })
})

app.get('/aboutus', (req, res) => {
    res.render('aboutus', { title: 'CCW - About Page' })
})

app.get('/franchise', (req, res) => {
    res.render('franchise', { title: 'CCW - franchise Page' })
})

app.get('/contactus', (req, res) => {
    res.render('contactus', { title: 'CCW - contact Page' })
})

app.get('/blog', (req, res) => {
    res.render('blog', { title: 'CCW - Blog Page' })
})

//routes for menu section
app.get('/menu/large', (req, res) => {
    res.render('menu/large', { title: "CCW - waffles" })
})

app.get('/menu/medium', (req, res) => {
    res.render('menu/medium', { title: "CCW - Waffles" })
})

app.get('/menu/fries', (req, res) => {
    res.render('menu/fries', { title: "CCW - fries" })
})

//routes for all the cards for search
app.get('/search', (req, res) => {
    res.render('search', { title: "CCW - Search" })
})

//reoutes for all the cards mediumwaffle largewaffle/items 
app.get('/menu/cards/mediumwaffle/item1', (req, res) => {
    res.render('menu/cards/mediumwaffle/item1', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item2', (req, res) => {
    res.render('menu/cards/mediumwaffle/item2', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item3', (req, res) => {
    res.render('menu/cards/mediumwaffle/item3', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item4', (req, res) => {
    res.render('menu/cards/mediumwaffle/item4', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item5', (req, res) => {
    res.render('menu/cards/mediumwaffle/item5', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item6', (req, res) => {
    res.render('menu/cards/mediumwaffle/item6', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item7', (req, res) => {
    res.render('menu/cards/mediumwaffle/item7', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item8', (req, res) => {
    res.render('menu/cards/mediumwaffle/item8', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item9', (req, res) => {
    res.render('menu/cards/mediumwaffle/item9', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item10', (req, res) => {
    res.render('menu/cards/mediumwaffle/item10', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item11', (req, res) => {
    res.render('menu/cards/mediumwaffle/item11', { title: "CCW - Waffles" })
})

app.get('/menu/cards/mediumwaffle/item12', (req, res) => {
    res.render('menu/cards/mediumwaffle/item12', { title: "CCW - Waffles" })
})

// routes for cards of large waffles 

app.get('/menu/cards/largewaffle/item1', (req, res) => {
    res.render('menu/cards/largewaffle/item1', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item2', (req, res) => {
    res.render('menu/cards/largewaffle/item2', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item3', (req, res) => {
    res.render('menu/cards/largewaffle/item3', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item4', (req, res) => {
    res.render('menu/cards/largewaffle/item4', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item5', (req, res) => {
    res.render('menu/cards/largewaffle/item5', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item6', (req, res) => {
    res.render('menu/cards/largewaffle/item6', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item7', (req, res) => {
    res.render('menu/cards/largewaffle/item7', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item8', (req, res) => {
    res.render('menu/cards/largewaffle/item8', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item9', (req, res) => {
    res.render('menu/cards/largewaffle/item9', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item10', (req, res) => {
    res.render('menu/cards/largewaffle/item10', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item11', (req, res) => {
    res.render('menu/cards/largewaffle/item11', { title: "CCW - Waffles" })
})

app.get('/menu/cards/largewaffle/item12', (req, res) => {
    res.render('menu/cards/largewaffle/item12', { title: "CCW - Waffles" })
})

// routes for the other card items like fries and nuggets etc

app.get('/menu/cards/other/item1', (req, res) => {
    res.render('menu/cards/other/item1', { title: "CCW -Waffles" })
})

app.get('/menu/cards/other/item2', (req, res) => {
    res.render('menu/cards/other/item2', { title: "CCW - Waffles" })
})








// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))