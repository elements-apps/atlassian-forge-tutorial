import './App.css';
import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import {GetUserInformationResponse, RandomUserInfo} from "../models";

function App() {
  const [userInfo, setUserInfo] = useState<GetUserInformationResponse>();

  useEffect(() => {
    invoke<GetUserInformationResponse>('getUserInformation')
        .then(info => setUserInfo(info))
        .catch(error => console.log(error))
  }, []);

  if (!userInfo) {
    return (
        <p>Loading user information....</p>
    )
  }

  if (!userInfo.isPresent) {
    return (
        <div>No generated user for this issue 😥</div>
    )
  }

  if (!userInfo.user) {
    return null;
  }

  const user = userInfo.user;

  return (
      <div className={'user-container'}>
        <div className={"random-user-card"}>
          <div className={"profile-picture"}>
            <img src={user.picture.large}/>
          </div>
          <div className={"profile-info"}>
            <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
            <ul>
              <li>{user.dob.age} years old</li>
              <li>{user.location.city}, {user.location.country}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default App;
