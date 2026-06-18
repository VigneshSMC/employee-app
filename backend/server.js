const mongoose = require("mongoose")
const app = require("./app")

mongoose.connect(
"mongodb://mongodb:27017/employeedb"
)
.then(()=>{
	console.log("MongoDB Connected")
	app.listen(5000, () => {
		console.log("server started")
	})
})
.catch(err=>console.log(err))

