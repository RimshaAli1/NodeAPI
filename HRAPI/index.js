const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
try{
   res.json('Welcome to HR API');
}catch(err){
res.status(500).json({Error:err.message});
}
});

app.get('/country',async(req,res)=>{
    try {
        const result = await pool.query('select * from countries');
        res.json(result.rows)
    } catch (err) {
       res.status(500).json({Error:error.message}); 
    }
});

app.get('/region',async(req,res)=>{
    try {
        const resultt = await pool.query('select * from regions');
        res.json(resultt.rows)
    } catch (err) {
       res.status(500).json({Error:error.message}); 
    }
});

app.get('/employee',async(req,res)=>{
    try {
        const resulttt = await pool.query('select count(employee_id) from employees');
        res.json(resulttt.rows)
    } catch (err) {
       res.status(500).json({Error:error.message}); 
    }
});



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Sucessfully.....on Port ${PORT}`);
});
