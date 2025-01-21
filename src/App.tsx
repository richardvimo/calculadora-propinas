import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotal from './components/OrderTotal';
import TypePercentForm from './components/TypePercentForm';

import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const {order, addItem, removeItem, decrementItem, tip, setTip, placeOrder} = useOrder();

  return (
    <>
      <header className="bg-teal-200 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <h2 className="text-center pb-5 font-bold text-2xl">Menu</h2>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {menuItems.map( item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        
        <div className="col-span-1 w-full sm:w-3/4 md:w-full sm:mx-auto border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents
                order = {order}
                addItem={addItem}
                removeItem = {removeItem}
                decrementItem = {decrementItem}
              />

              <TypePercentForm
                setTip = {setTip}
                tip={tip}
              />

              <OrderTotal
                order = {order}
                tip = {tip}
                placeOrder = {placeOrder}
              />  
            </> 
          ) : ( 
            <p className='text-center'>La Orden esta Vacia</p>
          )}
          
        </div>
      </main>
    </>
  )
}

export default App
