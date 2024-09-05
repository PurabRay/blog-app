import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import CategoryPage from './pages/CategoryPage';
import Navbar from './components/Navbar';
import './styles/blogStyles.css'; 
// The only new import added
import BlogEditor from './components/BlogEditor';

function App() {
  const theme = useSelector((state) => state.theme.theme); // Access theme from Redux store
  const dispatch = useDispatch();

  const muiTheme = createTheme({
    palette: {
      mode: theme, // Apply the theme (light or dark)
    },
  });

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
          
          {/* Added routes for BlogEditor */}
          <Route path="/new-blog" element={<BlogEditor />} />
          <Route path="/edit-blog/:id" element={<BlogEditor isEdit />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
