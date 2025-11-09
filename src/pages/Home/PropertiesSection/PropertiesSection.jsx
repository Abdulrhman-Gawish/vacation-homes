import { useEffect, useRef, useState } from "react";
import { Typography } from "antd";
import {
  StyledPropertiesSection,
  Container,
  SectionHeader,
  SectionDescription,
  PropertiesScrollContainer,
} from "./PropertiesSection.styles";
import PropertiesList from "./PropertiesList";
import { properties } from "@utils/properties";

const { Title } = Typography;

const PropertiesSection = () => {
  const scrollRef = useRef(null);
  const isUserInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 0.8;
    const intervalMs = 16;

    const tick = () => {
      if (!scrollContainer || isUserInteractingRef.current || !isAutoScrolling) return;

      scrollContainer.scrollLeft += scrollStep;
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollContainer.scrollLeft >= halfWidth) {
        scrollContainer.scrollLeft -= halfWidth;
      }
    };

    const intervalId = setInterval(tick, intervalMs);
    return () => clearInterval(intervalId);
  }, [isAutoScrolling]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const pauseDuration = 1500;

    const userInteracted = () => {
      isUserInteractingRef.current = true;
      setIsAutoScrolling(false);

      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

      resumeTimeoutRef.current = setTimeout(() => {
        isUserInteractingRef.current = false;
        setIsAutoScrolling(true);
        resumeTimeoutRef.current = null;
      }, pauseDuration);
    };

    scrollContainer.addEventListener("wheel", userInteracted, { passive: true });
    scrollContainer.addEventListener("touchstart", userInteracted, { passive: true });
    scrollContainer.addEventListener("pointerdown", userInteracted, { passive: true });

    const keyHandler = (e) => {
      const keys = ["ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End", " "];
      if (keys.includes(e.key)) userInteracted();
    };
    window.addEventListener("keydown", keyHandler);

    return () => {
      scrollContainer.removeEventListener("wheel", userInteracted);
      scrollContainer.removeEventListener("touchstart", userInteracted);
      scrollContainer.removeEventListener("pointerdown", userInteracted);
      window.removeEventListener("keydown", keyHandler);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const doubled = [...properties, ...properties];

  return (
    <StyledPropertiesSection>
      <Container>
        <SectionHeader>
          <Title level={1}>Featured Properties</Title>
          <SectionDescription>
            Explore our handpicked selection of luxury properties
          </SectionDescription>
        </SectionHeader>

        <PropertiesScrollContainer ref={scrollRef}>
          <PropertiesList properties={doubled} />
        </PropertiesScrollContainer>
      </Container>
    </StyledPropertiesSection>
  );
};

export default PropertiesSection;
