import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode,
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest}>
      {children}
    </button>
  )
}