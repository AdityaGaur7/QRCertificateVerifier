const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    SNo: Number,
    Name: String,
    RollNumber: String,
    CertificateData: String,
    Post: String,
    SerialNo: String,
    CertificateNumber: String
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
