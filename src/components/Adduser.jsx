import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/Userslice";

const Adduser = () => {
    const dispatch = useDispatch()

    const addNewUser=(userData)=>{

        dispatch(addUser(userData))

    }
    
    const promptFunc = ()=>{
        const userName = prompt('Enter your name')
        if(userName=== null){
            return
        }
        if(userName === ''){
            alert('You have to enter userName')
            return promptFunc()
        }
        const userAge = prompt('Enter your age')
        
        addNewUser({name:userName, age:userAge})
        
    }



  return (
  <>
  <button className='mt-5 text-white font-bold text-xl bg-purple-600 rounded-lg px-5 py-3' onClick={promptFunc}>Add new user</button>

  </>
  )
}

export default Adduser
