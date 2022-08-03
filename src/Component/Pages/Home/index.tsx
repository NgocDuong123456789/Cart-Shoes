import className from'classnames/bind'
//@ts-ignore
import style from './Home.module.scss'
const cx= className.bind(style)


export const Home = () => {
  return (
    <div className={cx('swapper')}>
      <h1>Welcome To Our Shoe Store</h1>
    </div>
  )
}
