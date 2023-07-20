
const connectionInfo = require("../../server.js")
// const  {fileURLToPath}=require ('url')
// const path = require('path')
// const fs = require('fs')



// let fullDirectly = fileURLToPath(import.meta.url)

// let fileDirectory =path.parse(fullDirectly)
// const { fileURLToPath } = require('url');
const path = require('path');
const fs = require('fs');

const filename = require.resolve(__filename); // Get the full path to the current module file
const dirname = path.dirname(filename); // Get the directory path of the current module file

let fileDirectory = path.parse(dirname);


let deleteGoods = (req,res)=>{
    const  id = req.params.id
          let selectGoods = `SELECT * FROM market WHERE item_id = ${id} `
          let deleteUserGoods = `DELETE FROM market Where item_id = ${id}`
          connectionInfo.query(selectGoods,(err,data,field)=>{
            if(err){
                console.log(err)
            }else{
                   let imageName = data[0].item_photo
                   connectionInfo.query(deleteUserGoods,(err)=>{
                    if(err){
                        console.log(err)
                    }else{
                        fs.unlink(`${fileDirectory.dir}/${imageName}`,(err)=>{
                            if(err){
                                console.log(err)
                            }else{
                               
                            }
                           })
                        return res.send({ 

                                          successMessage:'item deleted successfully',
                                          message:"Click Here To Go Back",
                                          redirect:"/sellGoods"})
                    }
                })
            }
           })
        
}

// export {deleteGoods}

module.exports = {deleteGoods}