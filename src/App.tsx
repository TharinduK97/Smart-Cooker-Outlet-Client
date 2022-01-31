import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './containers/login/login';
import Inventory from '../src/containers/Inventory/local inventory/localinventory';
import Inventoryview from '../src/containers/Inventory/Inventoryview/inventoryview';
import Mainpage from './containers/mainpage.tsx/mainpage';
import Navbar from './components/Navbar/navbar';
import AddNewProduct from './containers/AddNewProduct/addNewProduct';


export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />
        <Routes >
        <Route path="/addnewproduct" element={<AddNewProduct />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/inventory/:id" element={<Inventoryview/>} />
            <Route path="/inventory" element={<Inventory/>} /> */}
          <Route path="/inventory">
            <Route index element={<Inventory />} />
            <Route path=":number" element={<Inventoryview />} />
          </Route>
          <Route path="/"  element={<Mainpage />} />

        </Routes>


      </BrowserRouter>

    </div>
  )
}

export default App
