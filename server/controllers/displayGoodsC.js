const { connectionInfo } = require("../config");
let getAllGoods = (req, res) => {
  //  console.log(req.user)

  let allGoodsToSell = `SELECT * FROM market`;
  connectionInfo.query(allGoodsToSell, (err, data, field) => {
    if (err) {
      //   console.log(err)
    } else {
      res.send({
        data: data,
      });
    }
  });
};

// let deleteGoodsByUser = (req,res)=>{
//    const  id = req.params.id
//          let deleteSingleGood = `DELETE FROM market Where item_id = ${id}`
//          connectionInfo.query(deleteSingleGood,(err)=>{
//              if(err){
//                //   console.log(err)
//              }else{
//                  return res.send({successMessage:'deleted successfully',message:"Click Here To Go Back To Market page",redirect:"/"})
//              }
//          })
// }

// export default getAllGoods;
module.exports = getAllGoods;
