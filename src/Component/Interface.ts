export interface products{
    id:number
    title:string 
    src:string
    description:string
    content: string
    price:number,
    colors:string[]
    count:number
}
 export interface Routess {
    path: string;
    component: () => any;
  }