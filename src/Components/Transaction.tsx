// import transaction from "../Types/types";

export default function Transaction({tra}:any) {
  return (
        <li key={tra.id} className="flex w-full h-10 rounded bg-slate-100 justify-between items-center px-10 my-1"><span className="note">{tra.message}</span> <span className={"amount "+(tra.type == "expense"?"text-red-500":"text-green-500")}>{(tra.type == "expense"?"-":"+" )}${tra.amount}</span></li>
  )
}
