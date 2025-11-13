import React from "react";
import { Copyright, CopyrightLinks, CopyrightText } from "./Footer.styles";

const FooterCopyright = () => (
  <Copyright>
    <CopyrightText>
      © 2015–2025 | Sandy Beach Vacation Homes. All Rights Reserved.
    </CopyrightText>
    <CopyrightLinks>
      <a href="#">Reservation Terms</a>
      <a href="#">Rights of Property Usage</a>
      <a href="#">Cancellation, Changes and Refunds</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Sitemap</a>
    </CopyrightLinks>
  </Copyright>
);

export default FooterCopyright;
