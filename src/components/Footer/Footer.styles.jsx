import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #001529;
  color: #fff;
  padding: 48px 0 24px;
  font-family: "Inter", sans-serif;
`;

export const FooterContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  margin-bottom: 48px;
  justify-items: start;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  svg {
    width: 28px;
    height: 28px;
    color: #1890ff;
  }
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

export const BrandSubtitle = styled.span`
  font-size: 13px;
  color: #8c8c8c;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #b0b0b0;
  line-height: 1.6;
  margin: 0;
  max-width: 280px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 32px;
    height: 2px;
    background-color: #1890ff;
    margin-top: 6px;
    border-radius: 4px;
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  font-size: 14px;

  a {
    color: #b0b0b0;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1890ff;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #b0b0b0;
  max-width: 250px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;

  .anticon {
    font-size: 20px;
    color: #b0b0b0;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #1890ff;
    }
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid #303030;
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 14px;
  color: #8c8c8c;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  color: #8c8c8c;
`;

export const CopyrightLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1890ff;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

