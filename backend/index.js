const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Certificate = require('./models/certificate');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://dbuser:verifycerti@atlascluster.xo8ukd1.mongodb.net');

// Routes
app.post('/certificates', async (req, res) => {
    try {
        const certificate = new Certificate(req.body);
        await certificate.save();
        res.status(201).send(certificate);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/certificates', async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.send(certificates);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get('/certificates/:id', async (req, res) => {
    try {
        let serial = req.params.id;
        const certificate = await Certificate.findOne({ SerialNo: serial });
        if (!certificate) return res.status(404).send({ message: 'Certificate not found' });
        res.send(`<div style="display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;height:100vh">
        <div style="border: 2px solid black;padding: 1rem;">
            <p><span >Name:</span> ${certificate["Name"]}</p>
            <p><span >Roll Number:</span> ${certificate["RollNumber"]}</p>
            <p><span >Certificate Data:</span> ${certificate["CertificateData"]}</p>
            <p><span >Post:</span> ${certificate["Post"]}</p>
            <p><span >Serial No:</span> ${certificate["SerialNo"]}</p>
            <p><span >Certificate Number:</span> ${certificate["CertificateNumber"]}</p></div></div>`);

    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});


app.get('/', async (req, res) => {
    res.send("Hello World");
})

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
