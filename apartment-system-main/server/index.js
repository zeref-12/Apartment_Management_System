const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "himanshu@154",
    database: "apartment" // serl-db
});

app.get('/test', (req, res) => {
    db.query(
        "SELECT * FROM apt_building",
        (err, result) => {
            if (err) {
                console.log('not connect');
                console.log(err);
            } else {
                // console.log(result); 
                res.send(result);
            }
        }
    );
});


app.listen(3001, () => {
    console.log("You server is running....");
});