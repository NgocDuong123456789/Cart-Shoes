import {memo} from 'react'
import { Link } from "react-router-dom";
import { products } from "../../Interface";
import { Config } from "../../Config/index";
import { useDispatch } from "react-redux";
import { ActionProduct } from "../../Redux/Action";

interface data {
  product: products;
  handleClick: (id: number) => void;
}


 const ProductItem: React.FC<data> = (props) => {
  const { product, handleClick } = props;
  const dispatch = useDispatch<any>();

  const handleClick1 = () => {
    dispatch(ActionProduct(product));
  };
  return (
    <div className="shadow-2xl mx-[30px]  my-[20px] ">
      <div className="m-[10px] overflow-hidden ">
        <img src={product.src} alt="CƠM" className="cursor-pointer w-[100%] hover:scale-150 transition duration-200 ease-linear"  />
      </div>
      <Link to={Config.contact}>
        <h2
          className="font-bold mt-[20px] ml-[15px] cursor-pointer hover:text-[red]"
          onClick={handleClick1}
        >
          {product.title}
        </h2>
      </Link>
      <p className="text-[red] font-bold text-[20px] my-[10px] ml-[15px]">{`$ ${product.price}`}</p>
      <p className="text-[14px] ml-[15px]">{product.description}</p>
      <div
        className="w-[100%] flex items-center text-center justify-center"
        onClick={() => handleClick(product.id)}
      >
        <button
          className="bg-[#000] text-[#fff] px-[30px] 
            py-[10px] rounded-[5px] font-bold my-[15px] hover:bg-[#3e2f2f]
            "
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default memo(ProductItem)
