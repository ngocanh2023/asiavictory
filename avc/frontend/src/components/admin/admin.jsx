import { useState } from "react";
import moment from 'moment';

import "./admin.css";

const Admin = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorEmpty, setErrorEmpty] = useState("");
  const [resultPost, setResultPost] = useState("");

  const currentTime = moment().format();
  console.log("selectedValue", selectedValue)

  const handleSubmit = async () => {
    if (image === "" || content === "" || selectedValue === "" || title === "") {
      setErrorEmpty({ message: "Invalid Data!" });
      setResultPost(!resultPost)
    } else {
      setErrorEmpty(!errorEmpty);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        selectedValue: selectedValue,
        image: image,
        title: title,
        content: content,
        time: currentTime,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch("http://localhost:5000/postData", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setResultPost(JSON.parse(result));
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="admNav">
    <div className="adminTable">
        <h3>ADMIN EDIT</h3>
        <div className="addNewBtn">
          <div className="admCont">
            <div className="selectCont">
              <select
                value={selectedValue}
                onChange={(e) => {
                  e.preventDefault();
                  setSelectedValue(e.target.value);
                }}
              >
                <option value={""}>
                  Choice One
                </option>
                <option value={"Agricultural Products"}>
                  Agricultural Products
                </option>
                <option value={"Natural Resources"}>Natural Resources</option>
                <option value={"Frozen Foods"}>Frozen Foods</option>
                <option value={"Market Research"}>Market Research</option>
                <option value={"Technology Management"}>
                  Technology Management
                </option>
                <option value={"About Us"}>About Us</option>
              </select>
            </div>
          </div>
          <div className="contAdm">
            <input
              type="text"
              placeholder="Image URL"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <div className="titleContent"><input placeholder="Content Title" onChange={e => {setTitle(e.target.value)}}/></div>
            <textarea
              type="text"
              placeholder="Content"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
          {errorEmpty && <div className="errorEmpty">{errorEmpty.message}</div>}
          {resultPost && <div className="resultPost">{resultPost.message}</div>}
          <div className="btnAll">
            <div className="controlAdm">
              <button
                className="submitBtn"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};
export default Admin;
