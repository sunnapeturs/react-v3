const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(
  bodyParser.json()
);

// app.use(() => {
//   console.log('App use is running');
// });

app.post('/', (req, res) => {
  console.log(req.body);
  fs.appendFile("./blogg.txt", JSON.stringify(req.body) , function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");

}); 
});
app.get('/', (req, res) => {
  res.send('Muna að nota formið!!');
});
app.listen(5000);
