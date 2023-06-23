import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Admin.css'
import {styled} from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from 'react-bootstrap'
function Admin() {
  const [userForAdmin, setUserForAdmin] = useState([])
  const [searchApiData, setSearchApiData] = useState()
  const [goods, setgoods] = useState([])
  const [notifications, setnotifications] = useState([])
  const [Phd, setPhd] = useState([])
  const [Btech, setBtech] = useState([])
  const [Mtech, setMtech] = useState([])

  let urlUsers = `http://localhost:6500/admin/adminManagerUsers`
  let urlNotification = `http://localhost:6500/admin/adminNotification`
  let urlMarket = `http://localhost:6500/admin/adminGoods`
  let urlMtech =`http://localhost:6500/admin/adminMtech`
  let urlBtech =`http://localhost:6500/admin/adminBtech`
  let urlPhd =`http://localhost:6500/admin/adminPhd`


  const usersForAdmin = async () => {
    try {
      const responceForUsers = await axios.get(urlUsers);
      setUserForAdmin(responceForUsers.data);
    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  const goodsForAdmin = async () => {
    try {
      const responceForMarket = await axios.get(urlMarket);
      setgoods(responceForMarket.data);
    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  const notificationForAdmin = async () => {
    try {
      const responceForNotification = await axios.get(urlNotification);
      setnotifications(responceForNotification.data);

    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  const phdForAdmin = async () => {
    try {
      const responceForPhd = await axios.get(urlPhd);
      setPhd(responceForPhd.data);

    } catch (err) {
      // console.log({ "its error": err });
    }
  };
  const mtechForAdmin = async () => {
    try {
      const responceForMtech = await axios.get(urlMtech);
      setMtech(responceForMtech.data);

    } catch (err) {
      // console.log({ "its error": err });
    }
  };
  const btechForAdmin = async () => {
    try {
      const responceForBtech = await axios.get(urlBtech);
      setBtech(responceForBtech.data);

    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  useEffect(()=>{
    usersForAdmin()
    goodsForAdmin()
    notificationForAdmin()
    btechForAdmin()
    mtechForAdmin()
    phdForAdmin()
    window.scrollTo(0, 0);
    },[])
// * Table section from material UI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




//* For Delete 
async function toDeleteGoods(id) {
  let url = `http://localhost:6500/admin/deleteGoods/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  goodsForAdmin()
}
async function toDeleteUserInfo(id) {
  let url = `http://localhost:6500/admin/deleteUserInfo/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  usersForAdmin()
}
async function toDeleteEmailOnly(id) {
  let url = `http://localhost:6500/admin/deleteUserEmailOnly/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  usersForAdmin()
}
//* For Delete 
async function toDeleteNotification(id) {
  let url = `http://localhost:6500/admin/deleteNotification/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  notificationForAdmin()
}

//* For Delete 
async function toDeleteBTech(id) {
  let url = `http://localhost:6500/admin/deleteBtech/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  btechForAdmin()
}
 async function toDeleteMTech(id) {
  let url = `http://localhost:6500/admin/deleteMtech/${id}`
  await axios({
    method:'DELETE',
    url,
  })
  mtechForAdmin()
}

 async function toDeletePhd(id) {
  let url = `http://localhost:6500/admin/deletePhd/${id}`
   await axios({
      method:'DELETE',
      url,
    })
    phdForAdmin()
}

  return (
    <>
        <div className="toShowStaffForward vh-300">
    {/* ------------------------------------------------------- */}
        <TableContainer className="toShowStaffForward m-2" component={Paper}>
           
          <h1 className="TitleFromStaff">USERS INFORMATION</h1>
          <div>
        
        </div>
          <Table  sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead className="background">
              <TableRow className="background">
                <StyledTableCell className="border" align="center">userInfo Id</StyledTableCell>
                <StyledTableCell align="center">date of registration</StyledTableCell>
                <StyledTableCell className="border" align="center">user Department</StyledTableCell>
                <StyledTableCell className="border" align="center">user Indian number</StyledTableCell>
                <StyledTableCell className="border" align="center">user OTP </StyledTableCell>
                <StyledTableCell className="border" align="center">user email forProfile </StyledTableCell>
                <StyledTableCell className="border" align="center">user email  </StyledTableCell>
                <StyledTableCell className="border" align="center">user first name </StyledTableCell>
                <StyledTableCell className="border" align="center">user last name </StyledTableCell>
                <StyledTableCell className="border" align="center">user password </StyledTableCell>
                <StyledTableCell className="border" align="center">user_role </StyledTableCell>
                <StyledTableCell className="border" align="center">user_status </StyledTableCell>
                <StyledTableCell className="border" align="center">user study section </StyledTableCell>
                <StyledTableCell className="border" align="center">user whatsapp number </StyledTableCell>

               
              </TableRow>
            </TableHead>
            {userForAdmin.map((data,j) => {
          let staffDataDisplay = (
            <TableBody className="" key={j}>
                <StyledTableRow >
                  <StyledTableCell className="border" align="center">{data.userInfo_ID}</StyledTableCell>
                  <StyledTableCell align="center">{data.date_of_registration}</StyledTableCell>
                  <StyledTableCell className="border" align="center">{data.user_last_name}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_Department}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_Indian_number}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_OTP}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_email}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_email_forProfile}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_email}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_first_name}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_last_name}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_password}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_role}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_status}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_study_section}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_whatsapp_number}</StyledTableCell>

                </StyledTableRow>
             
                <div className='d-flex'>
                <Button onClick={()=>toDeleteUserInfo(data.userInfo_ID)} className='btn-danger m-3'>Delete completely</Button>
                <Button onClick={()=>toDeleteEmailOnly(data.userInfo_ID)} className='btn-danger m-3'>Delete Email Only</Button>
                <Button className=' m-3'>Update</Button>
                </div>
               
            </TableBody>
          )
          return staffDataDisplay;
        })}
          </Table>
        </TableContainer>
        <hr/>
        <TableContainer className="toShowStaffForward m-2" component={Paper}>
           
           <h1 className="TitleFromStaff">USERS UPLOADED GOODS</h1>
           <div>
         
         </div>
           <Table  sx={{ minWidth: 700 }} aria-label="customized table">
             <TableHead className="background">
               <TableRow className="background">
                 <StyledTableCell className="border" align="center">Date of notification</StyledTableCell>
                 <StyledTableCell align="center">Item description</StyledTableCell>
                 <StyledTableCell className="border" align="center">Item id</StyledTableCell>
                 <StyledTableCell className="border" align="center">Item name</StyledTableCell>
                 <StyledTableCell className="border" align="center">Item photo name</StyledTableCell>
                 <StyledTableCell className="border" align="center">item price</StyledTableCell>
                 <StyledTableCell className="border" align="center">status check</StyledTableCell>
                 <StyledTableCell className="border" align="center">userInfo ID</StyledTableCell>
                 <StyledTableCell className="border" align="center">user Indian Number</StyledTableCell>
                 <StyledTableCell className="border" align="center">user Last name</StyledTableCell>
                 <StyledTableCell className="border" align="center">user first name</StyledTableCell>
                 <StyledTableCell className="border" align="center">user whatsapp Number</StyledTableCell>
                
               </TableRow>
             </TableHead>
             {goods.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
                 <StyledTableRow >
                   <StyledTableCell className="border" align="center">{data.date_of_notification}</StyledTableCell>
                   <StyledTableCell align="center">{data.item_description}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.item_id}</StyledTableCell>
                   <StyledTableCell  align="center">{data.item_name}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.item_photo}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.item_price}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.status_check}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.userInfo_ID}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.user_IndianNumber}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.user_firstLast}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.user_firstName}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.user_whatsappNumber}</StyledTableCell>
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={()=>toDeleteGoods(data.item_id)} className='m-3'>Delete</Button>
                <Button className='btn-danger m-3'>Update</Button>
                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
        <hr/>
          <TableContainer className="toShowStaffForward m-2" component={Paper}>
           <h1 className="TitleFromStaff">USERS Notifications</h1>
           <div>
         </div>
           <Table  sx={{ minWidth: 700 }} aria-label="customized table">
             <TableHead className="background">
               <TableRow className="background">
                 <StyledTableCell className="border" align="center">notification ID</StyledTableCell>
                 <StyledTableCell align="center">userInfo ID</StyledTableCell>
                 <StyledTableCell className="border" align="center">user notification message</StyledTableCell>
                 <StyledTableCell className="border" align="center">Date of notification</StyledTableCell>
                 <StyledTableCell className="border" align="center">Notification By</StyledTableCell>
               </TableRow>
             </TableHead>
             {notifications.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
                 <StyledTableRow >
                   <StyledTableCell className="border" align="center">{data.notification_id}</StyledTableCell>
                   <StyledTableCell align="center">{data.userInfo_ID}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.user_notification_message}</StyledTableCell>
                   <StyledTableCell  align="center">{data.date_of_notification}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.user_first_name}</StyledTableCell>
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={()=>toDeleteNotification(data.notification_id)} className='m-3'>Delete</Button>
                <Button className='btn-danger m-3'>Update</Button>
                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
         <hr/>
        <TableContainer className="toShowStaffForward m-2" component={Paper}>
           
           <h1 className="TitleFromStaff">B-Tech Section</h1>
           <div>

         </div>
           <Table  sx={{ minWidth: 700 }} aria-label="customized table">
             <TableHead className="background">
               <TableRow className="background">
                 <StyledTableCell className="border" align="center">Course Code</StyledTableCell>
                 <StyledTableCell align="center">Course given by</StyledTableCell>
                 <StyledTableCell className="border" align="center">Course name</StyledTableCell>
                 <StyledTableCell className="border" align="center">Date of file upload</StyledTableCell>
                 <StyledTableCell className="border" align="center">Department</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document id</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document path</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document type</StyledTableCell>
                 <StyledTableCell className="border" align="center">Section</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document type</StyledTableCell>
               </TableRow>
             </TableHead>
             {Btech.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
                 <StyledTableRow >
                   <StyledTableCell className="border" align="center">{data.Course_name}</StyledTableCell>
                   <StyledTableCell align="center">{data.Course_given_by}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.Course_name}</StyledTableCell>
                   <StyledTableCell  align="center">{data.Date_of_file_upload}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Department}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_id}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_path}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Section}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={()=>toDeleteBTech(data.Document_id)} className='m-3'>Delete</Button>
                <Button className='btn-danger m-3'>Update</Button>
                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
         <hr/>
         <TableContainer className="toShowStaffForward m-2" component={Paper}>
           
           <h1 className="TitleFromStaff">M-Tech Section</h1>
           <div>

         </div>
           <Table  sx={{ minWidth: 700 }} aria-label="customized table">
             <TableHead className="background">
               <TableRow className="background">
                 <StyledTableCell className="border" align="center">Course Code</StyledTableCell>
                 <StyledTableCell align="center">Course given by</StyledTableCell>
                 <StyledTableCell className="border" align="center">Course name</StyledTableCell>
                 <StyledTableCell className="border" align="center">Date of file upload</StyledTableCell>
                 <StyledTableCell className="border" align="center">Department</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document id</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document path</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document type</StyledTableCell>
                 <StyledTableCell className="border" align="center">Section</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document type</StyledTableCell>
               </TableRow>
             </TableHead>
             {Mtech.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
                 <StyledTableRow >
                   <StyledTableCell className="border" align="center">{data.Course_name}</StyledTableCell>
                   <StyledTableCell align="center">{data.Course_given_by}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.Course_name}</StyledTableCell>
                   <StyledTableCell  align="center">{data.Date_of_file_upload}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Department}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_id}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_path}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Section}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={()=>toDeleteMTech(data.Document_id)} className='m-3'>Delete</Button>
                <Button className='btn-danger m-3'>Update</Button>
                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
         <hr/>
         <TableContainer className="toShowStaffForward m-2" component={Paper}>
           
           <h1 className="TitleFromStaff">phd Section</h1>
           <div>

         </div>
           <Table  sx={{ minWidth: 700 }} aria-label="customized table">
             <TableHead className="background">
               <TableRow className="background">
                 <StyledTableCell className="border" align="center">Course Code</StyledTableCell>
                 <StyledTableCell align="center">Course given by</StyledTableCell>
                 <StyledTableCell className="border" align="center">Course name</StyledTableCell>
                 <StyledTableCell className="border" align="center">Date of file upload</StyledTableCell>
                 <StyledTableCell className="border" align="center">Department</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document id</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document path</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document type</StyledTableCell>
                 <StyledTableCell className="border" align="center">Section</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document type</StyledTableCell>
                 <StyledTableCell className="border" align="center">Document ID</StyledTableCell>
               </TableRow>
             </TableHead>
             {Phd.map((data,j) => {
           let staffDataDisplay = (
             <TableBody className="" key={j}>
                 <StyledTableRow >
                   <StyledTableCell className="border" align="center">{data.Course_name}</StyledTableCell>
                   <StyledTableCell align="center">{data.Course_given_by}</StyledTableCell>
                   <StyledTableCell className="border" align="center">{data.Course_name}</StyledTableCell>
                   <StyledTableCell  align="center">{data.Date_of_file_upload}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Department}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_id}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_path}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Section}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                   <StyledTableCell className="border"  align="center">{data.Document_id}</StyledTableCell>
                 </StyledTableRow>
                 <div className='d-flex'>
                 <Button onClick={()=>toDeletePhd(data.Document_id)} className='m-3'>Delete</Button>
                <Button className='btn-danger m-3'>Update</Button>
                </div>
             </TableBody>
           )
           return staffDataDisplay;
         })}
           </Table>
         </TableContainer>
         <hr/>
        </div>
    </>
  )
}

export default Admin