import React, { useState } from 'react';
import styled from '@emotion/styled';

const CoursesSection = styled.section`
  padding: 4rem 2rem;
  background: #f5f5f5;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CourseCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
`;

const CourseImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CoursePrice = styled.p`
  font-weight: bold;
  color: #333;
  margin: 0.5rem 0;
`;

const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ViewMoreButton = styled.button`
  background-color: rgb(176, 24, 202);
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(122, 21, 139);
  }
`;

interface Course {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CourseListProps {
  courses: Course[];
}

const CourseList = ({ courses }: CourseListProps) => {
  const [visibleCourses, setVisibleCourses] = useState(6);

  const handleViewMore = () => {
    setVisibleCourses(courses.length);
  };

  return (
    <CoursesSection>
      <h2>Our Courses</h2>
      <CourseGrid>
        {courses.slice(0, visibleCourses).map(course => (
          <CourseCard key={course.id}>
            <CourseImage src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <CoursePrice>{course.price} TND</CoursePrice>
          </CourseCard>
        ))}
      </CourseGrid>

      {/* Center the View More button */}
      {courses.length > 6 && visibleCourses < courses.length && (
        <ViewMoreContainer>
          <ViewMoreButton onClick={handleViewMore}>View More</ViewMoreButton>
        </ViewMoreContainer>
      )}
    </CoursesSection>
  );
};

export default CourseList;
