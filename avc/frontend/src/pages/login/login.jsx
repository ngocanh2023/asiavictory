import React from "react";

import gmail from "../../image/gmail.png";
import facebook from "../../image/facebook.png";
import instagram from "../../image/instagram.png";

function Login() {

  return (
    <div>
      <div className="introLogin">
          <div className="loginIcon">
            <div className="gmail">
              <img src={gmail} alt="" />
            </div>
            <div className="facebook">
              <img src={facebook} alt="" />
            </div>
            <div className="instagram">
              <img src={instagram} alt="" />
            </div>
          </div>
          
     <div className="loginForm">
            <div className="email">
              <input placeholder="email" type="email" />
            </div>
            <div className="password">
              <input placeholder="password" type="password" />
            </div>
            <div className="submitBtn">
              <button>LOG IN</button>
            </div>
          </div>

          </div>
    </div>
  );
}

export default Login;
