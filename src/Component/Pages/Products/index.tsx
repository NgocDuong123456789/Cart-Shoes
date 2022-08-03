import { useContext, useState, useCallback } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "../../data";
import  ProductItem  from "./ProductItem";
import { Theme } from "../../useContext/Context";
import { ToastContainer} from 'react-toastify';
import ButtonTop from '../../ButtonTop/index'

export const Products = () => {
   const dataCart = useContext(Theme);

  const handleClick = (id: number) => {
     const Cart = Product.find((item) => {
      return item.id === id;
     });
  
    for (let i = 0; i < dataCart.data.length; i++) {
      if (id === dataCart.data[i].id) {
        Swal.fire({
          icon: "error",
          title: "Sản phẩm đã có trong giỏ hàng",
          text: "Mời bạn chọn sản phẩm khác",
        });
        return;
      }
    }
    if (Cart) {
      dataCart.setData([...dataCart.data, Cart]);
      toast.success("You have successfully added to cart");
    }
  };

  
  
 
  return (
    <div className="mt-[20px] mb-[40px] ">
      

      <div className="mt-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-3  w-full max-w-[1024px] m-auto md:shadow-2xl  ">
          {Product.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))}
        </div>
        <ToastContainer />
      </div>
       <ButtonTop   />
    </div>
  );
};
