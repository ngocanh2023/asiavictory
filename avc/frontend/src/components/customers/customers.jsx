import React, { useState, useEffect } from "react";
import "./customers.css";

const Customers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const comments = [
      "Hello. I have been working with AVEC since 2020. I also chose with a few other service providers. But I chose you because your price is good, the product is also good, and your service is also professional. Thank you.",
      "I have some suppliers in Vietnam, I also went there several times. You have good service. Hope to cooperate with you more.",
      "I choose your service because of your professional service. If I come to Vietnam next time, I will visit your place. See you again.",
      "Where i live people need this product, i found you guys on the ad page. Luckily i got the product, cheap price and fast service. next time i will introduce my friend to you guys",
      "Well, you guys do great, i have worked with you a few shipments now. Hope everything goes well. Thanks",
    ];
    const fetchUsers = async () => {
      try {
        let updatedUserData = [];
        for (let i = 0; i < 5; i++) {
          const response = await fetch(
            "https://randomuser.me/api/?key=FT10-IJG4-50H3-4GDS"
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          const userWithComment = { ...data.results[0], comment: comments[i] };
          updatedUserData.push(userWithComment);
        }
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // console.log('userData', userData)

  return (
    <div className="feedback">
      <h3>CUSTOMER FEEDBACK</h3>

      <div className="feedbackCon">
      {userData?.map((user, index) => (
        <div key={index} className="userAll">
          <div className="inforUser">
            <div className="image">
              <img src={user.picture.medium} alt="User Avatar" />
            </div>
            <div className="nameCus">{user.name.title +` `+ user.name.first +` `+ user.name.last}</div>
          </div>
          <div className="comment">{user.comment}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Customers;
