import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

interface OrderTotalProps {
    order: OrderItem[],
    tip: number,
    placeOrder : () => void
}


const OrderTotal = ({order, tip, placeOrder}: OrderTotalProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
    const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount]);
  return (
    <>
        <div className="space-y-3 mt-5 w-full">
            <h2 className="font-black text-2xl">Totales y Propinas:</h2>

            <div className="flex justify-between items-center">
                <span className="flex-grow">Subtotal a Pagar:</span>
                <span className="flex-grow border-b border-dotted border-gray-400 mx-2"></span>
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </div>

            <div className="flex justify-between">
                <span className="flex-grow">Propinas:</span>
                <span className="flex-grow border-b border-dotted border-gray-400 mx-2"></span>
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </div>

            <div className="flex justify-between">
                <span className="flex-grow">Total a Pagar:</span>
                <span className="flex-grow border-b border-dotted border-gray-400 mx-2"></span>
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </div>
        </div>


        <button
            className="text-indigo-600 w-full text-xl font-extrabold bg-yellow-200 px-2 py-1 rounded shadow-md disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}

export default OrderTotal