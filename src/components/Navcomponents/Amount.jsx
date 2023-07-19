import { useSelector } from "react-redux"


function Amount() {

  const mount = useSelector((state)=>{
    return state.amount
  })
  return (
    <div className='text-lg'>
      <b>Current amount</b>: {mount}₹
    </div>
  )
}

export default Amount
