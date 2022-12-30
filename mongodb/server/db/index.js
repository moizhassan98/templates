const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose
    .connect("mongodb://localhost:27018/templates", { useNewUrlParser: true, })
    .catch(e => {
        console.error('Connection error', e.message)
        process.exit()
    })

const db = mongoose.connection



module.exports = db