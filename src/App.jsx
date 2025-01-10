import { BrowserRouter as Route, Routes, Router } from "react-router-dom"
function App() {

  return (
    <div>
      <Router>
        <Routes>
           <Route path="" element=""/>
        </Routes>
      </Router>
     <p className="text-4xl font-bold text-blue-600">Hello World</p>
    </div>
  )
}

export default App
