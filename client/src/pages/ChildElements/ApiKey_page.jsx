import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateApiKey } from "../../helpers/CreateAccout";
import { set_userData } from "../../slice/userInfoSlice";
import loading3 from "../../assets/load3.gif";
import { useState } from "react";
function ApiKey_page() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingNewApi, setLoadingNewApi] = useState(false);
  const [showCopied,setShowCopied]=useState(false)
  const { user_information, token } = useSelector(
    (store) => store.userLogInDetails
  );

  const handleClickForNewApi = () => {
    setLoadingNewApi(true);
    generateApiKey(user_information._id, token)
      .then((result) => {
        setLoadingNewApi(false);
        console.log(result)
        dispatch(set_userData(result.data.info));
      
      })
      .catch((error) => {
        setLoadingNewApi(false);
        
        if (
(          error.response !== undefined &&
          error.response.data.tokenExpired === true &&
          error.response.data.redirectToLogin === true)||error.response.status==401
        ) {
          navigate("/con_access", { replace: true });
        }
      
      });
  };
  // ! copy text to clip board
  const copyText = () => {
    navigator.clipboard.writeText(user_information?.secret_key);

    setShowCopied(true)
    setTimeout(() => {
      setShowCopied(false)
    }, 500);
  };

  return (
    <section className="ApiKeyPage">
      <div className="sectionContainerForApiKey">
        <header className="introToApiKey">
          <h1> Api key generation</h1>
          {!loadingNewApi ? (
            <button className="genNewBtn" onClick={handleClickForNewApi}>
              new Api key
            </button>
          ) : (
            <button className="genNewBtn nonClick">
              <img src={loading3} alt="" className="loading3" />
            </button>
          )}
        </header>

        <div className="moreInfoApiKey">
          <div className="ApiDesc">
            <p>
              this is your current api key associated with your account. You can
              generate a new one when you feel like your api_key was exposed{" "}
            </p>
          </div>

          <h2 className="api_heading">Api key</h2>

          <div className="apiKey">
          {
            user_information?.secret_key?<>
              <div className="apiInfo">
              <i className="fa-solid fa-key" id="key"></i>
              <div className="detailedApiInfo">
                <h2>{user_information?.name}</h2>
                <span onClick={copyText} className="api_dec">
                  {user_information?.secret_key}
                    <button className={`copied ${showCopied ?"showCopied":""}`}> copied</button>
                  <i className="fa-solid fa-copy"></i>
                </span>
                <p className="fadeText ">Added on May 16,2023</p>
              </div>
            </div>

            <div className="ApiEncryption"></div>
            <button className="delbtn">delete</button>
            </>:<>
            <h1 className="api_dec noApi">you dont have any active  api key ,Generate a new api key</h1>
            
            </>
          }
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApiKey_page;
