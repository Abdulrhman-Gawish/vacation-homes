import styled from "styled-components";
import { Typography, Card as AntCard } from "antd";
const { Title, Text, Paragraph } = Typography;

export const StyledPropertiesSection = styled.section`
  padding: 64px 0;
  background-color: #fafafa;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const SectionDescription = styled(Paragraph)`
  font-size: 18px;
  color: #595959;
  margin-bottom: 0;
`;

export const PropertiesScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 24px;
  scroll-behavior: smooth; 
  padding-bottom: 16px;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x; 

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PropertyCard = styled(AntCard)`
  flex: 0 0 320px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .ant-card-body {
    padding: 16px 20px;
  }
`;

export const PropertyImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PropertyCard}:hover & {
    transform: scale(1.05);
  }
`;

export const PropertyTitle = styled(Title)`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 4px;
`;

export const PropertyLocation = styled(Text)`
  color: #8c8c8c;
  display: block;
  margin-bottom: 10px;
`;

export const PropertyDetails = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;
  color: #595959;
`;
