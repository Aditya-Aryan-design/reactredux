
import Main from "./components/Main"
import Adduser from "./components/Adduser"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Main />
      <Adduser />
    </div>
  )
}

export default App
