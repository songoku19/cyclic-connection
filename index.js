const mongoose = require('mongoose'); 
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Connection
mongoose.connect("mongodb+srv://mbimoad:bimo1940@cluster0.wul9ykl.mongodb.net/wpu", {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
})
.then(respon => console.log('connected'))
.catch(error => process.exit()); 

// Schema Table
const tblmhs = mongoose.model('mhs', mongoose.Schema({
    nama: {type: String, required: true},
    telp: {type: String, required: true},
}))

// URL 
app.get('/', async (req,res) => {
    tblmhs.insertMany({nama: 'mbimoad',telp: '082125663487'});
    res.send(await tblmhs.find({}));
})
app.listen(PORT, () => `Listening On Port ${PORT}`);

