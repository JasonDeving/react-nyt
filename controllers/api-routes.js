var mongoose = require('mongoose');

var SavedArticle = require('../models/savedArticleModel');

module.exports = function(app) {
	// Get requested
	app.get('/api/saved', function(req, res){
		SavedArticle
		.find()
		.exec(function(err, data){
			if (err) {
				res.json({status: 'err'})
			} else {
				res.json(data)
			}
		})
	})
	//post to save
	app.post('/api/saved', function(req, res){
		var savedArticle = new SavedArticle({
			title: req.body.title,
			date: req.body.date,
			url: req.body.url
		})
		//saved data
		savedArticle.save(function(err){
			if(err) {
				res.json({status: 'err'})
			} else {
				res.json({status: 'saved'})
			}
		})
	})
	// when user hits delete
	app.delete('/api/saved/:id', function(req, res){
		SavedArticle
			.remove({_id: req.params.id})
			.exec(function(err){
				if(err) {
					res.json({status: 'err'})
				} else {
					res.json({status: 'deleted'})
				}
			})
	})
}