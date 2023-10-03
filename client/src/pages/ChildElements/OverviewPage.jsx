import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getReadmeFile } from "../../helpers/LoginsHelper";
import "../../index.css";
import { setDecodedDocs } from "../../slice/DocumentationSlice";
import { fetchAvailableApis, fetchDocumentation } from "../../Thunks/FecthApis";
function OverviewPage() {
  const { user_information, LogInStatus, token } = useSelector(
    (store) => store.userLogInDetails
  );

  const {page}= useParams()
  const { apis, loading, apiError } = useSelector((store) => store.ApisSlice);
  console.log(apis)






  const dispatch=useDispatch()

 

  useEffect(()=>{
 

      dispatch(fetchAvailableApis())
  
   
    


  },[])
  
  
 
  return (
    <section className="OverViewPage">
      <div className="OverView_grid_Container">
        <div className="UserInfo">
          <div className="detailed_info">
            <div className="userImage">
              <img
                src={user_information?.avatar_url}
                className="userImage"
                alt="Upload an avatar"
              />
            </div>
            <div className="MoreBoutUser">
              <h1 className="user_name">{user_information?.name}</h1>
              <h2 className="fadeText">{user_information?.email}</h2>
            </div>
          </div>
          <div className="Profile_actions">
            <button className="profileBtn "> edit profile</button>
            <button className="profileBtn"> set Status</button>
          </div>
        </div>
        <div className="UserDetails">
          <h2 className="head_text">Popular Apis</h2>
          <div className="AvailableApi_container">
   {
    apis && apis?.result?.map(singleApi=>{

      return          <div className="availableApis" key={singleApi?._id}>
      <div className="availableApi_upper">
        <Link to={singleApi?.link}>
          <h4 className="blueText textHeading">
{
  singleApi?.api_name
}
          </h4>
        </Link>
        <button className="permitted"> free</button>
      </div>
      <div className="availableApi_Lower">
        <p className="text">
         {
          singleApi.api_desc
         }
        </p>
      </div>
    </div>
    })
   }
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewPage;
