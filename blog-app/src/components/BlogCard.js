
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const contentStyle = {
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    maxWidth: '100%',
    padding: '10px',
  };

  const titleStyle = {
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    maxWidth: '100%',
  };

  const excerptStyle = {
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    maxWidth: '100%',
  };

  const dateStyle = {
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    maxWidth: '100%',
    color: 'textSecondary',
  };

  return (
    <Card>
      {blog.image && (
        <CardMedia
          component="img"
          height="140"
          image={blog.image}
          alt={blog.title}
        />
      )}
      <CardContent style={contentStyle}>
        <Typography variant="h5" style={titleStyle}>
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </Typography>
        <Typography variant="body2" style={excerptStyle}>
          {blog.excerpt}
        </Typography>
        <Typography variant="caption" style={dateStyle}>
          {new Date(blog.date).toDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;

