import styled from "styled-components";
import { Building2 } from "lucide-react";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`;

export const InnerContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const Icon = styled(Building2)`
  width: 32px;
  height: 32px;
  color: #3b82f6;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.h1`
  font-size: 0.9rem;
  color: #3b82f6;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  font-family: inherit;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.7rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.3;
  font-family: inherit;

  @media (min-width: 768px) {
    font-size: 0.8125rem;
  }
`;

export const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 0;
  }
`;

export const NavButton = styled.button`
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  font-size: 1rem;
  background: transparent;
  border: none;
  font-weight: 400;
  font-family: inherit;

  color: ${({ $active }) => ($active ? "#2563eb" : "#4b5563")};
  border-bottom: ${({ $active }) =>
    $active ? "2px solid #2563eb" : "2px solid transparent"};

  &:hover {
    color: #2563eb;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileButton = styled.button`
  font-size: 0.75rem;
  padding: 0.4rem 0.6rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  font-weight: 400;
  white-space: nowrap;

  color: ${({ $active }) => ($active ? "#ffffff" : "#4b5563")};
  background-color: ${({ $active }) =>
    $active ? "#2563eb" : "transparent"};

  &:hover {
    background-color: ${({ $active }) =>
      $active ? "#1d4ed8" : "#f3f4f6"};
  }
`;