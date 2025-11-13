import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { SectionTitle, ContactInfo, SocialIcons } from "./Footer.styles";

const FooterContact = () => (
  <div>
    <SectionTitle>Contact Us</SectionTitle>
    <ContactInfo>
      <p>DIC, Saih Shuaib 3, bld.WHP2-block A, office.P2AG-K13, Dubai</p>
      <p>
        {" "}
        <a
          href="https://wa.me/971526528978"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#8c8c8c", textDecoration: "none" }}
        >
          +971 52 652 8978 
        </a>
      </p>
      <p>info@dubaiprimeproperties.ae</p>
      <SocialIcons>
        <FacebookOutlined />
        <InstagramOutlined />
        <LinkedinOutlined />
        <a
          href="https://wa.me/971526528978"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppOutlined />
        </a>
        <a
          href="https://wa.me/971526528978"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fa-brands fa-whatsapp"
            style={{
              fontSize: "20px",
              color: "#8c8c8c",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#25D366")}
            onMouseOut={(e) => (e.target.style.color = "#8c8c8c")}
          ></i>
        </a>
      </SocialIcons>
    </ContactInfo>
  </div>
);

export default FooterContact;
