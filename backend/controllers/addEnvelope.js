import db from "../config/database.js";

export const addEnvelope = (req, res) => {
    let dataEnvelope = {
        bank_bca: req.body.bankBCA,
        an_bca: req.body.anBCA,
        norek_bca: req.body.norekBCA,

        bank_mandiri: req.body.bankMandiri,
        an_mandiri: req.body.anMandiri,
        norek_mandiri: req.body.norekMandiri,

        bank_dana: req.body.bankDana,
        an_dana: req.body.anDana,
        norek_dana: req.body.norekDana
    }
   
    db.query(`INSERT INTO envelope SET ?`, [dataEnvelope], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil tambah data!',
        });
    });
}