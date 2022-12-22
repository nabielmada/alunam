import db from "../config/database.js";

export const getInvoice = (req, res) => {
    let noInvoice = req.params.noInvoice
   
    db.query(`SELECT * FROM invoice WHERE noinvoice = ?`, [noInvoice], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil ambil data!',
            dataInvoice: results[0]
        });
    });
}