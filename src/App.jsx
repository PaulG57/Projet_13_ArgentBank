import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/login" element={<h1>Connexion</h1>} />
        <Route path="/profile" element={<h1>Profil</h1>} />
      </Routes>
    </Router>
  )
}

export default App
