import { Typography } from "antd";
import styled from "styled-components";

const { Title, Paragraph } = Typography;

export const TouchSection = styled.section`
  background-color: #1890ff;
  color: #ffffff;
  padding: 60px 0;
  height: min-content;
`;

export const Container = styled.div`
  padding: 0 16px;
  text-align: center;
`;

export const MainTitle = styled(Title)`
  &.ant-typography {
    color: #ffffff;
    font-size: 2.5rem;
    margin-bottom: 16px;
    font-weight: 700;
  }
`;

export const SubTitle = styled(Paragraph)`
  &.ant-typography {
    color: #ffffff;
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
