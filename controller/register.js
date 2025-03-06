const mysql = require('mysql');
const md5 = require('md5');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
var http = require('http');
const express = require('express');
const app = express();
app.set('view engine', 'hbs');

app.get('/usersinfo', (req, res) => {
    const queryParam = req.query.query;
    const categoryParam = req.query.category;
    console.log(req.query);
    const {username ,email , password} = req.query;
    
   
    db.query('SELECT email FROM USERS WHERE email = ? ',[email],async (error,results)=>{
        if(error){
            console.log(error)
        }
        if(results.length > 0){
            return res.render('register',{
                message:'The Email is already in use'
            })
            
        }
       
            
         
        // let hashedpassword = await bcrypt.hash(password, 8);
        // console.log(hashedpassword);
       
        const hashtoken = md5(password);
        
        // console.log(hashtoken);
       
    db.query('INSERT INTO USERS SET ?',{username: username, email: email, password: hashtoken,Level:1},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);
            return res.render('register',{
                    message:'user Registered'
                })
                
            }
        })

      
    });
    res.send('Received the query parameters.');
  });
  
  app.listen(8080, () => {
    console.log('Server listening on port 8080');
  });
  
exports.authApi = (req,res)=>{
   
    
} 

// module.exports = authApi;