import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === id)
  );

  if (!blog) return <Typography>Blog not found!</Typography>;

  return (
    <Container>
      <Typography
        variant="h3"
        component="div"
        sx={{
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          maxWidth: '100%',
        }}
      >
        {blog.title}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          maxWidth: '100%',
          margin: '20px 0',
        }}
        dangerouslySetInnerHTML={{ __html: blog.content }} // Render HTML content
      />
      <Typography
        variant="caption"
        component="div"
        sx={{
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          maxWidth: '100%',
          color: 'textSecondary',
          marginTop: '10px',
        }}
      >
        By {blog.author} on {new Date(blog.date).toDateString()}
      </Typography>
    </Container>
  );
};

export default BlogDetailsPage;

