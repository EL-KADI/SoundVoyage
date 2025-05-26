"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Heart, Volume2, VolumeX } from "lucide-react"

interface Instrument {
  id: string
  name: string
  country: string
  image: string
  story: string
  soundUrl: string
  type: string
}

interface InstrumentCardProps {
  instrument: Instrument
}

export default function InstrumentCard({ instrument }: InstrumentCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [audioError, setAudioError] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    const isAlreadyFavorite = favorites.some((fav: Instrument) => fav.id === instrument.id)
    setIsFavorite(isAlreadyFavorite)
  }, [instrument.id])

  const playSound = () => {
    if (isPlaying && audio) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
      return
    }

    if (audioError) {
      return
    }

    try {
      const newAudio = new Audio(instrument.soundUrl)
      newAudio.crossOrigin = "anonymous"

      newAudio.onloadeddata = () => {
        newAudio.play()
        setIsPlaying(true)
        setAudio(newAudio)
      }

      newAudio.onended = () => {
        setIsPlaying(false)
        setAudio(null)
      }

      newAudio.onerror = () => {
        console.log("Audio failed to load:", instrument.soundUrl)
        setAudioError(true)
        setIsPlaying(false)
      }

      newAudio.onpause = () => {
        setIsPlaying(false)
      }
    } catch (error) {
      console.log("Error creating audio:", error)
      setAudioError(true)
    }
  }

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav: Instrument) => fav.id !== instrument.id)
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
      setIsFavorite(false)
    } else {
      favorites.push(instrument)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      setIsFavorite(true)
    }
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <img src={instrument.image || "/placeholder.svg"} alt={instrument.name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2">
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-full ${isFavorite ? "bg-red-500 text-white" : "bg-white/80 text-gray-700"} hover:scale-110 transition-transform`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">{instrument.type}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{instrument.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{instrument.country}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">{instrument.story}</p>

        <div className="flex items-center justify-between">
          <button
            onClick={playSound}
            disabled={audioError}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              audioError
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            {audioError ? (
              <VolumeX className="h-4 w-4" />
            ) : isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span className="text-sm font-medium">
              {audioError ? "Audio N/A" : isPlaying ? "Playing..." : "Play Sound"}
            </span>
          </button>

        </div>
      </div>
    </motion.div>
  )
}
