import { useContext, useCallback } from "react";
import { Theme } from "../../useContext/Context";
import   CartItem from "./CartItem";
import { products } from "../../Interface";
import ButtonTop from "../../ButtonTop/index";
import { useSelector } from "react-redux";
import NotThings from '../../NotThings/NotThing'

export const Cart = () => {
  useCallback(() => {
    
  },[])
  const dataCart = useContext(Theme);

  const SumPrice = useSelector((state: any) => {
    return state.data;
  });

  return (
    <div className="my-[30px] relative">
      {dataCart.data.length !== 0 ? (
        <div className="w-full max-w-[1024px] m-auto border-2">
          {dataCart.data.map((datacart: products, index: number) => (
            <CartItem key={index} datacart={datacart} />
          ))}
          <p className="flex justify-end font-bold p-[30px] text-[1.3rem] text-[red]">
            {`Total: $ ${SumPrice}`}
          </p>
        </div>
      ) : (
        <NotThings  />
       
      )}
      <ButtonTop />
    </div>
  );
};
