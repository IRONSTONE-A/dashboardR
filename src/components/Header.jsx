import React, { useContext } from 'react'
import  "./header.css"
import magnifier from "../assets/magnifier.svg"
import unitedFlag from "../assets/United.svg"
import chevronDown from "../assets/chevron-down.svg"
import bell from "../assets/bell.svg"
import userImage from "../assets/userImage.png"
import GermanyFlag from "../assets/GermanyFlag.png"
import { UserContext } from '../context/UserContext'
import { LangContext } from '../context/LanguageContext'

const Header = () => {
    const {roleFunc, admin,login, signIn} = useContext(UserContext)
    const {german, changeLanguage} = useContext(LangContext)
  return (
    <div className="header-container">
        <div className="header-title">Dashboard</div>
        <div className="header-right-wrapper">
            <div className="header-search-input">
                <img src={magnifier} alt="" />
                <input type="search" placeholder='Search here...' />
            </div>
            {!german ? (<div className="header-language">
                <img src={unitedFlag} alt="" />
                <p>Eng (US) </p>
                <img src={chevronDown} alt="" onClick={changeLanguage} />

            </div>) : (<div className="header-language">
                <img src={GermanyFlag} alt="" width="32px" height="32px" />
                <p>German  </p>
                <img src={chevronDown} alt="" onClick={changeLanguage} />

            </div>)}
          
            <div className="header-user">
                
                {login ? (<div className="header-user-image-container">
                <img src={bell} alt="" />
                    <img src={userImage} alt="" />
                    <div className="header-user-desc">
                        <h3>Current</h3>
                        <p>{admin ? "Admin" : "User" }</p>
                    </div>
                    <img src={chevronDown} alt=""  onClick={roleFunc}/>
                </div>) : (<div onClick={signIn} className="header-login-btn">Login</div>)}
                {/* <div className="header-user-image-container">
                    <img src={userImage} alt="" />
                    <div className="header-user-desc">
                        <h3>Current</h3>
                        <p>{admin ? "Admin" : "User" }</p>
                    </div>
                    <img src={chevronDown} alt=""  onClick={roleFunc}/>
                </div> */}
                
            </div>
        </div>
        
    </div>
  )
}

export default Header