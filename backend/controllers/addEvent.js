import db from "../config/database.js";

export const addEvent = (req, res) => {
    let dataEvent = {
        akad_date: req.body.akadDate,
        akad_start: req.body.akadStart,
        akad_end: req.body.akadEnd,
        akad_timezone: req.body.akadTimezone,
        akad_address: req.body.akadAddress,

        resepsi_date: req.body.resepsiDate,
        resepsi_start: req.body.resepsiStart,
        resepsi_end: req.body.resepsiEnd,
        resepsi_timezone: req.body.resepsiTimezone,
        resepsi_address: req.body.resepsiAddress,
    }
   
    db.query(`INSERT INTO event SET ?`, [dataEvent], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil tambah data!',
        });
    });
}