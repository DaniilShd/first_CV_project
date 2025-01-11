import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import axios from "axios"
import { useEffect } from "react"



function App() {

  const fetchString = () => {
    axios.get('http://127.0.0.1:8000/').then(resp => {
      console.log('r', resp)
    })
  }

  useEffect(() => {
    fetchString()
    console.log(123)
  }, []);

  return (
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  )
}

export default App
