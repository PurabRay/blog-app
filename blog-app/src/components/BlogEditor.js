
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, TextField, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material'; // Import MUI components
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Updated import

const BlogEditor = ({ initialData = {}, isEdit = false }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [category, setCategory] = useState(initialData.category || ''); // Add category state
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook

  const handleSubmit = () => {
    const blogData = {
      id: isEdit ? initialData.id : Date.now().toString(),
      title,
      content,
      author,
      category, 
      date: new Date().toISOString(),
    };

    if (isEdit) {
      dispatch({ type: 'EDIT_BLOG', payload: blogData });
    } else {
      dispatch({ type: 'ADD_BLOG', payload: blogData });
    }

    navigate('/');
  };

  return (
    <Container>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <ReactQuill value={content} onChange={setContent} />
      <TextField
        fullWidth
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        sx={{ marginTop: 2 }}
      />
      {/* Category Selection */}
      <FormControl fullWidth sx={{ marginTop: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Travel">Travel</MenuItem>
          <MenuItem value="Technology">Technology</MenuItem>
          <MenuItem value="Lifestyle">Lifestyle</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: 2 }}>
        {isEdit ? 'Update' : 'Publish'}
      </Button>
    </Container>
  );
};

export default BlogEditor;

