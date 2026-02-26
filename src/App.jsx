import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Artisans from './pages/Artisans';
import Roles from './pages/Roles';
import ProductDetail from './pages/ProductDetail';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import ArtisanDashboard from './pages/dashboards/ArtisanDashboard';
import CustomerDashboard from './pages/dashboards/CustomerDashboard';
import ConsultantDashboard from './pages/dashboards/ConsultantDashboard';

export default function App() {
  var cartOpen = useState(false);
  var isOpen = cartOpen[0];
  var setCartOpen = cartOpen[1];

  return (
    <BrowserRouter>
      <Navbar onCartClick={function() { setCartOpen(true); }} />
      <CartSidebar isOpen={isOpen} onClose={function() { setCartOpen(false); }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/artisan" element={<ArtisanDashboard />} />
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/consultant" element={<ConsultantDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
