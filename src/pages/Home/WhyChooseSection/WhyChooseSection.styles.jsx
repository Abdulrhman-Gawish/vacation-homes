import styled from "styled-components";
import { Button, Row, Col, Typography, Card as AntCard } from "antd";
const { Title, Text, Paragraph } = Typography;

export const StyledWhyChooseSection = styled.section`
  padding: 64px 0;
  background-color: #1890ff;
  color: #ffffff;
`;

export const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 16px;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

export const SectionTitle = styled(Title)`
  &.ant-typography {
    color: #ffffff;
  }
`;

export const SectionDescription = styled(Paragraph)`
  &.ant-typography {
    color: #ffffff;
    font-size: 18px;
    // opacity: 0.9;
    // margin-bottom: 0;
  }
`;

export const FeaturesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const FeatureCard = styled.div`
  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;

//   .anticon {
//     font-size: 32px;
//     color: #ffffff;
//   }
`;

export const FeatureTitle = styled(Title)`
  &.ant-typography {
    color: #ffffff;
    font-size: 18px;
    // font-weight: 600;
  }
`;

export const FeatureDescription = styled(Paragraph)`
color: #ffffff;
//   &.ant-typography {
//     // color: #ffffff;
//     // opacity: 0.9;
//     // margin-bottom: 0;
//     // font-size: 14px;
//   }
`;
