import db from "../config/database.js";

export const createInvoice = (req, res) => {
    let dataInvoice = {
        noinvoice: req.body.noInvoice,
        customer: req.body.customer,
        nominal_bill: req.body.nominalBill,
        type: req.body.type,
    }
   
    db.query(`INSERT INTO invoice SET ?`, [dataInvoice], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil tambah data!',
        });
    });
}