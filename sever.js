const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const fs = require('fs');

const strorage = multer.diskStorage({
  destination: function(req, res, cb) {
    var dir = './uploads';

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, 'uploads');
  },
  filename: function(req, file, cb) {
    let filename = file.originalname;
    let newFileName = filename;
    cb(null, newFileName);
  }
});

const upload = multer({ storage: strorage });

app.listen(port, () => {
  console.log('Run server port ' + port);
});

app.get('/', async(req, res) => {
  res.sendFile(__dirname + '/upload.html');
});

app.post('/uploadfile', upload.single('myfile'), async(req, res, next) => {
  let file = req.file;
  if (!file) {
    var err = new Error('Cần chọn file');
    err.httpStatusCode = 400;
    return next(err);
  }
  let pathFileInServer = file.path;
  console.log(pathFileInServer);
  res.send(file);
});
