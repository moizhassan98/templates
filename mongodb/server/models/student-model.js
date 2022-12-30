const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Subject = new Schema({
    name: {required: true, type: String},
    marks: {required: false, type: Number, min: 0, max: 100}
})

const Student = new Schema({
    name: {required: true, type: String, maxlength: 100},
    age: {required: false, type: Number},
    picture: {required: false, type: String},
    email: {required: false, type: String, unique: true},
    subjects: {required: false, type: [Subject]}
})