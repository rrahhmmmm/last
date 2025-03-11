"use client"

import type React from "react"
import { useState, useEffect } from "react"

const BACKGROUND_COLOR = "#000000"
const TEXT_COLOR = "#FFFFFF"
const ACCENT_COLOR = "#FF69B4" // Changed to a pink color for a softer look

const WelcomePage: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [input, setInput] = useState("")
  const [typedText, setTypedText] = useState("")
  const typingSpeed = 40 // Slowed down for easier reading

  const message = `Haii nadielaa, take care yaa, eqii selalu tunggu kamu pulang!!!!

Be nice to our relationship yaa, eqii yakinn deedull orang baikk eqi yakinn gaakan salah eqi percayain sepenuhnya ke dedull.

Makasih yaa udah biarin eqii tau banyakk tentang hidup kamuu. Cant wait to make more more journeys with uu deeedullll, lovee uuuuu`

  useEffect(() => {
    let currentIndex = 0

    const typeNextCharacter = () => {
      if (currentIndex < message.length) {
        setTypedText((prev) => prev + message[currentIndex])
        currentIndex++
        setTimeout(typeNextCharacter, typingSpeed)
      } else {
        // Pause at the end before restarting
        setTimeout(() => {
          setTypedText("")
          currentIndex = 0
          typeNextCharacter()
        }, 3000)
      }
    }

    typeNextCharacter()

    return () => {
      clearTimeout(typeNextCharacter as unknown as number)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    if (e.target.value.toLowerCase() === "i love you too") {
      onComplete()
    }
  }

  return (
    <div className="relative w-full h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-3xl md:text-4xl text-center text-pink-400 mb-8">Message for Mbadelll</h1>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed text-left whitespace-pre-line"
            style={{ minHeight: "12em" }}
          >
            {typedText}
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="i love youuu"
            className="w-full max-w-md px-4 py-2 bg-transparent border-2 border-pink-400 text-white rounded-full focus:outline-none focus:border-pink-500 text-center"
          />
        </div>
      </div>
    </div>
  )
}

export default WelcomePage

