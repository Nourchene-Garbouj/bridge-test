import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const AdminContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CourseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.8rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #444;
  }
`;

const CourseList = styled.div`
  display: grid;
  gap: 1rem;
`;

const CourseItem = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ...formData, 
          price: parseFloat(formData.price), 
        }),
      });
      if (response.ok) {
        fetchCourses();
        setFormData({ title: '', price: '', image: '' });
      }
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchCourses();
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <AdminContainer>
      <h2>Admin Dashboard</h2>
      <CourseForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Course Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <Input
          type="number"
          placeholder="Price in TND"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
        <Button type="submit">Add Course</Button>
      </CourseForm>

      <h3>Current Courses</h3>
      <CourseList>
        {courses.map((course) => (
          <CourseItem key={course.id}>
            <div>
              <h4>{course.title}</h4>
              <p>{course.price} TND</p>
            </div>
            <Button onClick={() => handleDelete(course.id)}>Delete</Button>
          </CourseItem>
        ))}
      </CourseList>
    </AdminContainer>
  );
};

export default Admin;
