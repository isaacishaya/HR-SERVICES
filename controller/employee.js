
  function route (app)
    {
                 //just for testing
      app.get('/employee/new', function (req,res) {
          res.send('welcome to my employee')
            })

          //connection between backend and frontend

     app.post('/employee/new', function(req, res, next){

 			var a = {
 			  
              Firstname: req.body.Firstname,
              Lastname: req.body.Lastname,
              middlename:req.body.middlename,
              Gender:req.body.Gender,
              telephone_number:req.body.telephone_number,
              mobile_number:req.body.mobile_number,
              address:req.body.address,
              city:req.body.city,
              state:req.body.state,
              Lga:req.body.Lga,
              nationality:req.body.nationality,
                      
 			};
       
 			var D = require("../model/employee.js").employee;
		
		     var c = new D();
		     
		     c.create(a, function(data){
			 console.log(data);
			 res.json(data);
		});

 });




    app.get('/employee/all', function (req, res, next){

    	var D = require("../model/employee.js").employee;
		
		  var c = new D();
		
	  	c.findAll(function(data) {
			res.json(data);
		});
	});



    app.get('/employee/:id', function(req,res,next){

      var D = require('../model/employee.js').employee;
      var c = new D();

      if(req.params.id === ""){
				res.json({"status":"-102", "info":"(id) parameter is required"});
				return;
		}
		
		var id = req.params.id;
		c.findById(id,function(data) {
				res.json(data);
		});		

    })

     app.post('/employee/update', function(req, res, next){

 			var a = {
 			  
              Firstname: req.body.Firstname,
              Lastname: req.body.Lastname,
              middlename:req.body.middlename,
              Gender:req.body.Gender,
              telephone_number:req.body.telephone_number,
              mobile_number:req.body.mobile_number,
              address:req.body.address,
              city:req.body.city,
              state:req.body.state,
              Lga:req.body.Lga,
              nationality:req.body.nationality,
                      
 			};

       
 			var D = require("../model/employee.js").employee;
		
		     var c = new D();
		     
		     c.update(a, function(data){
			 console.log(data);
			 res.json(data);
		});

 });



}

module.exports.route = route;
