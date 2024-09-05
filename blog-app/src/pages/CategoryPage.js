
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import BlogCard from '../components/BlogCard'; // Make sure this path is correct

const CategoryPage = () => {
  const { categoryName } = useParams();
  const blogs = useSelector((state) =>
    state.blogs.blogs.filter(
      (blog) => blog.category.trim().toLowerCase() === categoryName.trim().toLowerCase()
    )
  );

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Blogs
      </Typography>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <BlogCard blog={blog} />
          </Grid>
        ))
      ) : (
        <Typography>No blogs found in this category.</Typography>
      )}
    </Grid>
  );
};

export default CategoryPage;



