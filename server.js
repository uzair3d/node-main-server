const express = require('express');
const hbs = require('hbs');
const app = express();

//handlebars configurations
hbs.registerPartials(__dirname + '/views/partials');


//setting the view engine for express
app.set('view engine', 'hbs');

// Express middleware
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
	// res.send('<h1>Hello Express</h1>');
	res.send({
		address: 'Lahore',
		tip: 'Sure',
		weather: 'Cool',
		hello: [{partial: 'derivative', value: '90'}, {partial: 'derivative', value: '100'}]
	})
});

app.get('/about', (req, res)=>{
	res.render('about.hbs', {
		pageTitle: 'About | What we are',
		copyrightYear: new Date().getFullYear()
	});
});

app.get('/bad', (req, res)=>{
	res.send({
		errorMessage: 'Unable to fulfill request'
	});
});

app.listen(3000, ()=>{
	console.log('Server is up and running on port 3000');
});