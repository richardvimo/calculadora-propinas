import { formatCurrency } from '../helpers'
import { MenuItem, OrderItem } from '../types'

interface OrderContentsProps {
    order: OrderItem[],
    addItem: (item: MenuItem) => void,
    removeItem: (id: MenuItem['id']) => void,
    decrementItem: (id: MenuItem["id"]) => void,
}

function OrderContents({order, addItem, removeItem, decrementItem}: OrderContentsProps) {
  return (
    <div>
        <h2 className="text-center pb-5 font-bold text-2xl">Consumo</h2>

        <div className='space-y-3 mt-5 w-full'>
            {order.map( item => (
                <div 
                    key={item.id}
                    className='flex flex-col md:flex-row items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b w-full'
                >
                    <div className="flex flex-col gap-4 justify-between items-center w-full-important md:w-auto mt-4 md:mt-0 space-x-4">
                        
                        <p className='text-lg flex-1'>{item.name} - {formatCurrency(item.price)}</p>
                        
                        <div className="flex justify-between w-full items-center">
                            <button 
                                className='bg-gray-200 text-black px-2 py-1 rounded-l' 
                                onClick={() => decrementItem(item.id)} 
                            > 
                                - 
                            </button> 

                            <div className='flex flex-col items-center mx-2'>
                                <p className='text-gray-600 font-semibold'>Cantidad: <span className='text-black font-black'>{item.quantity}</span></p>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-indigo-600 mr-2 mb-2">{formatCurrency(item.price * item.quantity)}</span>
                            </div>

                            <button 
                                className='bg-gray-200 text-black px-2 py-1 rounded-r' 
                                onClick={() => addItem(item)} 
                            > 
                                + 
                            </button>

                            <button
                                className='bg-red-500 w-8 h-8 rounded-full text-white font-bold flex items-center justify-center'
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OrderContents