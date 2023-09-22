import React from 'react'

import { ButtonBack, ButtonFront } from './index'

interface ButtonProps {
  children: JSX.Element | string
  href: string
  alt?: boolean
  form?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => (
  <ButtonBack
    href={props.href}
    alt={props.alt}
    form={props.form}
    disabled={props.disabled}
  >
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
)

export default Button
