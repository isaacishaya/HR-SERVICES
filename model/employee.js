var employeeDb = require('./employee/employee-db.js');
var emplModel= employeeDb.employeeModel;

function employee() {

        employee.prototype.create = function (properties,callback) {

          var tax = new emplModel(properties);
          tax.save(function (err,record) {
            if (err) {
              callback(err)
            }
            else {
              callback(record !== null? record.toJSON() : null);

            }
          })
        };

        employee.prototype.findAll = function(callback){
            
            
            emplModel.find({}, function(err, data) {
              
              if(err){
                  callback(err);
              }else{
                  callback(data);
              }
              
          });
        };

        employee.prototype.findById = function(id,callback) {
        emplModel.find({_id : id}).lean().exec(function(err, data) {

              if (err) {

                callback(err)

              } else {

                callback(data)

              }

            })


  }

}
module.exports.employee = employee;
