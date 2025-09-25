import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import NotFound from './components/NotFound';

import HomePage from './pages/HomePage';

import AboutPage from './pages/AboutPage';

import BookDetailPage from './pages/BookDetailPage';

import CategoryPage from './pages/CategoryPage';

import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* หน้า Home */}
          <Route path="/" element={<HomePage />} />

          {/* หน้า About */}
          <Route path="/about" element={<AboutPage />} />

          <Route path="/books" element={<BookDetailPage />} />

          <Route path="/category/fiction" element={<CategoryPage />} />

          <Route path="/contact" element={<ContactPage />} />


          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
