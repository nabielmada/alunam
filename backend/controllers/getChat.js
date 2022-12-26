import db from "../config/database.js";

export const getChat = (req, res) => {
    let url_params = req.params.url_params
   
    db.query(`SELECT * FROM chat WHERE url_params = ? ORDER BY id_chat DESC`, [url_params], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil ambil data!',
            dataChat: results
        });
    });
}