"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface InteractiveMapProps {
  onCountrySelect: (country: string) => void
}

export default function InteractiveMap({ onCountrySelect }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  const countries = [
    { name: "Egypt", x: 52, y: 35, color: "bg-red-500" },
    { name: "India", x: 72, y: 45, color: "bg-green-500" },
    { name: "Japan", x: 85, y: 30, color: "bg-blue-500" },
    { name: "Brazil", x: 25, y: 60, color: "bg-yellow-500" },
    { name: "Spain", x: 45, y: 25, color: "bg-purple-500" },
    { name: "China", x: 78, y: 35, color: "bg-pink-500" },
    { name: "Mexico", x: 15, y: 40, color: "bg-indigo-500" },
    { name: "Ireland", x: 42, y: 20, color: "bg-emerald-500" },
  ]

  return (
    <div className="flex justify-center">
      <motion.div
        ref={mapRef}
        className="relative w-full max-w-4xl h-64 md:h-96 bg-gradient-to-br from-blue-200 to-green-200 dark:from-blue-900 dark:to-green-900 rounded-xl overflow-hidden shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-world-map opacity-20"></div>

        {countries.map((country, index) => (
          <motion.button
            key={country.name}
            className={`absolute w-4 h-4 md:w-6 md:h-6 ${country.color} rounded-full shadow-lg hover:scale-125 transition-transform cursor-pointer border-2 border-white`}
            style={{ left: `${country.x}%`, top: `${country.y}%` }}
            onClick={() => onCountrySelect(country.name)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">{country.name}</span>
          </motion.button>
        ))}

        {countries.map((country, index) => (
          <motion.div
            key={`label-${country.name}`}
            className="absolute text-xs mt-4 ms-2 md:ms-0 md:mt-0  md:text-sm font-semibold text-gray-800 dark:text-white bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded shadow-md"
            style={{ left: `${country.x + 2}%`, top: `${country.y - 8}%` }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          >
            {country.name}
          </motion.div>
        ))}

        <div className="absolute bottom-4 left-4 text-sm text-gray-600 dark:text-gray-400">
          Click on a country to explore its instruments
        </div>
      </motion.div>
    </div>
  )
}
