import React, { useState } from 'react'
import { Calendar, Clock, Plus } from 'lucide-react'

interface Appointment {
  id: number
  date: string
  time: string
  animalName: string
  veterinarianName: string
}

export const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, date: '2024-10-10', time: '10:00', animalName: 'Max', veterinarianName: 'Dr. Smith' },
    { id: 2, date: '2024-10-11', time: '14:30', animalName: 'Bella', veterinarianName: 'Dr. Johnson' },
  ])

  const [newAppointment, setNewAppointment] = useState<Omit<Appointment, 'id'>>({
    date: '',
    time: '',
    animalName: '',
    veterinarianName: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewAppointment(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = appointments.length + 1
    setAppointments(prev => [...prev, { id, ...newAppointment }])
    setNewAppointment({ date: '', time: '', animalName: '', veterinarianName: '' })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="animalName"
            value={newAppointment.animalName}
            onChange={handleInputChange}
            placeholder="Animal Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="veterinarianName"
            value={newAppointment.veterinarianName}
            onChange={handleInputChange}
            placeholder="Veterinarian Name"
            className="border p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded flex items-center">
          <Plus className="mr-2" /> Add Appointment
        </button>
      </form>
      <ul className="space-y-4">
        {appointments.map(appointment => (
          <li key={appointment.id} className="border p-4 rounded shadow">
            <div className="flex items-center mb-2">
              <Calendar className="mr-2" />
              <span>{appointment.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="mr-2" />
              <span>{appointment.time}</span>
            </div>
            <p><strong>Animal:</strong> {appointment.animalName}</p>
            <p><strong>Veterinarian:</strong> {appointment.veterinarianName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}