const mysql = require("mysql")

module.exports = async () => {

    let db = mysql.createConnection({
        host: "mysql1.par1.adky.net",
        user: "u15840_hosty6udcr",
        password: "Fq=@0KiLnBdK6uMEr=aX=o!D",
        database: "s15840_trhostbot"
    })

    return db;
}