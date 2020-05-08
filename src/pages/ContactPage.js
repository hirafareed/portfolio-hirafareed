import React from "react";
import "../sass/style.scss";

const ContactPage = () => (
  <>
    <div className="container App layout-contact">
      <div className="subheading">
        <hr className="line-contact" />
        <h6 className="contact-sub ">Contact</h6>
      </div>
      <br></br>

      {/* about-info */}
      <div className="contact-info">
        <h1>Let's connect</h1>

        <a href="mailto:hirafareedkapadia@gmail.com">
          hirafareedkapadia@gmail.com
        </a>

        <p>
          If you would like to chat or have any questions, I would love to hear
          from you at the email above. Feel free to connect with me on social
          media!
        </p>
        <p className="contact-cheers">
          Cheers,<br></br>Hira
        </p>
      </div>
    </div>
  </>
);

export default ContactPage;
