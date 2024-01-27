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
    res.render('/menu/fries', { title: "CCW - fries" })
})

//routes for all the cards



// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))