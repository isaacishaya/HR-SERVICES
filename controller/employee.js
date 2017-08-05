function route (app)
{
app.get('/employee/new', function (req,res) {
    res.send('welcome to my employee')
})
app.post('/employee', function(req,res){

}
    res.send('welcome to employee module');
    res.send("yipee na me isaac");
    var option = {
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        middlename:req.body.middlename,
        Gender:req.body.Gender,
        phone:req.body.phone,
        mobile_phone_number:req.body.mobile_phone_number,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        Lga:req.body.Lga,
        country:req.body.country,

    };
    var model = require('../model/employee.js');
    res.send("hello, " + req.body.lastname);
});


app.get('/employee/new', function(req,res){
    res.render('form.jade',{name :'isaac'});
});

}

module.exports.route = route;
