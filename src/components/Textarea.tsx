import { TextareaHTMLAttributes } from "react"


interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string,
  id: string,
  name: string
}

export function TextArea({label, id, name, ...props }: ITextAreaProps) {

  return (
    <div className="flex flex-col items-stretch gap-2">
      <label htmlFor={id} className="font-normal text-base text-black">{label}</label>
      <textarea id={id} name={name} {...props} className="w-full h-20 resize-none px-2.5 py-2 outline-none focus:shadow-md focus:shadow-blueLight border border-gray700 rounded-lg text-sm placeholder:text-" />
    </div>
  )
}