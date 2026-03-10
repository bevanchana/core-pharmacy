import { useState, useEffect } from 'react'
import { Header, SearchBar, MedicationGrid, FloatingWhatsAppButton } from './components'
import type { Medication } from './types'
import { mockDatabase, filterMedications, handleWhatsAppReserve } from './utils'
import { PHARMACY_CONFIG } from './config'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [medications, setMedications] = useState<Medication[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Simulate data fetching with 1.5 second delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMedications(mockDatabase)
      setIsLoading(false)
    }, 1500)

    // Cleanup timeout on component unmount
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  // Filter medications based on search term
  const filteredMedications = filterMedications(medications, searchTerm)

  // Handle medication reservation
  const handleReserve = (medicationName: string) => {
    handleWhatsAppReserve(medicationName, PHARMACY_CONFIG.whatsappNumber)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative">
      {/* Modern animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-4">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Health, Our Priority
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our extensive catalog of quality medications and reserve instantly via WhatsApp
            </p>
          </div>
        </div>
        
        <main className="px-4 py-6 md:px-6 max-w-7xl mx-auto">
          <MedicationGrid
            medications={filteredMedications}
            isLoading={isLoading}
            searchTerm={searchTerm}
            onReserve={handleReserve}
          />
        </main>

        <FloatingWhatsAppButton phoneNumber={PHARMACY_CONFIG.whatsappNumber} />
      </div>
    </div>
  )
}

export default App
