import db from "../config/database.js";

export const addInvite = (req, res) => {
    let dataInvite = {
        fullName: req.body.fullName,
        noHp: req.body.noHp,
        url_type: req.body.url_type,
        url_params: req.body.url_params,
        isactive: req.body.isActive,
    }
   
    db.query(`INSERT INTO invite SET ?`, [dataInvite], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil tambah data!',
        });
    });
}