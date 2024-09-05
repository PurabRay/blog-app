import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const blogs = useSelector((state) => state.blogs.blogs);

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {blogs.map((blog) => (
        <Grid item xs={12} sm={6} md={4} key={blog.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              </Typography>
              <Typography variant="body2">{blog.excerpt}</Typography>
              <Typography variant="caption" color="textSecondary">
                {new Date(blog.date).toDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
