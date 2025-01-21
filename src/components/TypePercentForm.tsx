import type {Dispatch, SetStateAction} from "react"


interface TypePercentFormProps {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

const TypePercentForm = ({setTip, tip}: TypePercentFormProps) => {

  return (
    <div className="space-y-3 mt-5 w-full">
        <h3 className="font-black text-2xl">Propinas:</h3>

        <form>
            {tipOptions.map( tipOptions => (
                <div key={tipOptions.id} className="flex gap-2">
                    <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                    <input 
                        id={tipOptions.id} 
                        type="radio"
                        name="tip"
                        value={tipOptions.value}
                        onChange={e => setTip(+e.target.value)}
                        checked = {tipOptions.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}

export default TypePercentForm