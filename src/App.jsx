import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TerminalPage from './pages/TerminalPage/TerminalPage'
import Home from './pages/Home/Home'
import AudioPlayer from './components/Music/AudioPlayer'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<TerminalPage/>} />
      <Route path="/priyadarshi" element={<Home/>} />
    </Routes>
    <AudioPlayer/>
    </>
  )
}

export default App