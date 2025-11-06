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
//   max-width: 1200px;
//   margin: 0 auto;
  padding: 0 16px;
  text-align: center;
`;

export const MainTitle = styled(Title)`
  &.ant-typography {
    color: #ffffff;
    font-size: 48px;
    margin-bottom: 16px;
    font-weight: 700;
  }
`;

export const SubTitle = styled(Paragraph)`
  &.ant-typography {
    color: #ffffff;
    font-size: 18px;
    // opacity: 0.9;
    margin-bottom: 0;
  }
`;
