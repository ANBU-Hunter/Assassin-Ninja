const md5 = require('md5');
const mysql = require('mysql');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


const authorize = (req,res,next)=>{
    // console.log('authorize');
    const {username , password} = req.query;
    // console.log(username,password)
        const validPass = md5(password)
        db.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,validPass],(error,results)=>{
        console.log(results); // Show DataBase info
        next();
        if(results.length >  0){
            res.render('welcome');
            

        }else{
            res.send('Error Password or username');
            
        }
        res.end();
    })
    
}

const authApi = (req,res)=>{
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
        
        console.log(hashtoken);
       
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
} 
module.exports = authorize;
// module.exports = authApi;