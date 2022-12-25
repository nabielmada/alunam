import db from "../config/database.js";

export const getInvoice = (req, res) => {
    let no_invoice = req.params.no_invoice
   
    db.query(`SELECT * FROM invoice WHERE noinvoice = ?`, [no_invoice], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil ambil data!',
            dataInvoice: results[0]
        });
    });
}