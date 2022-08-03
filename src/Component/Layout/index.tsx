import {Header} from './Header/index'

export const SumLayout:React.FC<{children:JSX.Element}> = ({children}) => {
  return (
    <div>
      <Header />
      <div className='body'>
        {
          children
        }
      </div>
    </div>
  )
}
