function conn(){
        const mysql = require('mysql');
    const conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'ninja'
    });
    conn.connect((error)=>{
        if(error){
            throw error;
        }
        console.log('Mysql Connected....')
        const sql= 'SELECT USERNAME FROM USERS WHERE USERNAME =?'
        conn.query(sql,(error,result)=>{
            if(error){
                throw error
            }
            console.log('Created DataBases..')
        })
    });
}

