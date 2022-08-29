import 'dotenv/config'
import express from 'express';
const app = express();
import cors from 'cors';
const PORT = process.env.PORT || 3004;
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { dbInit } from './utils/dbconnection.js';
import users from './users/routes.js';
import auth from './auth/route.js';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument  from "./swagger.json" assert {type:"json"};


// database initialization.
dbInit();


app.use(morgan('combined',{}));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/v1/users",users);
app.use("/v1/auth",auth)

// documentation
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocument));

app.listen(PORT,()=> {console.log(`app running on port : ${PORT}`)});
