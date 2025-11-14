import React, { useState, useRef, useEffect } from "react";
import {
  AccordionWrapper,
  AccordionHeader,
  HeaderLeft,
  AccordionIcon,
  AccordionContent,
  SectionTitle,
  List,
} from "@pages/Common/Common.styles.jsx";


export const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const AccordionItem = ({ title, isOpen, onToggle, children, id }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const inner = el.firstElementChild;
    const h = inner ? inner.scrollHeight : 0;
    if (isOpen) {
      setHeight(h);
    } else {
      setHeight(0);
    }
  }, [isOpen, children]);

  return (
    <AccordionWrapper>
      <AccordionHeader aria-expanded={isOpen} onClick={() => onToggle(id)}>
        <HeaderLeft>
          <SectionTitle>{title}</SectionTitle>
        </HeaderLeft>

        <AccordionIcon open={isOpen} aria-hidden>
          <ChevronIcon />
        </AccordionIcon>
      </AccordionHeader>

      <AccordionContent
        ref={contentRef}
        style={{
          height: `${height}px`,
          transition: "height 350ms cubic-bezier(.2,.9,.2,1)",
        }}
        className={isOpen ? "open" : "closed"}
      >
        <div className="inner">
          <List>{children}</List>
        </div>
      </AccordionContent>
    </AccordionWrapper>
  );
};
