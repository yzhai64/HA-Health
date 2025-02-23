import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Logo } from './components/Logo'

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans">
        <header className="bg-white shadow-md">
          <div className="container mx-auto py-4 px-5 flex items-center justify-between">
            <Link to="/" className="flex items-center text-2xl font-semibold">
              <Logo className="h-8 w-8 mr-2 text-green-500" />
              HA Health
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="hover:text-gray-500">
                    首页
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-500">
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-gray-500">
                    产品
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-gray-500">
                    登录
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-gray-500">
                    注册
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-10 px-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <footer className="bg-gray-100 py-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} HA Health. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
