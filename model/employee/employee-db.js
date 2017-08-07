var db = global.db;

var Schema = db.Schema;
var employeeSchema = new Schema({
  Firstname:{
		type: String,
		required: true
	},
  Lastname:{
		type: String,

	},
  middlename:{
		type: String,
    
	},
  Date_of_birth:{
		type: String,

	},
  Gender:{
   male: String,
   female:String
 },
 telephone_number:{
   type: Number,

 },
 mobile_number:{
   type: Number,

 },
 address:{
   type: String,

 },
 city:{
   type: String,

 },
 state:{
   type: String,

 },
 Lga:{
   type: String,

 },
 nationality:{
   type: String,

 },
});

module.exports.employeeModel = db.model('employee', employeeSchema);
