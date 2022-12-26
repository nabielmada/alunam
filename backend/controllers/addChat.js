import db from "../config/database.js";

export const addChat = (req, res) => {
    let dataChat = {
        url_params: req.body.url_params,
        name_chat: req.body.name_chat,
        say_chat: req.body.say_chat,
        iscome: req.body.iscome,
    }
   
    db.query(`INSERT INTO chat SET ?`, [dataChat], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil tambah data!',
        });
    });
}