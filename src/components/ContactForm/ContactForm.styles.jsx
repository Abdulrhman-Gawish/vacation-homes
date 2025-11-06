import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";

const { TextArea } = Input;

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

export const StyledForm = styled(Form)`
  .ant-form-item-label > label {
    font-size: 14px;
    font-weight: 500;
    color: #262626;

    &.ant-form-item-required::before {
      color: #ff4d4f;
    }
  }
`;

export const StyledInput = styled(Input)`
  &.ant-input {
    height: 44px;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
  }
`;

export const StyledTextArea = styled(TextArea)`
  &.ant-input {
    border: 1px solid #d9d9d9;
    transition: all 0.3s ease;
  }
`;

export const SubmitButton = styled(Button)`
  &.ant-btn {
    width: 100%;
    height: 48px;
    background-color: #1890ff;
    border-color: #1890ff;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.5s ease;

    &:hover {
      background-color: #096dd9;
      border-color: #096dd9;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;
