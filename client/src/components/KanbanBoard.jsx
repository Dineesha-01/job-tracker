import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import JobCard from './JobCard'
import AddJobModal from './AddJobModal'
import { AuthContext } from '../context/AuthContext'
import API_URL from '../config'

const columnColors = {
  Applied: 'bg-blue-50 border-blue-200',
  Interview: 'bg-yellow-50 border-yellow-200',
  Offer: 'bg-green-50 border-green-200',
  Rejected: 'bg-red-50 border-red-200',
}

const columnTitleColors = {
  Applied: 'text-blue-600',
  Interview: 'text-yellow-600',
  Offer: 'text-green-600',
  Rejected: 'text-red-600',
}

const columnDotColors = {
  Applied: 'bg-blue-400',
  Interview: 'bg-yellow-400',
  Offer: 'bg-green-400',
  Rejected: 'bg-red-400',
}

function KanbanBoard() {
  const { user } = useContext(AuthContext)
  const [jobs, setJobs] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [loading, setLoading] = useState(true)

  const columns = ['Applied', 'Interview', 'Offer', 'Rejected']

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  }

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/jobs`, config)
        setJobs(res.data)
      } catch (error) {
        console.log('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }
    if (user) fetchJobs()
  }, [user])

  const handleAddJob = async (form) => {
    try {
      const res = await axios.post(`${API_URL}/api/jobs`, form, config)
      setJobs([...jobs, res.data])
    } catch (error) {
      console.log('Error adding job:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/jobs/${id}`, config)
      setJobs(jobs.filter((job) => job._id !== id))
    } catch (error) {
      console.log('Error deleting job:', error)
    }
  }

  const getColumnJobs = (columnName) => {
    return jobs.filter((job) => {
      const matchesStatus = job.status === columnName
      const matchesSearch =
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.role.toLowerCase().includes(search.toLowerCase())
      const matchesFilter =
        filterStatus === 'All' || job.status === filterStatus
      return matchesStatus && matchesSearch && matchesFilter
    })
  }

  const totalJobs = jobs.length
  const appliedCount = jobs.filter((j) => j.status === 'Applied').length
  const interviewCount = jobs.filter((j) => j.status === 'Interview').length
  const offerCount = jobs.filter((j) => j.status === 'Offer').length

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-purple-400 text-lg font-medium">Loading your jobs...</div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
          <div className="text-2xl font-bold text-gray-800">{totalJobs}</div>
          <div className="text-xs text-gray-400 mt-1 font-medium">Total Applied</div>
        </div>
        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">{appliedCount}</div>
          <div className="text-xs text-blue-400 mt-1 font-medium">Applied</div>
        </div>
        <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100 shadow-sm text-center">
          <div className="text-2xl font-bold text-yellow-600">{interviewCount}</div>
          <div className="text-xs text-yellow-400 mt-1 font-medium">Interviews</div>
        </div>
        <div className="bg-green-50 rounded-2xl p-4 border border-green-100 shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">{offerCount}</div>
          <div className="text-xs text-green-400 mt-1 font-medium">Offers</div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">My Applications</h2>
          <p className="text-gray-400 text-sm mt-1">Track all your job applications in one place</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
        >
          + Add Job
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search by company or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-400 bg-white"
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Applied', 'Interview', 'Offer', 'Rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                filterStatus === status
                  ? 'bg-purple-500 text-white'
                  : 'bg-white border border-gray-200 text-gray-500 hover:border-purple-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {columns.map((columnName) => {
          const columnJobs = getColumnJobs(columnName)
          return (
            <div
              key={columnName}
              className={`rounded-2xl border p-4 min-h-[500px] ${columnColors[columnName]}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${columnDotColors[columnName]}`}></div>
                  <h3 className={`font-semibold text-sm ${columnTitleColors[columnName]}`}>
                    {columnName}
                  </h3>
                </div>
                <span className="bg-white text-gray-500 text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm">
                  {columnJobs.length}
                </span>
              </div>

              {columnJobs.length === 0 ? (
                <div className="text-center text-gray-300 text-xs mt-8">
                  No jobs found
                </div>
              ) : (
                columnJobs.map((job) => (
                  <JobCard
                    key={job._id}
                    job={job}
                    onDelete={() => handleDelete(job._id)}
                  />
                ))
              )}
            </div>
          )
        })}
      </div>

      {showModal && (
        <AddJobModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddJob}
        />
      )}
    </div>
  )
}

export default KanbanBoard