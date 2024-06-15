// import transaction from "../Types/types";

export default function Transaction({tra}:any) {
  return (
        <li  className={"flex w-full h-10 rounded bg-slate-100 justify-between items-center px-10 my-1 border border-y-0 border-r-0 border-l-4 " + (tra.type == "expense"? " border-red-500":"border-green-600")}><span className="note">{tra.message}</span> <span className={"amount "+(tra.type == "expense"?"text-red-500":"text-green-500")}>{(tra.type == "expense"?"-":"+" )}${tra.amount}</span></li>
  )
}
