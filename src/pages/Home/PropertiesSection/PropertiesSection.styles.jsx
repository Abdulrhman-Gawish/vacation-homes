import styled from "styled-components";
import { Button, Row, Col, Typography, Card as AntCard } from "antd";
const { Title, Text, Paragraph } = Typography;

export const StyledPropertiesSection = styled.section`
  padding: 64px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const SectionDescription = styled(Paragraph)`
  &.ant-typography {
    font-size: 18px;
    color: #595959;
    margin-bottom: 0;
  }
`;

export const PropertyCard = styled(AntCard)`
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .ant-card-body {
    padding: 24px;
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 4/3;
`;

export const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PropertyCard}:hover & {
    transform: scale(1.05);
  }
`;

export const PropertyPrice = styled(Title)`
  margin-top: 10px;
  &.ant-typography {
    color: #1890ff;
  }
`;

export const PropertyTitle = styled(Title)`
  &.ant-typography {
    font-size: 18px;
  }
`;

export const PropertyLocation = styled(Text)`
  &.ant-typography {
    color: #595959;
    display: block;
    margin-bottom: 10px;
  }
`;

export const PropertyDetails = styled.div`
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: #595959;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 48px;
`;

export const ViewAllButton = styled(Button)`
  &.ant-btn {
    background-color: #1890ff;
    border-color: #1890ff;
    height: 40px;
    padding: 0 32px;

    &:hover {
      background-color: #096dd9;
      border-color: #096dd9;
    }
  }
`;
