import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import CourseList from '../components/CourseList';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div>
      <Hero />
      <CourseList courses={courses.map(course => ({
        ...course,
        price: `${course.price}`,
      }))} />
      <ContactForm />
    </div>
  );
};

export default Home;
