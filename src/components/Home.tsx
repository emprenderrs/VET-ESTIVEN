import React from 'react'
import { PawPrint } from 'lucide-react'

export const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Veterinary Clinic</h1>
      <PawPrint className="mx-auto w-24 h-24 text-blue-600" />
      <p className="mt-4 text-xl">Providing the best care for your furry friends</p>
    </div>
  )
}