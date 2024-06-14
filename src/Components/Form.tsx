export default function Form() {
    return (
        <>
            <div className="form w-full my-5">
                <h1 className="text-center text-gray-950 font-semibold text-2xl my-7">Add a transaction</h1>
                <label className="text-gray-800 ">Message</label>
                <br />
                <input type="text" className="w-full  h-12 px-3 rounded-md mt-2  mb-4 border border-gray-400" />
                
                <label className="text-gray-800">Amount</label>
                <input type="number" className="w-full  h-12 px-3 rounded-md mt-2  mb-4 border border-gray-400" />
                <div className="buttons pointer  flex justify-evenly mx-7 " >
                    <button className="text-red-500 w-full h-full bg-slate-50 py-3 rounded-tl-md rounded-bl-md">expense</button>
                    <button className="text-green-500 w-full h-full bg-slate-50  py-3 rounded-tr-md rounded-br-md">income</button>
                </div>

            </div>
        </>
    )
}
