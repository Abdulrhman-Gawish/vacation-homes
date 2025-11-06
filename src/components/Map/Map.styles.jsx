import { Row, Col, Form, Input, Button } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCard = styled(motion.div)`
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  height: 100%;
`;
export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #262626;
  margin-bottom: 32px;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  iframe {
    border: 0;
  }
`;
