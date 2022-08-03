import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import { Theme } from "../../useContext/Context";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import NotThings from '../../NotThings/NotThing'

export const Contact = () => {
  const Themes = useContext(Theme);

  const  itemData= useSelector((state: any) => {
    return state.data;
  });
  

  
  const handleClick = () => {

    for (let i = 0; i < Themes.data.length; i++) {
      if (Themes.data[i].id === itemData.id) {
        Swal.fire({
          icon: "error",
          title: "Sản phẩm đã có trong giỏ hàng",
          text: "Mời bạn chọn sản phẩm khác",
        });
        return;
      }
    }
    Themes.setData([...Themes.data, itemData]);
    toast.success("You have successfully added to cart");
  };


  return (
    <div>
 { Object.keys(itemData).length === 0 ?  (
  <NotThings />
):(   <>
  <div className=" block md:flex w-full max-w-[1024px]  md:border-2  md:m-auto mt-[50px]">
    <div className="md:w-[400px] flex justify-center items-center text-center m-auto w-[100%]">
      <img src={itemData.src } alt="" className="w-[250px] h-[250px] block" />
    </div>
 
    <div className="md:flex-1  ml-[20px] mt-[20px]">
      <div className="w-[100%] flex justify-end cursor-pointer"></div>

      <div className="flex justify-between mt-[20px] mr-[60px] items-center text-center text-[20px]">
        <p className="font-bold text-[20px]">{itemData.title}</p>
        <p className="text-[red]">{`$  ${itemData.price}`}</p>
      </div>

      <div className="flex items-center cursor-pointer my-[15px]">
        <div className="w-[20px] h-[20px] bg-[red]"></div>
        <div className="w-[20px] h-[20px] mx-[15px] bg-[#3fd784]"></div>
        <div className="w-[20px] h-[20px] mr-[15px] bg-[#5e5eaf]"></div>
        <div className="w-[20px] h-[20px] bg-[blue]"></div>
      </div>
      <h3 className="text-[17px]">{itemData.description}</h3>
      <p className="text-[15px] my-[10px] mr-[60px]">
        {itemData.content}
      </p>

      <div className="w-[100%] ">
        <button
          className="bg-[#000] text-[#fff] px-[30px] py-[10px] rounded-[5px] font-bold mt-[10px] hover:bg-[#3e2f2f] mb-[20px]"
          onClick={handleClick}
        >
          ADD TO CART
        </button>
      </div>
      <div className="w-[100%] flex  justify-end "></div>
    </div>
  </div>
  <ToastContainer />
</>
)}
     
</div>
  );
};
