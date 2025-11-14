import React, { useState } from "react";
import {
  TermsPage,
  TermsContainer,
  TermsHeader,
  HeaderTitle,
  HeaderText,
  ListItem,
} from "./Common.styles.jsx";
import {
  ChevronIcon,
  AccordionItem,
} from "@components/Shared-Components/SharedComponents.jsx";

<ChevronIcon />;
<AccordionItem />;

const LandlordFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <TermsPage>
      <TermsContainer>
        <TermsHeader>
          <HeaderTitle>Landlord's FAQs</HeaderTitle>
          <HeaderText>
            Here are some frequently asked questions (FAQs) for landlords.
          </HeaderText>
        </TermsHeader>

        <AccordionItem
          id={0}
          title="What is a holiday home?"
          isOpen={openIndex === 0}
          onToggle={toggle}
        >
          <ListItem>
            A holiday home is any furnished residence rented to guests as per
            DTCM regulations.
          </ListItem>
        </AccordionItem>

        <AccordionItem
          id={1}
          title="Which documents are required to obtain a permit?"
          isOpen={openIndex === 1}
          onToggle={toggle}
        >
          <ListItem>Owner’s passport or Emirates ID copy.</ListItem>
          <ListItem>
            Proof of authorization:
            <ul>
              <li>Property Title Deed</li>
              <li>DTCM-approved authorization form</li>
              <li>DEWA bill</li>
            </ul>
          </ListItem>
        </AccordionItem>

        <AccordionItem
          id={2}
          title="When will I receive my payout?"
          isOpen={openIndex === 2}
          onToggle={toggle}
        >
          <ListItem>The payout is settled as per the agreement.</ListItem>
        </AccordionItem>

        <AccordionItem
          id={3}
          title="What if my bank details change?"
          isOpen={openIndex === 3}
          onToggle={toggle}
        >
          <ListItem>Please notify us immediately in writing.</ListItem>
        </AccordionItem>
      </TermsContainer>
    </TermsPage>
  );
};

export default LandlordFAQs;
