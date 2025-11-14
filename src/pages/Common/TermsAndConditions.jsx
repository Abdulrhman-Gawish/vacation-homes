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
  Sublist,
} from "./Common.styles.jsx";

const TermsAndConditions = () => {
  return (
    <TermsPage>
      <TermsContainer>
        <TermsHeader>
          <HeaderTitle>Reservation Terms & Conditions</HeaderTitle>
          <HeaderText>
            By confirming a reservation with Sandy Beach Vacation Homes™ Rental
            LLC (“Operator”), whether directly or via a third party, you
            acknowledge that you have read, understood, and agreed to these
            Reservation Terms & Conditions (“Terms”). By proceeding with
            payment, you confirm your acceptance of all clauses herein.
          </HeaderText>
        </TermsHeader>

        <Section>
          <SectionTitle>Definitions</SectionTitle>
          <List>
            <ListItem>
              <StrongText>Operator</StrongText>: Sandy Beach Vacation Homes™
              Rental LLC, a DET Licensed.
            </ListItem>
            <ListItem>
              <StrongText>Property or Premises</StrongText>: The licensed
              holiday home identified in your reservation.
            </ListItem>
            <ListItem>
              <StrongText>Guest(s)</StrongText>: Individuals named in the
              reservation for temporary accommodation.
            </ListItem>
            <ListItem>
              <StrongText>Visitor(s)</StrongText>: Individuals who enter or use
              the Property but are not registered for an overnight stay unless
              they hold their own confirmed booking.
            </ListItem>
            <ListItem>
              <StrongText>DET</StrongText>: Department of Economy and Tourism,
              Dubai.
            </ListItem>
            <ListItem>
              <StrongText>VAT</StrongText>: Five percent (5%) Value Added Tax as
              mandated by UAE law.
            </ListItem>
            <ListItem>
              <StrongText>Security Deposit</StrongText>: A monetary hold or
              payment collected by the Operator or a booking platform to cover
              potential damages, penalties, or additional charges.
            </ListItem>
            <ListItem>
              <StrongText>TDF</StrongText>: Tourism Dirham Fee, as required
              under Dubai regulations.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Rights of Property Usage</SectionTitle>
          <List>
            <ListItem>
              <StrongText>Accommodation Scope</StrongText>: The Property is
              rented solely for short-term holiday accommodation and does not
              create a tenancy under Dubai’s residential tenancy laws.
            </ListItem>
            <ListItem>
              <StrongText>Age Requirement & Supervision</StrongText>: All Guests
              and Visitors under 19 years of age must be accompanied by an
              adult. Parents or legal guardians are fully responsible for the
              supervision, safety, and behavior of minors at the Property; the
              Operator disclaims liability for any injuries or damages resulting
              from unsupervised children.
            </ListItem>
            <ListItem>
              <StrongText>Valid ID & Payment Verification</StrongText>: Guests
              must present valid identification (such as Emirates ID or
              passport) and the payment card used for the reservation at
              check-in. If the card is invalid, the Operator may cancel the
              booking.
            </ListItem>
            <ListItem>
              <StrongText>Visitor Policy</StrongText>: The number of Visitors
              allowed is subject to community regulations and the Operator’s
              discretion. Visitors staying past 10:00 PM without prior approval
              may be considered unauthorized occupants and subject to penalties
              or eviction.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Reservation</SectionTitle>
          <List>
            <ListItem>
              <StrongText>Confirmation of Booking</StrongText>: A reservation is
              confirmed only upon receipt of all required fees (rent, Security
              Deposit, taxes, and any other applicable charges). The Operator
              will issue a confirmation email or notice containing your booking
              details.
            </ListItem>
            <ListItem>
              <StrongText>Extensions</StrongText>: Reservation extensions are at
              the Operator’s discretion, subject to availability, and may be
              charged at the prevailing rate.
            </ListItem>
            <ListItem>
              <StrongText>Early Departure</StrongText>: If the Guest leaves the
              Property prior to the agreed checkout date without the Operator’s
              written approval, no prorated refund shall be issued, and the
              Operator will charge the full amount.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Security Deposit, Damages, and Charges</SectionTitle>
          <List>
            <ListItem>
              <StrongText>Guest Liability</StrongText>: The Guest is fully
              responsible for any damage, loss, or negligence caused by
              themselves, their Visitors, or authorized pets. Even if no
              Security Deposit is collected, the Guest must pay for repairs,
              replacements, or penalties.
            </ListItem>
            <ListItem>
              <StrongText>Deposit Collection & Refund Timeline</StrongText>: The
              Security Deposit may be collected via credit card, bank transfer,
              or cash. Refunds, if no claims arise, will typically be processed
              within 1–3 working days.
            </ListItem>
            <ListItem>
              <StrongText>Refund Methods</StrongText>:
              <Sublist>
                <ListItem>
                  <StrongText>
                    Security Deposit Paid Online (Credit Card)
                  </StrongText>
                  : Refunded back to the same credit card, generally the fastest
                  method.
                </ListItem>
                <ListItem>
                  <StrongText>Bank Transfers</StrongText>: The Operator will
                  collect your banking details and refund the same originating
                  account.
                </ListItem>
                <ListItem>
                  <StrongText>Cash</StrongText>: The Operator will collect your
                  bank account details upon departure and refund to the account
                  of the original payer or main Guest.
                </ListItem>
              </Sublist>
            </ListItem>
            <ListItem>
              <StrongText>Authorized Deductions</StrongText>: The Operator may
              deduct charges for damage repair, missing items, lost keys/cards,
              excessive cleaning, misconduct penalties, and similar valid
              claims.
            </ListItem>
            <ListItem>
              <StrongText>Insufficient Deposit</StrongText>: If valid claims
              exceed the Security Deposit, the Guest must promptly pay the
              shortfall upon the Operator’s request.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Rates, Currency, and Taxes</SectionTitle>
          <List>
            <ListItem>
              <StrongText>VAT</StrongText>: A 5% Value Added Tax applies to
              rent, fees, and services under UAE law.
            </ListItem>
            <ListItem>
              <StrongText>Tourism Dirham Fee (TDF)</StrongText>: Levied for the
              first 30 consecutive nights from check-in, per DET regulations.
              Renewing or extending the stay may reset TDF charges.
            </ListItem>
            <ListItem>
              <StrongText>Currency & Exchange</StrongText>: The default currency
              is UAE Dirhams (AED). If paid in another currency, the Operator’s
              chosen exchange rate applies. Refunds will also follow the
              prevailing rate and may differ from the original transaction.
            </ListItem>
            <ListItem>
              <StrongText>International Fees</StrongText>: The Guest bears
              responsibility for bank or remittance costs arising from foreign
              payments or conversions.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Cancellation, Changes, and Refunds</SectionTitle>
          <List>
            <ListItem>
              <StrongText>No Prorated Refunds</StrongText>: If the Guest departs
              early without the Operator’s written approval, no partial refund
              applies.
            </ListItem>
            <ListItem>
              <StrongText>Refund & Cancellation Policy</StrongText>: Any refund
              eligibility or cancellation fee is governed by the Operator’s
              separate Cancellation & Refund Policy.
            </ListItem>
            <ListItem>
              <StrongText>Operator’s Cancellation</StrongText>: If the Operator
              cancels without just cause, the Guest will receive a full refund.
              No other claims or liabilities shall be honored.
            </ListItem>
            <ListItem>
              <StrongText>Force Majeure</StrongText>: Neither party is liable
              for cancellations or changes triggered by events beyond their
              reasonable control (natural disasters, acts of war, etc.).
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Penalties and Eviction</SectionTitle>
          <p>
            The Operator may forfeit the entire Security Deposit and evict the
            Guest and their Visitors immediately for excessive noise (especially
            between 10:00 PM and 8:00 AM), trespassing, smoking indoors, hosting
            unauthorized parties, conducting illegal activities, insulting
            Operator or Community Management staff, or any violation resulting
            in a community or local authority fine.
          </p>
        </Section>

        <Section>
          <SectionTitle>
            Maintenance, Issue Resolution, and Personal Belongings
          </SectionTitle>
          <List>
            <ListItem>
              <StrongText>Residential Environment</StrongText>: Guests
              acknowledge they are staying in a residential property where
              service standards differ from hotels. Response times may depend on
              third-party building management or security protocols.
            </ListItem>
            <ListItem>
              <StrongText>Maintenance Access</StrongText>: The Guest must allow
              Operator staff or appointed contractors to enter the Property for
              inspections, repairs, or maintenance.
            </ListItem>
            <ListItem>
              <StrongText>Left-Behind Items</StrongText>: Personal items left at
              the Property will be retained by the Operator for seven (7) days.
              After this period, unclaimed items may be discarded or donated.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Governing Law and Jurisdiction</SectionTitle>
          <p>
            These Terms are governed by the laws of the Emirate of Dubai and
            applicable UAE Federal laws. Any disputes shall be adjudicated
            exclusively by Dubai’s regular courts.
          </p>
        </Section>

        <Section>
          <SectionTitle>Agreement Acknowledgment</SectionTitle>
          <p>
            By submitting a payment or proceeding with a reservation, you
            confirm that you have read, understood, and accepted these
            Reservation Terms & Conditions in full.
          </p>
        </Section>
      </TermsContainer>
    </TermsPage>
  );
};

export default TermsAndConditions;
