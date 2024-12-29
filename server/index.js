const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Initial courses data
let courses = [];

// Routes
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.post('/api/courses', (req, res) => {
  const { title, price, image } = req.body;
  if (!title || !price || !image) {
    return res.status(400).json({ error: 'Title, price, and image are required' });
  }

  const newCourse = {
    id: courses.length + 1,
    title,
    price,
    image
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

app.put('/api/courses/:id', (req, res) => {
  const { id } = req.params;
  const { title, price, image } = req.body;

  let updatedCourse;
  courses = courses.map(course => {
    if (course.id === parseInt(id)) {
      updatedCourse = { ...course, title, price, image };
      return updatedCourse;
    }
    return course;
  });

  if (!updatedCourse) {
    return res.status(404).json({ error: 'Course not found' });
  }

  res.json(updatedCourse);
});

app.delete('/api/courses/:id', (req, res) => {
  const { id } = req.params;
  const courseExists = courses.some(course => course.id === parseInt(id));
  if (!courseExists) {
    return res.status(404).json({ error: 'Course not found' });
  }

  courses = courses.filter(course => course.id !== parseInt(id));
  res.status(204).send();
});

app.post('/api/contact', (req, res) => {
  res.status(200).json({ message: 'Message received', data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
