import { Link } from 'react-router-dom'

function Navbar() {
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
      </div>
    </nav>
  )
}

export default Navbar