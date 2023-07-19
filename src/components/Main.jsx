import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/Userslice'


const Main = () => {
    const dispatch = useDispatch()

    const data = useSelector((state)=>{
        return state.users
    })

    const rmUser=(index)=>{
        dispatch(removeUser(index))
    }

  return (
    <div>
      {
        data.map((e,i)=>{
            return(<div key={i} className='flex justify-between shadow-md px-5 py-3 items-center w-screen'>
        <div className='flex-[0.7] flex justify-around text-lg'>
            <p><b>Name</b>: <i>{e.name}</i></p>
            {e.age && <p><b>Age</b>: <i>{e.age}</i></p>}
        </div>
        <button className='bg-red-500 rounded-md px-3 py-2 text-white font-semibold' onClick={()=>rmUser(i)}>Delete</button>
      </div>)
        })
      }
    </div>
  )
}

export default Main
