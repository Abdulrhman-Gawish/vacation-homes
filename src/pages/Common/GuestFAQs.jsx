import React, { useState, } from "react";
import {
  TermsPage,
  TermsContainer,
  TermsHeader,
  HeaderTitle,
  HeaderText,
  
  ListItem,

} from "./Common.styles.jsx";
import { ChevronIcon , AccordionItem} from "@components/Shared-Components/SharedComponents.jsx";


<ChevronIcon />;
<AccordionItem />;



const GuestFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <TermsPage>
      <TermsContainer>
        <TermsHeader>
          <HeaderTitle>Guest FAQs</HeaderTitle>
          <HeaderText>
            Here are some frequently asked questions (FAQs) to help you with
            your stay. If you need further assistance, feel free to reach out to
            our support team.
          </HeaderText>
        </TermsHeader>

        <AccordionItem
          id={0}
          title="What payment methods are accepted?"
          isOpen={openIndex === 0}
          onToggle={toggle}
        >
          <ListItem>
            Debit or credit cards through our online payment portal or POS
            terminals.
          </ListItem>
          <ListItem>Bank transfers.</ListItem>
          <ListItem>Cash.</ListItem>
        </AccordionItem>

        <AccordionItem
          id={1}
          title="Is parking available?"
          isOpen={openIndex === 1}
          onToggle={toggle}
        >
          <ListItem>
            Yes, all our accommodations include parking facilities. The number
            of available parking spaces typically depends on the unit size.
          </ListItem>
        </AccordionItem>

        <AccordionItem
          id={2}
          title="Do you offer Wi-Fi?"
          isOpen={openIndex === 2}
          onToggle={toggle}
        >
          <ListItem>
            Yes, complimentary high-speed Wi-Fi is available throughout all our
            properties.
          </ListItem>
        </AccordionItem>

        <AccordionItem
          id={3}
          title="Are pets allowed?"
          isOpen={openIndex === 3}
          onToggle={toggle}
        >
          <ListItem>
            Pets are allowed only in selected units. Please contact us before
            booking to confirm pet-friendly availability.
          </ListItem>
        </AccordionItem>

        <AccordionItem
          id={4}
          title="What facilities and amenities are available for guests?"
          isOpen={openIndex === 4}
          onToggle={toggle}
        >
          <ListItem>
            Amenities include complimentary Wi-Fi, kitchen appliances,
            toiletries, central AC, and more.
          </ListItem>
        </AccordionItem>

        <AccordionItem
          id={5}
          title="Is there a shuttle or cab service to nearby attractions or the airport?"
          isOpen={openIndex === 5}
          onToggle={toggle}
        >
          <ListItem>
            We do not provide shuttle service, but properties are near public
            transportation and ride-sharing options.
          </ListItem>
        </AccordionItem>

        <AccordionItem
          id={6}
          title="What dining options are available on-site or nearby?"
          isOpen={openIndex === 6}
          onToggle={toggle}
        >
          <ListItem>
            Popular apps: InstaShop, Talabat, Deliveroo, Careem Food.
          </ListItem>
        </AccordionItem>

        <AccordionItem
          id={7}
          title="How can I contact guest support during my stay?"
          isOpen={openIndex === 7}
          onToggle={toggle}
        >
          <ListItem>
            You can reach support using the number shared during booking.
          </ListItem>
        </AccordionItem>

        <AccordionItem
          id={8}
          title="Are there any additional fees I should be aware of?"
          isOpen={openIndex === 8}
          onToggle={toggle}
        >
          <ListItem>No hidden fees. All charges are transparent.</ListItem>
        </AccordionItem>
      </TermsContainer>
    </TermsPage>
  );
};

export default GuestFAQs;
