import { useDispatch } from "react-redux";
import { addAmount,subAmount } from "../../store/slices/Amountslice";

function Widrow() {
let amount

const dispatch = useDispatch()
const WidDep = (type)=>{

  if(type === 'dep'){
    amount = parseInt(prompt("Enter your deposit amount in ₹"))
     dispatch(addAmount(amount))
  } else if(type === 'with'){
    amount = parseInt(prompt("Enter your withdrow amount in ₹"))
     dispatch(subAmount(amount))
  }
}


  return (
    <div className="flex rounded-full border-2 border-fuchsia-500 w-48 font-semibold overflow-hidden text-fuchsia-500">
      <button className="py-2 flex-1 hover:bg-fuchsia-500 hover:text-white" onClick={()=>WidDep('dep')}>Deposit</button>
      <button className="py-2 flex-1 hover:bg-fuchsia-500 hover:text-white" onClick={()=>WidDep('with')}>Withdrow</button>
    </div>
  )
}

export default Widrow
