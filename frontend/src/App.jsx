import { Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import CreateReminder from './components/CreateReminder'
import ViewReminders  from './components/ViewReminders'
import About from './components/About'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateReminder />} />
      <Route path="/view" element={<ViewReminders />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
