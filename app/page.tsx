"use client"

import { useState } from "react"
import { PromptingIsAllYouNeed } from "../prompting"
import WelcomePage from "../welcome-page"

export default function Home() {
  const [showGame, setShowGame] = useState(false)

  return <>{showGame ? <PromptingIsAllYouNeed /> : <WelcomePage onComplete={() => setShowGame(true)} />}</>
}

