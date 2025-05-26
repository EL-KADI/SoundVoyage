"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import InstrumentCard from "@/components/InstrumentCard"
import { Filter, Trash2 } from "lucide-react"

interface Instrument {
  id: string
  name: string
  country: string
  image: string
  story: string
  soundUrl: string
  type: string
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Instrument[]>([])
  const [filteredFavorites, setFilteredFavorites] = useState<Instrument[]>([])
  const [countryFilter, setCountryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(savedFavorites)
    setFilteredFavorites(savedFavorites)
  }, [])

  useEffect(() => {
    let filtered = favorites

    if (countryFilter !== "all") {
      filtered = filtered.filter((instrument) => instrument.country === countryFilter)
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter((instrument) => instrument.type === typeFilter)
    }

    setFilteredFavorites(filtered)
  }, [favorites, countryFilter, typeFilter])

  const clearAllFavorites = () => {
    localStorage.removeItem("favorites")
    setFavorites([])
    setFilteredFavorites([])
  }

  const countries = [...new Set(favorites.map((instrument) => instrument.country))]
  const types = [...new Set(favorites.map((instrument) => instrument.type))]

  useEffect(() => {
    const handleStorageChange = () => {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
      setFavorites(savedFavorites)
    }

    window.addEventListener("storage", handleStorageChange)

    const interval = setInterval(() => {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
      if (savedFavorites.length !== favorites.length) {
        setFavorites(savedFavorites)
      }
    }, 1000)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }
  }, [favorites.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Favorite Instruments
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Revisit the instruments you've saved and continue your musical journey.
          </p>
        </motion.section>

        {favorites.length > 0 && (
          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Filters:</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <select
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  <option value="all">All Countries</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>

                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  <option value="all">All Types</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <button
                  onClick={clearAllFavorites}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Clear All</span>
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {filteredFavorites.length > 0 ? (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFavorites.map((instrument, index) => (
                <motion.div
                  key={instrument.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <InstrumentCard instrument={instrument} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🎵</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {favorites.length === 0 ? "No favorites yet" : "No instruments match your filters"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {favorites.length === 0
                ? "Start exploring instruments and save your favorites to see them here."
                : "Try adjusting your filters to see more instruments."}
            </p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
            >
              Explore Instruments
            </a>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  )
}
