type SubmitProps = {
  label: string
  value: string
  className?: string
}

export function Submit({ value, className }: SubmitProps) {
  return (
    <input
      type="submit"
      value={value}
      className={className} 
    />
  )
}