var express = require('express');
var oracledb = require('oracledb');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.autoCommit = true;

app.get('/read', async (req, res, rows) => {
    let connection = null
    try {
        let connection = await oracledb.getConnection({
            user: 'system',
            password: '1234',
            connectString: 'localhost:1521/ORCL1',
            database: 'student'
        });
        const result = await connection.execute('SELECT * FROM student', (err, rows, fields) => {
            if (!err) {
                console.log(rows)
                return res.json(rows)
            }
            else {
                console.log("error while reading data", err);
            }
            res.send(result);
        }
        );
    }
    catch (err) {
        console.log(err)
        return res.send("Error")
    }
})

app.get("/read/:id", async function (req, res) {
    let connection = null
    try {
        let connection = await oracledb.getConnection({
            user: 'system',
            password: '1234',
            connectString: 'localhost:1521/ORCL1',
            database: 'student'
        });

        const id = req.params.id;
        var result = await connection.execute(`SELECT * FROM student WHERE id =${id}`, (err, rows, fields) => {
            if (!err) {
                console.log(rows);
                res.send(rows);
            }
            else {
                console.log("error while reading data", err);
            }
            res.send(result);
        })

    } catch (error) {
        console.log(err)
        return res.send("Error")

    }



})



app.listen(1010, function () {
    console.log("Server is runnning on port 1010")
})

//module.exports = index;