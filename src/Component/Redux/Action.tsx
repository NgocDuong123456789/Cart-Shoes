import {products} from '../Interface'
export const ActionProduct=(payload:products)=>{
    return { 
    type:'ADD_PRODUCT', 
    payload:payload
}

}

export const TotalPrices=(payload:number)=>{
    return { 
        type:'TOTAL_PRICE',
        payload
    }
}


