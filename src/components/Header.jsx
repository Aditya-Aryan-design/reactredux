import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [listClass,setList] = useState({ul:"hidden",nav:"flex"})
  const width = parseInt(window.width)
  const displayList = ()=>{
    if(width > 640){
      return
    }
    listClass.ul==="hidden"?setList({ul:"block",nav:"block"}):setList({ul:"hidden",nav:"flex"})
  }

  
  return (
    <div className=
    {`bg-neutral-800 ${listClass.nav} text-white px-20 justify-between items-center py-3 sm:px-10 sm:flex`} onClick={displayList}>
      <h1 className='font-bold text-2xl'>YourNotes</h1>
      <ul className={`${listClass.ul} sm:flex my-2 text-center space-x-3`}>
        <li className='my-1 cursor-pointer'><Link to="/">HOME</Link></li>
        <hr />
        <li className='my-1 cursor-pointer'><Link to="/login">lOG-IN</Link></li>
        <hr />
        <li className='my-1 cursor-pointer'><Link to="/signin">SIGN-IN</Link></li>
      </ul>
    </div>
  )
}

export default Header
