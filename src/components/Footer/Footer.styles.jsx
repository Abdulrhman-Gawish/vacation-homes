import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #001529;
  color: #fff;
  padding: 48px 0 24px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

export const BrandSubtitle = styled.span`
  font-size: 12px;
  color: #8c8c8c;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #8c8c8c;
  line-height: 1.6;
  margin: 0;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LinkItem = styled.li`
  font-size: 14px;

  a {
    color: #8c8c8c;
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
  color: #8c8c8c;

`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;

  .anticon {
    font-size: 20px;
    color: #8c8c8c;
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
  text-align: center;
  font-size: 14px;
  color: #8c8c8c;

  p {
    margin: 0;
  }
`;
