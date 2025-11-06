import {  Typography } from 'antd';
import styled from 'styled-components';
import { motion } from 'framer-motion';

 const { Title, Paragraph } = Typography;

export const ServicesSection = styled.section`
  padding: 80px 0;
`;

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const FeatureCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 32px;
  height: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 20px;

  .anticon {
    font-size: 48px;
    color: #1890ff;
  }
`;

export const CardTitle = styled(Title)`
  &.ant-typography {
    font-size: 24px;
    font-weight: 600;
    // color: #1a1a1a; 
    margin-bottom: 16px;
    // margin-top: 0;
  }
`;

export const CardDescription = styled(Paragraph)`
  &.ant-typography {
    font-size: 16px;
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 16px;
  }
`;

export const AdditionalText = styled(Paragraph)`
  &.ant-typography {
    font-size: 14px;
    color: #718096;
    line-height: 1.5;
    margin-bottom: 0;
  }
`;