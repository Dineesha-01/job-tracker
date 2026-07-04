import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div className="min-h-screen bg-[#FAF7F4]">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6 relative overflow-hidden">

        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 right-40 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="bg-purple-100 text-purple-700 text-xs font-bold px-5 py-2 rounded-full mb-8 tracking-widest uppercase border border-purple-200 z-10">
          🚀 Your Job Hunt Companion
        </div>

        <h1 className="text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight z-10 max-w-4xl">
          Track Every
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500"> Application </span>
          <br />
          Land Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> Dream Job</span>
        </h1>

        <p className="text-gray-500 text-xl max-w-xl mb-10 leading-relaxed z-10 font-light">
          Stay organized with a beautiful Kanban board. Never miss a follow-up, track every interview, and land your dream job faster.
        </p>

        <div className="flex gap-4 z-10 flex-wrap justify-center">
          {user ? (
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Go to Dashboard →
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Get Started Free →
              </Link>
              <Link
                to="/login"
                className="bg-white text-purple-600 border-2 border-purple-200 px-8 py-4 rounded-full font-bold text-lg hover:border-purple-400 hover:shadow-md transition-all duration-200"
              >
                Login
              </Link>
            </>
          )}
        </div>

        <div className="flex gap-12 mt-16 z-10 flex-wrap justify-center">
          <div className="text-center">
            <div className="text-3xl font-black text-gray-900">100%</div>
            <div className="text-sm text-gray-400 font-medium mt-1">Free to Use</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="text-center">
            <div className="text-3xl font-black text-gray-900">4</div>
            <div className="text-sm text-gray-400 font-medium mt-1">Status Columns</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="text-center">
            <div className="text-3xl font-black text-gray-900">∞</div>
            <div className="text-sm text-gray-400 font-medium mt-1">Applications</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="text-center">
            <div className="text-3xl font-black text-gray-900">1</div>
            <div className="text-sm text-gray-400 font-medium mt-1">Click to Add</div>
          </div>
        </div>

      </div>

      {/* Features Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-3">Why JobTracker?</p>
            <h2 className="text-4xl font-black text-gray-900">Everything you need to</h2>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">land your dream job</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl mb-4">📋</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Kanban Board</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Visualize your job hunt with a beautiful board. See all applications at a glance.</p>
            </div>
            <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white text-xl mb-4">🔍</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Smart Search</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Find any application instantly. Filter by status, search by company or role in seconds.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl mb-4">📊</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Live Stats</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Track your progress with real-time stats. Know exactly how many interviews and offers you have.</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl mb-4">🔒</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Secure Login</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Your data is safe with JWT authentication. Only you can see your job applications.</p>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white text-xl mb-4">☁️</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Cloud Saved</h3>
              <p className="text-gray-500 text-sm leading-relaxed">All your data is saved to the cloud. Access your applications from any device, anytime.</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Lightning Fast</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Built with React and Node.js for a blazing fast experience. Add jobs in seconds.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20 px-6 text-center">
        <h2 className="text-4xl font-black text-white mb-4">Ready to land your dream job?</h2>
        <p className="text-purple-100 text-lg mb-8 max-w-md mx-auto">Stay organized and land offers faster with JobTracker!</p>
        {user ? (
          <Link
            to="/dashboard"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-black text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-block"
          >
            Go to Dashboard →
          </Link>
        ) : (
          <Link
            to="/register"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-black text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-block"
          >
            Start Tracking for Free →
          </Link>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 py-8 px-6 text-center">
        <p className="text-gray-400 text-sm">Built with ❤️ by a Full Stack Developer</p>
      </div>

    </div>
  )
}

export default Home