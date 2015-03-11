var express = require('express');
var router = express.Router();

var loans = [
	{id:0, object:'Sabre Laser', returned : true, person: {name : 'Luke Skywalker', picture:'lukeskyywalker.jpg'}},
	{id:0, object:'Tournevis sonic', returned : false, person: {name : 'Docteur Who', picture:'doctorWho.jpg'}},
	{id:0, object:'Goldorak', returned : false, person: {name : 'Actarus', picture:'actarus.jpg'}}
];

router.get('/', function(req, res, next){
	res.json(loans)
})
router.post('/', function(req, res, next){
	var newLoan = req.body;
	newLoan.id = loans.length;
	loans.push(newLoan);
	res.status(201).json(newLoan);
})

router.param('loanId', function(req, res, next, loanId){
	req.loan = loans[loanId];
	return next();
})

router.get('/:loanId', function(req, res, next){
	if(req.loan === null || req.loan === undefined){
		res.status(404).json({message:'loan not  found'});
	}
	res.json(req.loan);
})
module.exports = router;