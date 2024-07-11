const mongoose = require('mongoose')
const dbConnect = async() => {
    try{
        await mongoose.connect('database_url', {
            useNewUrlParser  : true,
            useUnifiedTopology : true,
        })
    }
    catch(error){
        console.log(error.message);
        Process.exit(1)
    }
}

module.exports = {dbConnect}
