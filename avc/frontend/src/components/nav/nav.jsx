import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Admin from "../admin/admin";
import "./nav.css";

function Nav({ scrollToSection }) {
  const [show, setShow] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isLogout, setLogout] = useState(false);
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [isEmailId, setIsEmailId] = useState(false);
  const [customerData, setEmailConfirm] = useState(
    Cookies.get("emailUser") || ""
  );
  const [isAdmin, setIsAdmin] = useState(false);

  let limitWords;
  const navigate = useNavigate();
  
  if (customerData.length > 10) {
    limitWords = customerData.slice(0, 10);
  }
  const handleLogout = () => {
    Cookies.remove("emailUser");
    setLogout(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const customerData = Cookies.get("emailUser") || "USER";
      const userID = Cookies.get("idUser") || "";
      if (userID === "66a073930a772e3ffa98fa40") {
        setIsEmailId(true);
      }
      if (customerData !== "USER") {
        setEmailConfirm(customerData);
        setLogout(true);
      } else {
        setEmailConfirm(customerData);
      }
    }, 1000); // Cập nhật mỗi giây

    return () => {
      clearInterval(interval); // Hủy bỏ interval khi component bị unmount
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  const postDataRegister = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (passwordReg.length > 8) {
      const raw = JSON.stringify({
        email: emailReg,
        password: passwordReg,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch("http://localhost:5000/register", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result);
          alert(data.message);
          setRegister(false);
        })
        .catch((error) => console.error(error));
    } else {
      alert("Invalid. Please input more 8 units!");
    }
  };
  const postUserLogin = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: emailLogin,
      password: passwordLogin,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://localhost:5000/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const loginData = JSON.parse(result);
        console.log("loginData", loginData);
        if (loginData.id === "66a073930a772e3ffa98fa40") {
          setIsEmailId(true);
          Cookies.set("idUser", loginData.id);
        }
        if (loginData.success === true) {
          Cookies.set("emailUser", loginData.email);
          setEmailConfirm(loginData.email);
          setLogout(true);
          alert(loginData.messages);
          setLogin(false);
        } else {
          alert(loginData.messages);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_menu">
        <a className="nav__logo" href="/">
          ASIA VICTORY
        </a>
      </div>
      <div
        className="searchTool"
        onClick={() => {
          setIsClick(!isClick);
          setIsAdmin(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          color="red"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      {isClick && (
        <div className="modal-overlay">
            <div className={isAdmin ? "hidden" : ""}>
            <div className="modal">
              <div className="modalCon">
                <div className="wellcome">
                  {customerData && customerData.length < 10 && (
                    <b>WELCOME {customerData}</b>
                  )}
                  {customerData && customerData.length > 10 && (
                    <b>WELCOME {limitWords}</b>
                  )}
                  {!customerData && <b>WELCOME USER</b>}
                </div>
                <div
                  className="homeModal"
                  onClick={() => {
                    scrollToSection("AVEC");
                    setLogin(false);
                    setRegister(false);
                    navigate("/");
                  }}
                >
                  Home
                </div>
                <div
                  className="proModal"
                  onClick={() => {
                    scrollToSection("Agricultural Products");
                    setLogin(false);
                    setRegister(false);
                    navigate("/agricultural")
                  }}
                >
                  Agricultural Products
                </div>
                <div
                  className="maModal"
                  onClick={() => {
                    scrollToSection("Natural Resources");
                    setLogin(false);
                    setRegister(false);
                    navigate("/natural")
                  }}
                >
                  Natural Resources
                </div>
                <div
                  className="froModal"
                  onClick={() => {
                    scrollToSection("Frozen Foods");
                    setLogin(false);
                    setRegister(false);
                    navigate("/frozenfood")
                  }}
                >
                  Frozen Foods
                </div>
                <div
                  className="reportModal"
                  onClick={() => {
                    scrollToSection("Market Research And Data Analysis");
                    setLogin(false);
                    setRegister(false);
                    navigate("/market");
                  }}
                >
                  Market Research
                </div>
                <div
                  className="technoMana"
                  onClick={() => {
                    scrollToSection("Technology Management");
                    setLogin(false);
                    setRegister(false);
                    navigate("/technology")
                  }}
                >
                  Technology Management
                </div>
                <div
                  className={`registerModal ${isRegister ? "active" : ""}`}
                  onClick={() => {
                    setRegister(!isRegister);
                    setLogin(false);
                  }}
                >
                  Register
                </div>
                {!isLogout && (
                  <div
                    className={`loginModal ${isLogin ? "active" : ""}`}
                    onClick={() => {
                      setLogin(!isLogin);
                      setRegister(false);
                    }}
                  >
                    Log in
                  </div>
                )}
                {isLogout && (
                  <div
                    className={`loginModal ${isLogin ? "active" : ""}`}
                    onClick={() => {
                      alert("Log out already!");
                      handleLogout();
                    }}
                  >
                    Log out
                  </div>
                )}

                <div
                  className="aboutModal"
                  onClick={() => {
                    scrollToSection("About Us");
                    setLogin(false);
                    setRegister(false);
                  }}
                >
                  About Us
                </div>
                {isEmailId && (
                  <div
                    className="dataAdmin"
                    onClick={() => {
                      setIsAdmin(!isAdmin);
                    }}
                  >
                    Data Administration
                  </div>
                )}

                <div
                  className="aboutModal"
                  onClick={() => {
                    setIsClick(!isClick);
                    setRegister(false);
                    setLogin(false);
                  }}
                >
                  Exit
                </div>
              </div>
            </div>

            {isRegister && (
              <div className="regContainer">
                <div className="emailRegister">
                  <input
                    placeholder="Email"
                    type="email"
                    alt=""
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                  />
                </div>
                <div className="passwordReg">
                  <input
                    placeholder="Password"
                    type="password"
                    alt=""
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                  />
                </div>
                <div className="regBtn">
                  <div
                    className="btnSubmit"
                    onClick={() => {
                      postDataRegister();
                    }}
                  >
                    <button>SUBMIT</button>
                  </div>
                  <div
                    className="btnCancel"
                    onClick={() => {
                      setRegister(!isRegister);
                      setLogin(false);
                    }}
                  >
                    <button>CANCEL</button>
                  </div>
                </div>
              </div>
            )}
            {isLogin && (
              <div className="loginContainer">
                <div className="emailLogin">
                  <input
                    placeholder="Email"
                    type="email"
                    alt=""
                    onChange={(e) => setEmailLogin(e.target.value)}
                  />
                </div>
                <div className="passwordLogin">
                  <input
                    placeholder="Password"
                    type="password"
                    alt=""
                    onChange={(e) => setPasswordLogin(e.target.value)}
                  />
                </div>
                <div className="loginBtn">
                  <div
                    className="btnSubmit"
                    onClick={() => {
                      postUserLogin();
                    }}
                  >
                    <button>SUBMIT</button>
                  </div>
                  <div
                    className="btnCancel"
                    onClick={() => {
                      setLogin(false);
                    }}
                  >
                    <button>CANCEL</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div>{isAdmin && <Admin />}</div>
    </div>
  );
}

export default Nav;
