import Transaction from "./Transaction";

export default function History({history}:{history:number[]}) {
  return (
  <>
  <div className="history my-7">
    <h1 className="font-semibold text-3xl mb-10">History</h1>
    <ul>
      {
        history.map(tra => <Transaction tra={tra}/>)
      }
        {/* <li className="flex w-full h-10 rounded bg-slate-100 justify-between items-center px-10 my-1"><span className="note">Food</span> <span className="amount text-red-500">-$4.00</span></li>
        <li className="flex w-full h-10 rounded bg-slate-100 justify-between items-center px-10 my-1"><span className="note">Dad</span> <span className="amount text-green-500">+$69.00</span></li> */}

    </ul>
  </div>
  </>
  )
}
