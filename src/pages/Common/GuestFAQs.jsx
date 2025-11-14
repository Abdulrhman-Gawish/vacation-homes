import React from "react";
import {
  TermsPage,
  TermsContainer,
  TermsHeader,
  HeaderTitle,
  HeaderText,
  Section,
  SectionTitle,
  List,
  ListItem,
  StrongText,
} from "./Common.styles.jsx";

const GuestFAQs = () => {
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

        <Section>
          <SectionTitle>
            +What are the accepted methods of payment?
          </SectionTitle>
          <List>
            <ListItem>
              We accept the following methods of payment:
              <ul>
                <li>
                  Debit or credit cards through our online payment portal or POS
                  terminals.
                </li>
                <li>Bank transfers.</li>
                <li>Cash.</li>
              </ul>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>+Is there parking available?</SectionTitle>
          <List>
            <ListItem>
              Yes, all of our accommodations have car parking. The number of
              parking spaces typically corresponds to the unit size. If you
              require additional parking space, our guest support team can
              assist you, with possible additional charges applicable.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>+Do you offer Wi-Fi?</SectionTitle>
          <List>
            <ListItem>
              Yes, complimentary Wi-Fi is available throughout the stay premises
              for all guests.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>+Are pets allowed?</SectionTitle>
          <List>
            <ListItem>
              We understand that pets are part of the family! Please note that
              only specific units in our inventory accept pets.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>
            +Are there any facilities or amenities available for guests to use?
          </SectionTitle>
          <List>
            <ListItem>
              Our properties are fully equipped and furnished, providing
              amenities such as complimentary WiFi, kitchen appliances,
              toiletries, central air conditioning, and more.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>
            +Is there a shuttle/cab service to nearby attractions or the
            airport?
          </SectionTitle>
          <List>
            <ListItem>
              While we don’t offer a dedicated shuttle/cab service, many of our
              properties are conveniently located near public transportation
              options. Guests can utilize popular ride-sharing services such as
              Careem, Uber.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>
            +What are the dining options available on-site or nearby?
          </SectionTitle>
          <List>
            <ListItem>
              For dining options, you can explore dine-in or food delivery
              services available nearby. You can use the following options when
              staying at any of our properties in Dubai:
              <ul>
                <li>
                  InstaShop: Offers fast grocery delivery to your doorstep.
                </li>
                <li>
                  Talabat: Provides a variety of food delivery and dine-in
                  options from various restaurants.
                </li>
                <li>
                  Deliveroo: Order food from a selection of restaurants with
                  Deliveroo.
                </li>
                <li>
                  Careem: Careem food delivery service is also available
                  throughout the country.
                </li>
              </ul>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>
            +How do I contact the guest support for assistance during my stay?
          </SectionTitle>
          <List>
            <ListItem>
              To access guest support during your stay, you can reach out to us
              via our support number that was provided during the booking step
              until checkout.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>
            +Are there any additional fees or charges I should be aware of?
          </SectionTitle>
          <List>
            <ListItem>
              No, there are no hidden charges or additional fees when booking.
              All charges are transparent and fully outlined. Please feel free
              to inquire about any additional services you may require.
            </ListItem>
          </List>
        </Section>
      </TermsContainer>
    </TermsPage>
  );
};

export default GuestFAQs;
