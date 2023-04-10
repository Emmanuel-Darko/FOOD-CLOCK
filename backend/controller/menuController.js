const {connection, dbClose, dbOpen} = require("../db/dbConnect")

const getAll =(req,res)=>{
    connection.query(`SELECT * FROM menu`,
    (err,result)=>{
        if(err){console.log(err);}
        res.send(result)
    })
}

const getOne =(req,res)=>{
    const {id}=req.params
    connection.query(`SELECT * FROM menu WHERE menu_id="${id}"`,
    (err,result)=>{
        if(err){console.log(err);}
        res.send(result)
    })
}

const updateMenu =(req,res)=>{
    const {mon,tue,wed,thu,fri,sat,sun}=req.body
    
    connection.query(
        `UPDATE menu_details SET item_name=${mon[0].bf} WHERE category_id = 1 and menu_day_id = 100`,
        `UPDATE menu_details SET item_name=${mon[0].lun} WHERE category_id = 2 and menu_day_id = 100`,
        `UPDATE menu_details SET item_name=${mon[0].din} WHERE category_id = 3 and menu_day_id = 100`,
        `UPDATE menu_details SET item_name=${tue[0].bf} WHERE category_id = 1 and menu_day_id = 200`,
        `UPDATE menu_details SET item_name=${tue[0].lun} WHERE category_id = 2 and menu_day_id = 200`,
        `UPDATE menu_details SET item_name=${tue[0].din} WHERE category_id = 3 and menu_day_id = 200`,
        `UPDATE menu_details SET item_name=${wed[0].bf} WHERE category_id = 1 and menu_day_id = 300`,
        `UPDATE menu_details SET item_name=${wed[0].lun} WHERE category_id = 2 and menu_day_id = 300`,
        `UPDATE menu_details SET item_name=${wed[0].din} WHERE category_id = 3 and menu_day_id = 300`,
        `UPDATE menu_details SET item_name=${thu[0].bf} WHERE category_id = 1 and menu_day_id = 400`,
        `UPDATE menu_details SET item_name=${thu[0].lun} WHERE category_id = 2 and menu_day_id = 400`,
        `UPDATE menu_details SET item_name=${thu[0].din} WHERE category_id = 3 and menu_day_id = 400`,
        `UPDATE menu_details SET item_name=${fri[0].bf} WHERE category_id = 1 and menu_day_id = 500`,
        `UPDATE menu_details SET item_name=${fri[0].lun} WHERE category_id = 2 and menu_day_id = 500`,
        `UPDATE menu_details SET item_name=${fri[0].din} WHERE category_id = 3 and menu_day_id = 500`,
        `UPDATE menu_details SET item_name=${sat[0].bf} WHERE category_id = 1 and menu_day_id = 600`,
        `UPDATE menu_details SET item_name=${sat[0].lun} WHERE category_id = 2 and menu_day_id = 600`,
        `UPDATE menu_details SET item_name=${sat[0].din} WHERE category_id = 3 and menu_day_id = 600`,
        `UPDATE menu_details SET item_name=${sun[0].bf} WHERE category_id = 1 and menu_day_id = 700`,
        `UPDATE menu_details SET item_name=${sun[0].lun} WHERE category_id = 2 and menu_day_id = 700`,
        `UPDATE menu_details SET item_name=${sun[0].din} WHERE category_id = 3 and menu_day_id = 700`,
    (err,result)=>{
        if(err){console.log(err);}
        res.send(result)
    })
}

// const update =(req,res)=>{
//     const {id}=req.params
//     const {itemName, itemCategoryId}=req.body
//     connection.query(`UPDATE menu SET item_name= "${itemName}", item_category_id="${itemCategoryId}" WHERE menu_id="${id}"`,
//     (err,result)=>{
//         if(err){console.log(err);}
//         res.send(result)
//     })
// }
const deleteOne =(req,res)=>{
    const {id}=req.params
    connection.query(`DELETE FROM menu WHERE menu_id="${id}"`,
    (err,result)=>{
        if(err){console.log(err);}
        res.send(result)
    })
}

module.exports={
getAll,
getOne,
updateMenu,
deleteOne
}