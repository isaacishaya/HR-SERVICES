var employeeDb = require('./employee/employee-db.js');
var employeemodel= employeeDb.employeemodel;

function employee() {

  employee.prototype.create = function (options) {
    var a = new employeemodel(options);
    a.save(function (err,json) {
      if (err) {

        callback(err)

      } else {

        callback(json)

      }
    })
  };

  employee.prototype.findBy = function() {

          employeemodel.find({'_id':id},function (err, json) {

              if (err) {

                callback(err)

              } else {

                callback(json)

              }

            })


  }

}
module.exports.employee = employee;
