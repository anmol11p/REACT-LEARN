import React, { useState } from "react";
import Styled from "./style.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCloudCheckFill } from "react-icons/bs";
export const Navbar = () => {
    const [Mobilemode,SetMobilemode]=useState(false);
    console.log(Mobilemode);
    
  return (
    <>
    <section className={Styled.grid}>
      <div className={Styled.logo}>Anmol Panday</div>

      <ul className={`${Styled.menu} ${Mobilemode?Styled.mobilemode : Styled.webmode}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className={Styled.threedot }>
        <button onClick={()=>SetMobilemode(!Mobilemode)}> <GiHamburgerMenu /></button>
      </div>
    
    </section>

    <div className={Styled.cloud}>
    <BsCloudCheckFill className={`${Styled.icon2} ${Mobilemode && Styled.Icon2}`}/>
    <p>
    Cloud storage is a service that allows users to store data on remote servers, which can be accessed via the internet. Instead of saving files on a local hard drive, cloud storage enables users to upload documents, photos, videos, and other digital content to a secure online platform. This data can then be retrieved from any device with internet access, making cloud storage highly convenient and versatile. Popular cloud storage providers like Google Drive, Dropbox, and Microsoft OneDrive offer various plans, including free and paid options with increased capacity. Cloud storage ensures data is backed up, easy to share, and protected with encryption, improving both accessibility and security.
    </p>
    </div>
     
     </>
  );
};
