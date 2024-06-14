import { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
import transaction from './Types/types'
function App() {
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [history, setHistory] = useState<transaction[]>([])

  useEffect(() => {
    setTotalAmount(totalIncome - totalExpense)
  }, [totalExpense, totalIncome])
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("transaction"))
    console.log(data)
    setHistory(data)
    console.log(data)

  }, [])
  useEffect(() => {
    if(history[0] !=null  ){
    localStorage.setItem("transaction", JSON.stringify(history))
    console.log("nodata")
    }
  }, [history])

  // Generate randomID
  function generateID(len: number) {
    let all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let id = ""
    for (let i = 0; i < len; i++) {
      id += all.charAt(Math.floor(Math.random() * 62))
    }
    return id
  }


  function expense(message: string, amount: number) {
    let transaction = {
      id: generateID(8),
      message: message,
      amount: amount,
      type: "expense"
    }
    setTotalExpense(prev => prev + amount)
    setHistory([...history, transaction])

  }

  function income(message: string, amount: number) {
    let transaction = {
      id: generateID(8),
      message: message,
      amount: amount,
      type: "income"


    }
    setTotalIncome(prev => prev + amount)
    setHistory([...history, transaction])
  }


  return (
    <>
      <Header />
      <Card totalAmount={totalAmount}
        income={income}
        history={history}
        expense={expense}
        totalExpense={totalExpense}
        totalIncome={totalIncome} />
      <Footer />
    </>

  )
}

export default App
