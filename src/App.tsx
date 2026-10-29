import { Navigate, Route, Routes } from 'react-router-dom';
import AccordionPage from './pages/AccordionPage';
import ProductsPage from './pages/ProductsPage';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ProgressPage from './pages/ProgressPage';
import TabsPage from './pages/TabsPage';
import DropdownPage from './pages/DropdownPage';
import ToastPage from './pages/ToastPage';

function App() {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Navigate to="/accordion" replace />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
          <Route path="/toast" element={<ToastPage />} />
          <Route path="*" element={<Navigate to="/accordion" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
