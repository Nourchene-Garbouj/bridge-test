import React, { useState } from 'react';
import styled from '@emotion/styled';

const FormSection = styled.section`
  padding: 4rem 2rem;
  background: #f7f7f7; /* Soft background color for a clean look */
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for floating effect */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: #f9f9f9; /* Light background for input fields */
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #007BFF; /* Blue color on focus */
    background: #fff;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: #f9f9f9;
  min-height: 150px;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #007BFF;
    background: #fff;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background: rgb(176, 24, 202); /* Vibrant blue color */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: rgb(126, 21, 145); /* Darker blue on hover */
  }

  &:active {
    background: rgb(102, 25, 115); /* Even darker on click */
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <FormSection>
      <Form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', fontWeight: '600' }}>Contact Us</h2>
        <Input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <TextArea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </FormSection>
  );
};

export default ContactForm;
