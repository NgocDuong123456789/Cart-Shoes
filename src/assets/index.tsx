interface image{
    times:any
    menu:any
    cart:any
}
export const Image:image={
    times:require('./times-solid.svg').default,
    menu:require('./bars-solid.svg').default,
    cart:require('./shopping-cart-solid.svg').default
}