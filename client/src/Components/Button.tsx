import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: Props) => {
  return (
    <button {...props} className={`px-5 py-2.5 ${props.className}`}>{props.children}</button>
  )
}

export default Button