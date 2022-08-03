import {Config} from '../Config/index'
import {Contact} from '../Pages/Contact/index'
import {Home} from '../Pages/Home/index'
import {Login} from '../Pages/Login/index'
import {About} from '../Pages/About/index'
import {Products} from '../Pages/Products/index'
import {Cart} from '../Pages/Cart/index'
interface Route{
    path:string
    component:()=>any

}
export const PublicRoute:Route[]=[
    
    {
        path:Config.home,
        component:Home

    },
    {
        path:Config.contact,
        component:Contact
    },
    {
        path:Config.products,
        component:Products
    },
    {
        path:Config.about,
        component:About
    }
    ,{
        path:Config.login,
        component:Login
    }, 
    {
        path:Config.cart,
        component:Cart
    }
]

