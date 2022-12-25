import db from "../config/database.js";

export const addEnvelope = (req, res) => {
    let dataEnvelope = {
        bank_one: req.body.bankOne,
        an_one: req.body.anOne,
        norek_one: req.body.norekOne,

        bank_two: req.body.bankTwo,
        an_two: req.body.anTwo,
        norek_two: req.body.norekTwo,
    }
   
    db.query(`INSERT INTO envelope SET ?`, [dataEnvelope], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil tambah data!',
        });
    });
}