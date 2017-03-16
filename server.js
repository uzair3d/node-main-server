const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = process.env.PORT || 3000;

//handlebars configurations
hbs.registerPartials(__dirname + '/views/partials');


//setting the view engine for express
app.set('view engine', 'hbs');

app.use((req, res, next)=>{
	res.send('<h1>We are under maintenance!</h1><br><h3>We will be back soon!</h3>');
	next();
});

// Express middleware
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
	// res.send('<h1>Hello Express</h1>');
	// res.send({
	// 	address: 'Lahore',
	// 	tip: 'Sure',
	// 	weather: 'Cool',
	// 	hello: [{partial: 'derivative', value: '90'}, {partial: 'derivative', value: '100'}]
	// })
	res.render('home.hbs', {
		pageTitle: 'Welcome to Boiling Shelf',
		pageMainHeader: 'Home Page',
		copyrightYear: new Date().getFullYear()
	})
});

app.get('/about', (req, res)=>{
	res.render('about.hbs', {
		pageTitle: 'About | What we are',
		pageMainHeader: 'About Page',
		copyrightYear: new Date().getFullYear()
	});
});

app.get('/bad', (req, res)=>{
	res.send({
		errorMessage: 'Unable to fulfill request'
	});
});

app.listen(PORT, ()=>{
	console.log('Server is up and running on port 3000');
});