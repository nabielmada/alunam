import db from "../config/database.js";

export const addInviteTo = (req, res) => {
    let dataInviteTo = {
        name_to: req.body.nameTo
    }
   
    db.query(`INSERT INTO invite_to SET ?`, [dataInviteTo], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil tambah data!',
        });
    });
}