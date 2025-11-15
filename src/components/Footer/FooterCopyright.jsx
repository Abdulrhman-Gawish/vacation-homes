import React from "react";
import { Copyright, CopyrightLinks, CopyrightText } from "./Footer.styles";

const FooterCopyright = () => (
  <Copyright>
    <CopyrightText>
      © 2020 - 2025 | Sandy Beach Vacation Homes. All Rights Reserved.
    </CopyrightText>
    <CopyrightLinks>
      <a href="/terms-and-conditions">Reservation Terms</a>
      <a href="/terms-and-conditions">Rights of Property Usage</a>
      <a href="/terms-and-conditions">Cancellation, Changes and Refunds</a>
      <a href="/terms-and-conditions">Privacy Policy</a>
    </CopyrightLinks>
  </Copyright>
);

export default FooterCopyright;
