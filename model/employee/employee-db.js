var db = global.db;

var Schema = mongoose.Schema;
var employeeSchema = new Schema({
  Firstname:String,
  Lastname:{type:String, default:'isaac'},
  middlename:{type:String, default:''},
  Date_of_birth:{type:String, default:''},
  Gender:{
   male: String,
   female:String
 },
 phone:Number,
 mobile_phone_number:Number,
 address:String,
 city:String,
 state:String,
 Lga:String,
 country:String


});

module.exports.employeemodel = db.model('em', employeeSchema);
