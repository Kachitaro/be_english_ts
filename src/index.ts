import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import "./config/database"; //connect database
import router from './routes/index';
//config 
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);


//lister port
let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🟢 app listening on localhost:${port}`);
});