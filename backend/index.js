// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";
// import body-parser
import bodyParser from "body-parser";

// init express
const app = express();

// use body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use express json
app.use(express.json());

// use cors
app.use(cors());

// use router
app.use(Router);
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
