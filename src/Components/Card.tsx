import Form from "./Form";
import History from "./History";
export default function Card({totalAmount,income,history,expense,totalExpense,totalIncome}:any) {
    return (
        <>

            <div className="card w-96 bg-transparent mx-auto my-4 min-h-[35rem] rounded px-10 py-5">

                {/* // Balance */}
                <div className="Balance my-5">
                <h1 className='text-4xl font-bold'>Your Balance</h1>
                <h3 className='text-2xl'>${totalAmount}</h3>
                </div>

                {/* // income and expense */}
                <div className="total-transactions w-74 h-20 bg-white rounded flex items-center justify-evenly mx-auto">
                    <div className="expense">
                        <h3 className=' text-xl'>Expense</h3>
                        <span className="text-red-600">${totalExpense}</span>
                    </div>
                    <div className="income">
                        <h3 className='text-xl'>Income</h3>
                      <span className="text-green-600 ">${totalIncome}</span>
                    </div>
                </div>



                <Form expense={expense} income={income} />

                <History history={history}/>
            </div>

        </>
    )
}
