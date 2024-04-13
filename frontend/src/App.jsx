import { Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import CreateReminder from './components/CreateReminder'
import ViewReminders  from './components/ViewReminders'
import Medicine from './components/Medicine'
import Footer from './components/Footer'
import Timer from './components/Timer'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateReminder />} />
      <Route path="/view" element={<ViewReminders />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path='/timer' element={<Timer />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
