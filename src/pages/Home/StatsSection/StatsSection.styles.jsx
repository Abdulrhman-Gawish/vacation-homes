import styled from "styled-components";
import { Typography, Card as AntCard } from "antd";
const { Title } = Typography;



export const StyledSection = styled.section`
  padding: 64px 0;
  background-color: #fafafa;
`;

export const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StatCard = styled.div`
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;

  .anticon,
  svg {
    font-size: 48px;
    color: #1890ff;
  }
`;

export const StatValue = styled(Title)`
  &.ant-typography {
    color: #1890ff;
    margin-bottom: 8px;
    font-size: 36px;
  }
`;
