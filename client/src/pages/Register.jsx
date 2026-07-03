import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      alert('Please fill all fields!')
      return
    }
    console.log('Register:', form)
  }

  return (
    <div className="min-h-screen bg-[#FAF7F4] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-purple-600 font-bold text-lg">JT</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-400 text-sm mt-1">Start tracking your job applications</p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Dineesha Brungi"
              className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. dineesha@gmail.com"
              className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Min 6 characters"
              className="w-full mt-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl text-sm font-medium transition-colors mt-2"
          >
            Create Account
          </button>

        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-500 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register