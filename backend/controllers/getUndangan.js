import db from "../config/database.js";

export const getUndangan = (req, res) => {
    let url_params = req.params.url_params
   
    db.query(`
    SELECT * FROM invite a JOIN bride b ON a.id_bride = b.id_bride 
                           JOIN event c ON a.id_event = c.id_event
                           JOIN envelope d ON a.id_envelope = d.id_envelope
                    WHERE a.url_params = ?`,
    [url_params], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil ambil data!',
            dataUndangan: results[0]
        });
    });
}