var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var SavedArticleSchema = Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},

})

var SavedArticle = mongoose.model('SavedArticle', SavedArticleSchema);

module.exports = SavedArticle;