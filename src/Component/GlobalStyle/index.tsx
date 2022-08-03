import React from 'react'
import './GlobalStyle.module.scss'
export const GlobalStyle:React.FC<{children:JSX.Element}>= ({children}) => {
  return (
    <div>{children}</div>
  )
}
