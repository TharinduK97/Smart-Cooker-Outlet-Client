import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Containers/login/login';
import Inventory from './Components/inventory page/inventorypage';
import Mainpage from './Containers/mainpage.tsx/mainpage';


export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <BrowserRouter>
        

          <Routes >

            <Route path="/login" element={<Login />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/" element={<Mainpage />} />

          </Routes>

       
      </BrowserRouter>

    </div>
  )
}

export default App
