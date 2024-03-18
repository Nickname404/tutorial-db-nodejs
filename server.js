const express = require('express')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    databases:"school",
    user:"root",
    password:"",
})

db.connect((err) =>{
    if (err) throw err
    console.log("databases connected..")

    const sql = "SELECT * FROM user"
    db.query(sql, (err, result) =>{
        console.log('hasil database => ', result)
    app.get("/", (req, res) => {
    res.send(result)
    })
    })
})


app.listen(8000, function () {
        console.log("server ready...")
    })