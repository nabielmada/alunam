import db from "../config/database.js";

export const addBride = (req, res) => {
    let dataBride = {
        man_name: req.body.manName,
        man_call: req.body.manCall,
        man_father: req.body.manFather,
        man_mother: req.body.manMother,
        women_name: req.body.womenName,
        women_call: req.body.womenCall,
        women_father: req.body.womenFather,
        women_mother: req.body.womenMother,
    }
   
    db.query(`INSERT INTO bride SET ?`, [dataBride], (err, results) => {
    if (err) throw err;
        res.send({
            success: true,
            message: 'Berhasil tambah data!',
        });
    });
}