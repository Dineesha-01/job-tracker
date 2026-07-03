import { useState } from 'react'

function AddJobModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: '',
    notes: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.company || !form.role || !form.date) {
      alert('Please fill Company, Role and Date!')
      return
    }
    onAdd(form)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Add New Job</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            x
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="e.g. Google"
              className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Role</label>
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer"
              className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Date Applied</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Notes</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Any notes about this job..."
              rows={3}
              className="w-full mt-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-400 resize-none"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-200 text-gray-500 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            Add Job
          </button>
        </div>

      </div>
    </div>
  )
}

export default AddJobModal