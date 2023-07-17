import React from "react";
import "./PDFdisplay.css";
import intStud from "../fromAcadamicTeam/International_students_guide.pdf";
import CANDIDATES from "../fromAcadamicTeam/Reg._Plan_International__PG__Ph.D..pdf";
import Registration from "../fromAcadamicTeam/1.Registration_for_new_PHD_student.pdf";
import academic from "../fromAcadamicTeam/The steps and doc required for accadamic registration.pdf";
import process from "../fromAcadamicTeam/7.Advisor_Selection_Process.pdf";
import FRRO from "../fromAcadamicTeam/FRRO Annex II_01022018.pdf";
import General from "../fromAcadamicTeam/Fact_Sheet_IIT_Roorkee_2023.pdf";
import Useful from "../fromAcadamicTeam/8.Useful Locations and Links.pdf";
import internet from "../fromAcadamicTeam/How_to_connect_internet_for_Windows.pdf";
import requisition from "../fromAcadamicTeam/ICC Faculty Manual.pdf";
import IITR from "../fromAcadamicTeam/IITR WIFI Registration.pdf";
import SIM from "../fromAcadamicTeam/Sim card Subscription_2.pdf";
import Network from "../fromAcadamicTeam/Network_Security_Setup.rar";
import software from "../fromAcadamicTeam/anyconnect.zip";
import BonofiedOnline from "../fromAcadamicTeam/NEW/bonofied online application steps.pdf"
import BonofiiedExampleFirstTime from "../fromAcadamicTeam/NEW/first time bonofied example.pdf"
import FRROOnlineApplication from "../fromAcadamicTeam/NEW/Effro-format-to-apply-online.pdf"
import FORMCexample from "../fromAcadamicTeam/NEW/FORM -C.pdf"

function PDFdisplay() {
  return (
    <>
      <h1 className="h1 text-decoration-underline">Useful Documents</h1>
      <div className="d-md-flex main-box-wraper">
        <div>
          <div className="box">
            <h5>International Students guide</h5>
            <a href={intStud} download>
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>
              ADMISSION REGISTRATIONS INTERNATIONAL CANDIDATES FOR ADMISSION TO
              Ph.D. & POSTGRADUATE PROGRAMS (2023-24)
            </h5>
            <a
              href={CANDIDATES}
              download
            >
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>Registration for new P.h.D students</h5>
            <a
              href={Registration}
              download
            >
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>The steps and doc required for academic registration</h5>
            <a
              href={academic}
              download
            >
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>Advisor selection process</h5>
            <a
              href={process}
              download
            >
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>FRRO Information</h5>
            <a href={FRRO} download>
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>General Information Brochure </h5>
            <a
              href={General}
              download
            >
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>Useful locations with link</h5>
            <a
              href={Useful}
              download
            >
              Download pdf
            </a>
          </div>
        </div>

        <div>
         
          <div className="box">
            <h5>How to connect internet </h5>
            <a
              href={internet}
              download
            >
              Download pdf
            </a>
            <br />
            <a href={Network} download>
              {" "}
              Network security setup download
            </a>
            <br />
            <a href={software} download>
              Any connect software download
            </a>
          </div>
          <div className="box">
            <h5>Software requisition portal Info</h5>
            <a href={requisition} download>
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>IITR WIFI registration steps</h5>
            <a href={IITR} download>
              Download pdf
            </a>
            <h5>
              {" "}
              on your first arrival till you get your own user name and
              <br /> password, use this username:22908021 <br />
              password :7452099300 to connect to wifi{" "}
            </h5>
          </div>
          <div className="box">
            <h5>SIM card subscription steps</h5>
            <a href={SIM} download>
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>Steps for Bonofied application online</h5>
            <a href={BonofiedOnline} download>
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>Bonofied Examplel for first time</h5>
            <a href={BonofiiedExampleFirstTime} download>
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>online application for FRRO</h5>
            <a href={FRROOnlineApplication} download>
              Download pdf
            </a>
          </div>
          <div className="box">
            <h5>FORM-C example</h5>
            <a href={FORMCexample} download>
              Download pdf
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PDFdisplay;
