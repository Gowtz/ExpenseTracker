// import transaction from "../Types/types";
import transaction from "../Types/types";
import Transaction from "./Transaction";

export default function History({ history }: { history: transaction[] }) {

  return (
    <>
      <div className="history my-7">
        <h1 className="font-semibold text-3xl mb-10">History</h1>
        <ul>
          {Array.isArray(history) && history?.map((tra) => <Transaction key={tra.id} tra={tra} />)}
        </ul>
      </div>
    </>
  )
}
