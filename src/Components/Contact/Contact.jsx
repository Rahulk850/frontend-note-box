import React from "react";
import "./Contact.css";
import { TbMailForward } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiTwitterLogoLight , PiFacebookLogo ,PiLinkedinLogoLight} from "react-icons/pi";

export const Contact = () => {
  return (
    <div>
      <div className="contact" id = "contact">
        <div className="contact-upper">
          <div className="upper-left">
            <h1>
              NOTE-<span>BOX</span>
            </h1>

            <li>Report An Issue</li>
            <li>Support Us</li>
            <li>Suggestion Box</li>

            <div className="follow-container">
                <div className="insta footer-icons">
                <AiOutlineInstagram/>
                </div>
                <div className="twitter footer-icons">
                <PiTwitterLogoLight/>
                </div>
                <div className="facebook footer-icons">
                <PiFacebookLogo/>
                </div>
                <div className="linkedin footer-icons">
                <PiLinkedinLogoLight/>
                </div>
            </div>
          </div>
          <div className="upper-right">
            <div className="upper-right-content">
              <div className="upper-right-content-header1">
                Subscribe Us To Get Notified
              </div>
              <div className="form-subs-container">
                <form className="form-content">
                  <input
                    className="contact-email"
                    type="email"
                    placeholder="your email"
                  />
                  <TbMailForward className="contact-icon " />
                </form>
              </div>
            </div>
          </div>

        </div>
        <div className="footer">
          <p>Made with ❤️ by Rahul </p>
        </div>
      </div>
    </div>
  );
};
