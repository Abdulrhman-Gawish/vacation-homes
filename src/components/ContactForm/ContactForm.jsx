import { useState } from "react";
import { Col, Form } from "antd";
import {
  StyledCard,
  SectionTitle,
  StyledForm,
  StyledInput,
  StyledTextArea,
  SubmitButton,
} from "./ContactForm.styles";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [form] = Form.useForm();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("access_key", "0170476a-6750-415a-b68d-726ca0249149");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone || "");
    formData.append("message", values.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        form.resetFields();
      } else {
        setResult("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <Col xs={24} lg={12}>
      <StyledCard
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionTitle>Send Us a Message</SectionTitle>

        <StyledForm
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          requiredMark="optional"
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              { required: true, message: "Please enter your full name" },
              {
                pattern: /^[A-Za-z\s]{3,50}$/,
                message:
                  "Name should contain only letters and spaces (3–50 chars)",
              },
            ]}
          >
            <StyledInput placeholder="John Doe" size="large" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <StyledInput placeholder="john@example.com" size="large" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^\+?\d{7,15}$/,
                message:
                  "Please enter a valid phone number (e.g., +971501234567)",
              },
            ]}
          >
            <StyledInput placeholder="+971 XX XXX XXXX" size="large" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[
              { required: true, message: "Please enter your message" },
              {
                min: 10,
                message: "Message should be at least 10 characters long",
              },
            ]}
          >
            <StyledTextArea
              placeholder="Tell us about your property requirements..."
              rows={6}
            />
          </Form.Item>

          <Form.Item>
            <SubmitButton type="primary" htmlType="submit">
              Send Message
            </SubmitButton>
            {result && (
              <p
                style={{
                  marginTop: "10px",
                  color: result ? "green" : "red",
                }}
              >
                {result}
              </p>
            )}
          </Form.Item>
        </StyledForm>
      </StyledCard>
    </Col>
  );
};

export default ContactForm;
