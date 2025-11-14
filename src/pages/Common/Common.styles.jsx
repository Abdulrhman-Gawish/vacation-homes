// Common.styles.jsx
import styled from "styled-components";

export const TermsPage = styled.main`
  background-color: #ffffff;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

export const TermsContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 70px 30px;
  color: #374151; /* slightly darker for contrast */
  line-height: 1.7;
  font-size: 15px;
`;

export const TermsHeader = styled.header`
  margin-bottom: 40px;
`;

export const HeaderTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1890ff;
`;

export const HeaderText = styled.p`
  max-width: 900px;
`;

export const Section = styled.section`
  margin-bottom: 22px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #111827;
  user-select: none;
`;

/* Lists */
export const List = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

export const StrongText = styled.strong`
  font-weight: 600;
`;

export const Sublist = styled.ul`
  margin-top: 6px;
  padding-left: 18px;
  list-style-type: disc;
`;

/* -------------------------------------- */
/*             Accordion Styles           */
/* -------------------------------------- */

export const AccordionWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #e6eef9;
  padding: 8px 0;
`;

export const AccordionHeader = styled.button`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 12px 0;
  transition: background 0.15s ease;
  &:hover {
    background: rgba(24, 144, 255, 0.03);
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AccordionIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  transition: transform 300ms cubic-bezier(.2,.9,.2,1);
  transform: ${(props) => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
  svg {
    width: 18px;
    height: 18px;
    display: block;
    stroke: #0f172a;
    stroke-width: 2;
  }
`;

/* Content: we'll animate height + opacity + translate for smooth slide+fade */
export const AccordionContent = styled.div`
  overflow: hidden;
  will-change: height, opacity;
  /* default padding is zero when closed; inline style will set height */
  /* inner container for padding + transform */
  .inner {
    padding: 10px 0 18px 0;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease, transform 300ms ease;
  }
  &.closed .inner {
    opacity: 0;
    transform: translateY(-6px);
  }
`;
