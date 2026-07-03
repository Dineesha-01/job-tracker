const express = require('express')
const router = express.Router()
const Job = require('../models/Job')
const protect = require('../middleware/authMiddleware')

// GET all jobs for logged in user
router.get('/', protect, async (req, res) => {
  try {
    const jobs = await Job.find({ userId: req.user.id })
    res.json(jobs)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ADD a new job
router.post('/', protect, async (req, res) => {
  try {
    const { company, role, status, date, notes } = req.body

    const job = await Job.create({
      userId: req.user.id,
      company,
      role,
      status,
      date,
      notes,
    })

    res.status(201).json(job)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// UPDATE a job
router.put('/:id', protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)

    if (!job) {
      return res.status(404).json({ message: 'Job not found' })
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json(updatedJob)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// DELETE a job
router.delete('/:id', protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)

    if (!job) {
      return res.status(404).json({ message: 'Job not found' })
    }

    await Job.findByIdAndDelete(req.params.id)

    res.json({ message: 'Job deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router