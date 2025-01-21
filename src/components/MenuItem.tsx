import { formatCurrency } from "../helpers";
import type { MenuItem } from "../types"


interface MenuItemProps {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}


export default function MenuItem({item, addItem}: MenuItemProps) {

    const pastelColors = [ 
        'bg-pink-100', 
        'bg-purple-100', 
        'bg-blue-100', 
        'bg-green-100', 
        'bg-yellow-100', 
        'bg-red-100', 
        'bg-indigo-100'
     ]


     // Asignar un color de fondo basado en el ID del item para mantener la consistencia 
     const backgroundColor = pastelColors[item.id % pastelColors.length];

  return (

    <button
        className={`w-full max-w-xs rounded overflow-hidden shadow-lg ${backgroundColor} m-4 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-opacity-90`}
        style={{ maxWidth: '20rem', maxHeight: '20rem' }}
        onClick={() => addItem(item)}
    >
        <div className="relative w-full h-48">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src={item.imageUrl} alt={item.name} />
        </div>    

        <div className="px-4 py-2 w-full flex flex-col flex-grow justify-between"> 
            <p className="font-bold text-lg mb-1">{item.name}</p> 
            <p className="text-gray-700 text-sm">{item.description}</p> 
            <p className="text-indigo-600 text-xl font-extrabold bg-yellow-200 px-2 py-1 rounded shadow-md">{formatCurrency(item.price)}</p>
        </div> 
        
        
        {/* <div className="px-6 pt-4 pb-2"> 
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#delicious</span> 
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food</span> 
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#yum</span> 
        </div>  */}
    </button>
  )
}
