import clsx from "clsx"
import { ChangeEventHandler } from "react"


interface Props {
    label: string
    type: string
    name: string
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string
    touched:boolean|undefined
    error:string|undefined
}

const Input = (props: Props) => {
    return <>
        <label>
            <span className="block text-sm/6 font-medium text-gray-900">{props.label}</span>
            <input
                className={clsx(
                    "mb-1 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400",
                    {
                        "outline-gray-300":!(props.touched&&props.error),
                        "outline-red-300":props.touched&&props.error,
                    }
                )}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
            {props.error&&<p className="text-red-600 text-sm font-medium">{props.error}</p>}
        </label>
    </>
}

export default Input