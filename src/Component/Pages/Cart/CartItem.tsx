import { products } from "../../Interface";
import { useState, useContext, memo, useMemo } from "react";
import { Theme } from "../../useContext/Context";
import { useDispatch } from "react-redux";
import { TotalPrices } from "../../Redux/Action";
import { CloseIcon } from "../../iconSvg/icon";

interface CartItem {
  datacart: products;
}

const CartItem: React.FC<CartItem> = (props) => {
  const datas = useContext(Theme);

  const { datacart } = props;
  const dispatch = useDispatch<any>();

  const [count, setCount] = useState<number>(1);
  datacart.count = count;

  const handleClose = (id: number) => {
    const dataItem = datas.data.filter((d: products) => {
      return d.id !== id;
    });
   if(dataItem) datas.setData([...dataItem]);
  };


  const handleClick1 = () => {
    if (count < 2) return;
    setCount((prev: number) => prev - 1);
  };

  const handleClick2 = () => {
    setCount((prev: number) => prev + 1);
    datacart.count = count;
  };


  const TotalPrice = useMemo(() => {
    const sumMoney = datas.data.reduce((sum: number, item: products) => {
      return sum + item.count * item.price;
    }, 0);
    return sumMoney;
  }, [count]);
  

  const Price = useMemo(() => {
    const sum = count * datacart.price;
    return sum;
  }, [count]);


  dispatch(TotalPrices(TotalPrice));

  return (
    <div className="m-[20px]">
      <div className="border-2">
        <div className="hello" onClick={() => handleClose(datacart.id)}>
          <CloseIcon />
        </div>
        <div className="block md:flex w-full max-w-[1024px]   m-auto ">
          <div className="md:w-[400px] flex justify-center items-center text-center w-[100%] md:mt-[0px]  mt-[20px]">
            <img src={datacart.src} alt="" className="w-[250px] h-[250px]" />
          </div>

          <div className="md:flex-1  w-[100%]  md:ml-[0px] ml-[25px] ">
            <div className="flex justify-between mt-[20px] mr-[60px] items-center text-center text-[20px]">
              <p className="font-bold text-[20px]">{datacart.title}</p>
              <p className="text-[red]">{`$  ${Price}`}</p>
            </div>

            <div className="flex items-center cursor-pointer my-[15px]">
              <div className="w-[20px] h-[20px] bg-[red]"></div>
              <div className="w-[20px] h-[20px] mx-[15px] bg-[#3fd784]"></div>
              <div className="w-[20px] h-[20px] mr-[15px] bg-[#5e5eaf]"></div>
              <div className="w-[20px] h-[20px] bg-[blue]"></div>
            </div>
            <h3 className="text-[17px]">{datacart.description}</h3>
            <p className="text-[15px] my-[10px] mr-[60px]">
              {datacart.content}
            </p>
            <div className="flex mb-[30px] mt-[20px]">
              <button
                className="w-[25px] h-[25px] bg-[#ccc] flex items-center text-center justify-center hover:bg-[#666] hover:text-[#fff]"
                onClick={handleClick1}
              >
                -
              </button>
              <p className="w-[60px] text-center items-center ">{count}</p>
              <button
                className="w-[25px] h-[25px] bg-[#ccc] flex items-center text-center justify-center hover:bg-[#666] hover:text-[#fff] "
                onClick={handleClick2}
              >
                +
              </button>
            </div>
            <div className="w-[100%] flex  justify-end "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(CartItem);
