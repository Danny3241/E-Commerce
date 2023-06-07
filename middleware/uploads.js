const multer = require('multer');
const uniqid = require('uniqid'); 
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null,'uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + uniqid() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage })

module.exports = upload
