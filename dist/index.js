import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();
var app = express();
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Your app is listening on port ' + port);
});
