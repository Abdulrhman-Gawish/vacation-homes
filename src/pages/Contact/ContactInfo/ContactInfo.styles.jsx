import { Row, Col, Card as AntCard, Typography } from 'antd';
import styled, { keyframes } from 'styled-components';

const { Title, Text } = Typography;

 const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
 const iconFloat = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

export const ContactSection = styled.section`
  padding: 64px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ContactCard = styled(AntCard)`
  text-align: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.$delay || '0s'};
  animation-fill-mode: backwards;
  height: 100%; 

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transform: translateY(-4px);
  }

  .ant-card-body {
    padding: 32px 24px;
    min-height: 220px; 
  }
`;
export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  transition: all 0.3s ease;

  .anticon,
  svg {
    width: 32px;
    height: 32px;
    color: #1890ff;
    transition: all 0.3s ease;
  }

  ${ContactCard}:hover & {
    background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
    animation: ${iconFloat} 1.5s ease-in-out infinite;

    .anticon,
    svg {
      color: #ffffff;
    }
  }
`;

export const CardTitle = styled(Title)`
  &.ant-typography {
    font-size: 18px;
    margin-bottom: 12px;
    font-weight: 600;
    color: #262626;
    transition: color 0.3s ease;
  }

  ${ContactCard}:hover & {
    color: #1890ff;
  }
`;

export const CardText = styled(Text)`
  &.ant-typography {
    display: block;
    color: #595959;
    font-size: 14px;
    line-height: 1.8;
  }
`;

