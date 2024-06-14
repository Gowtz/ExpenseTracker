import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Card />
    <Footer/>
    </>

  )
}

export default App
