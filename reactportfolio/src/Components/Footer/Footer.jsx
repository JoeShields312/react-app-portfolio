import React from "react";
import { MDBRow, MDBContainer, MDBFooter } from "mdbreact";
import SideBar from "../../Components/SideBar/SideBar";
import "../../../src/App.css";

const Footer = () => {
  return (
    <MDBFooter className="Footer font-small footer-dark text-white-50 bg-dark fixed-bottom">
      <MDBContainer fluid className="content-center">
        <MDBRow className="mx-auto mt-auto pt-3">
          <SideBar />
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
