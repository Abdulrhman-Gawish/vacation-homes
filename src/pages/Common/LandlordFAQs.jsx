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

const LandlordFAQs = () => {
  return (
    <TermsPage>
      <TermsContainer>
        <TermsHeader>
          <HeaderTitle>Landlord's FAQs</HeaderTitle>
          <HeaderText>
            Here are some frequently asked questions (FAQs) for landlords. If
            you need further assistance, feel free to reach out to our support
            team.
          </HeaderText>
        </TermsHeader>

        <Section>
          <SectionTitle>+What is a holiday home?</SectionTitle>
          <List>
            <ListItem>
              As per DTCM: A holiday home is any furnished mainland or
              freezone-located residence (studio to multiple bedrooms) that is
              rented out to guests based on the activity terms and criteria.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>
            +Which documents are required to obtain Permit?
          </SectionTitle>
          <List>
            <ListItem>
              Copy of individual owner’s passport or UAE ID for individual
              owners.
            </ListItem>
            <ListItem>
              Submission of proof of authorisation to use the Unit:
              <ul>
                <li>Copy of property Title Deed;</li>
                <li>
                  Authorisation from the owner, using the approved form from
                  DTCM (if the property owner is a legal person, i.e. a company,
                  an authorised signatory can sign the form on the condition
                  that proof of his authorisation is also submitted);
                </li>
                <li>
                  A bill issued for the Unit by Dubai Electricity and Water
                  Authority.
                </li>
              </ul>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>+When am I supposed to receive my payout?</SectionTitle>
          <List>
            <ListItem>
              The payment is to be settled on time as per previous agreement.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>
            +What shall I do if my bank account details were changed?
          </SectionTitle>
          <List>
            <ListItem>
              We advise you to immediately send us a written notice.
            </ListItem>
          </List>
        </Section>
      </TermsContainer>
    </TermsPage>
  );
};

export default LandlordFAQs;
