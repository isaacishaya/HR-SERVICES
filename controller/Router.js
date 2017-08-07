function route(app)
{
var employee  = require("./employee");

 employee.route(app);

}

module.exports.route = route;