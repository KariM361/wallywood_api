
interface inputProps {
  label:string
  type: string
  name: string
  value?: string
}

export function Input({label, type, name }: inputProps) {
  return (
    <label>
      {label}
            <input type={type} name={name} placeholder={`Indtast ${name}`}></input>
    </label>
  )
}