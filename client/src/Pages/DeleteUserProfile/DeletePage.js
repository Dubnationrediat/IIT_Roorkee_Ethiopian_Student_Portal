import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Cookies from "universal-cookie";
import './DeletePage.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from "../../components/Redux/Reducers/authSlice";
import { axiosInstance } from '../../Utility/axios';
function DeletePage() {
  const [response, setresponse] = useState()
  let {user} = useSelector((state)=>state.auth)
  let user_id=user.userInfo_ID
  const dispatch = useDispatch();
  const cookie = new Cookies();
  let url = `${axiosInstance.defaults.baseURL}/user/deleteUser/${user_id}`
  let deleteProfileHandler = (e)=>{
        e.preventDefault()
        axios({
          method :'DELETE',
          url,
        }).then((res)=>{
          setresponse(res.data)
        })
  }
  const logoutHandler = (e) => {
    dispatch(logout());
    cookie.remove("token");
  };

if(response){
   return    <div className="forSuccessPage">
   <h1 className="thankYou">{response.successMessage}</h1>
   <a className="thankYouAnch" onClick={logoutHandler} href={`${response.redirect}`}>
     {response.message}
   </a>
 </div>
}else{
  return (
    <>
      <div className="deleteConfirm">
      <h2 className="pt-3 font-weight-bold text-decoration-underline">Are you sure?</h2>
      <p className="p-1 h5 text-center text-justify font-weight-bold">If you choose to delete your account, you will no longer have access to login and use any of the resources on the platform. However, any resources that you have uploaded prior to deleting your account will remain on the platform with your username or other identifying information associated with them</p>

      <div className="d-flex justify-content-center align-items-center py-3">
        <div className="m-4">
          <Button onClick={deleteProfileHandler} className="bg-danger">Yes, Delete Account</Button>
        </div>
        <div className="m-4">
          <Link to="/dashbord">
            <Button>No, Please Take me Back</Button>
          </Link>
        </div>
      </div>
    </div>

    </>
  )
}
  
}

export default DeletePage