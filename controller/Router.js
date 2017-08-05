function route(app)
{
var employee  = require("./employee");
 employee.route(app);

 // var nok = require("./nok");
 // nok.route(app);
 //
 // var acad_qual = require("./acad_qual");
 // acad_qual.route(app);
 //


}

module.exports.route = route;
