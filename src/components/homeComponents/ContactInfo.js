import React from "react";
import { BsFillShareFill } from "react-icons/bs";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Contacts</h5>
            <a href="tel:+380992755518">+38 (099) 275 55 18</a>
            <a href="mailto:meserenko.oleg@gmail.com">
              meserenko.oleg@gmail.com
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Location</h5>
            <a href="http://maps.google.com/?q=Ivano-Frankivsk, Ukraine">
              Ivano-Frankivsk, Ukraine
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <BsFillShareFill />
            </div>
            <h5>Social Media</h5>
            <div className="d-flex social-media">
              <a href="https://www.facebook.com/oleg.meserenko.58">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/olegmeserenko">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/olegmeserenko/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
