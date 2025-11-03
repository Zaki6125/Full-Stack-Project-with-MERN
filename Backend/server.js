import express from 'express';
import {ENV} from './lib/env.js';
const app = express();
console.log(ENV.PORT);
console.log(ENV.DB)
app.get('/', (req, res)=>{
   res.status(200).json({
    msg:'This is Backend Project.....'
   })
})
app.listen(ENV.PORT, ()=> console.log("Server Running on this Port ", ENV.PORT))