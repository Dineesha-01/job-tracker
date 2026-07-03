function JobCard({ job, onDelete }) {
  const statusColors = {
    Applied: 'bg-blue-100 text-blue-600',
    Interview: 'bg-yellow-100 text-yellow-600',
    Offer: 'bg-green-100 text-green-600',
    Rejected: 'bg-red-100 text-red-600',
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-3 cursor-pointer hover:shadow-md transition-shadow group">

      {/* Top Row - Company & Delete button */}
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-semibold text-gray-800 text-sm">{job.company}</h3>
        <button
          onClick={onDelete}
          className="text-gray-200 hover:text-red-400 transition-colors text-lg font-bold opacity-0 group-hover:opacity-100"
        >
          x
        </button>
      </div>

      {/* Role */}
      <p className="text-gray-400 text-xs mb-3">{job.role}</p>

      {/* Status Badge & Date */}
      <div className="flex justify-between items-center">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[job.status]}`}>
          {job.status}
        </span>
        <span className="text-xs text-gray-300">{job.date}</span>
      </div>

    </div>
  )
}

export default JobCard