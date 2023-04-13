import { InputHTMLAttributes } from "react"


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  id: string,
  name: string
}

export function Input({label, id, name, ...props }: IInputProps) {

  return (
    <div className="flex flex-col items-stretch gap-2">
      <label htmlFor={id} className="font-normal text-base text-black">{label}</label>
      <input id={id} name={name} {...props} className="w-full px-2.5 py-2 outline-none border focus:shadow-md focus:shadow-blueLight border-gray700 rounded-lg text-sm placeholder:text-gray300" />
    </div>
  )
}