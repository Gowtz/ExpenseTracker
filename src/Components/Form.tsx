import { useState } from "react"

export default function Form({ expense, income }: any) {
    const [message, setMessage] = useState("")
    const [amount, setAmount] = useState<number>()
    return (
        <>
            <div className="form w-full my-5">
                <h1 className="text-center text-gray-950 font-semibold text-2xl my-7">Add a transaction</h1>
                <label className="text-gray-800 ">Message</label>
                <br />
                <input type="text" className="w-full  h-12 px-3 rounded-md mt-2  mb-4 border border-gray-400"  placeholder="Enter a message" value={message} onChange={(e) => {setMessage(e.target.value) }} />

                <label className="text-gray-800">Amount</label>
                <input type="number" className="w-full  h-12 px-3 rounded-md mt-2  mb-4 border border-gray-400"  placeholder="0" value={amount} onChange={(e) => {setAmount(parseInt(e.target.value)) }}/>
                <div className="buttons pointer  flex justify-evenly mx-7 " >
                    <button className="text-red-500 w-full h-full bg-slate-50 py-3 rounded-tl-md rounded-bl-md" onClick={() => {
                        if (!message || !amount ){
                            alert("Message and Amount are nessesary")
                        }
                        expense(message,amount)
                        setAmount(0)
                        setMessage("")
                        // console.log(message,amount)

                    }}>expense</button>
                    <button className="text-green-500 w-full h-full bg-slate-50  py-3 rounded-tr-md rounded-br-md" onClick={() => {
                        if (!message || !amount ){
                            alert("Message and Amount are nessesary")
                        }
                        income(message,amount)
                        setAmount(0)
                        setMessage("")

                    }}> income</button>
                </div>

            </div>
        </>
    )
}
