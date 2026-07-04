import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="w-full bg-white border-b border-purple-100 px-8 py-4 flex justify-between items-center shadow-sm">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-purple-200 flex items-center justify-center">
          <span className="text-purple-700 font-bold text-sm">JT</span>
        </div>
        <span className="font-bold text-lg text-purple-800 tracking-tight">
          JobTracker
        </span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        {user ? (
          <>
            <span className="text-sm text-gray-500 font-medium">
              Hi, {user.name}! 👋
            </span>
            <button
              onClick={handleLogout}
              className="text-sm bg-red-50 hover:bg-red-100 text-red-500 px-4 py-2 rounded-full font-medium transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-purple-600 font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="text-sm text-gray-500 hover:text-purple-600 font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
