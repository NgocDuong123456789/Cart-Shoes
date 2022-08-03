import { useContext, useRef, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classNames from "classnames/bind";
import { Config } from "../../Config/index";
import { Image } from "../../../assets/index";
import { Theme } from "../../useContext/Context";

// @ts-ignore
import style from "./Header.module.scss";
const cx = classNames.bind(style);

export const Header = () => {
  const lengthCart = useContext(Theme);
  const Ref1 = useRef<any>(null);
  const Ref2 = useRef<any>(null);
  const Ref3 = useRef<any>(null);
  const Ref4 = useRef<any>(null);
  const Ref5 = useRef<any>(null);
  const Ref6 = useRef<any>(null);
  const Ref7 = useRef<any>(null);
  const Ref8 = useRef<any>(null);

  const [scrollCheck, setScrollCheck] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = () => {
      Ref2.current.style.right = 0 + "%";
    };
    Ref1.current.addEventListener("click", handleClick);
    return () => Ref1.current.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const handleClose = () => {
      Ref2.current.style.right = -100 + "%";
    };
    Ref3.current.addEventListener("click", handleClose);
    return () => Ref3.current.removeEventListener("click", handleClose);
  }, []);

  useEffect(() => {
    const handleClose = () => {
      Ref2.current.style.right = -100 + "%";
    };
    Ref4.current.addEventListener("click", handleClose);
    Ref5.current.addEventListener("click", handleClose);
    Ref6.current.addEventListener("click", handleClose);
    Ref7.current.addEventListener("click", handleClose);
    Ref8.current.addEventListener("click", handleClose);
    return () => {
      Ref4.current.removeEventListener("click", handleClose);
      Ref5.current.addEventListener("click", handleClose);
      Ref6.current.addEventListener("click", handleClose);
      Ref7.current.addEventListener("click", handleClose);
      Ref8.current.addEventListener("click", handleClose);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 200 ? setScrollCheck(true) : setScrollCheck(false);
    };

    window.addEventListener("scroll", handleScroll);
    return ()=>window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cx(scrollCheck ? "scrollMenu" : "headering")}>
      <Link to={Config.home} className={cx("title")}>
        NIKE
      </Link>

      <ul className={cx("List-headering")} ref={Ref2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 md:hidden cursor-pointer  m-[20px] hover:text-[red]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          ref={Ref3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <NavLink
          to={Config.home}
          className={(nav) => cx("list-item", { active: nav.isActive })}
          ref={Ref4}
        >
          HOME
        </NavLink>
        <NavLink
          to={Config.products}
          className={(nav) => cx("list-item", { active: nav.isActive })}
          ref={Ref5}
        >
          PRODUCTS
        </NavLink>
        <NavLink
          to={Config.contact}
          className={(nav) => cx("list-item", { active: nav.isActive })}
          ref={Ref6}
        >
          CONTACT
        </NavLink>
        <NavLink
          to={Config.about}
          className={(nav) => cx("list-item", { active: nav.isActive })}
          ref={Ref7}
        >
          ABOUT
        </NavLink>
        <NavLink
          to={Config.login}
          className={(nav) => cx("list-item", { active: nav.isActive })}
          ref={Ref8}
        >
          REGISTER
        </NavLink>
      </ul>
      <Link to={Config.cart} className={cx("list-item list-count")}>
        <div className={cx("cart-img")}>
          <img src={Image.cart} alt="" />
          <span className={cx("count-cart")}>{lengthCart.data.length}</span>
          
        </div>
        
      
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={scrollCheck ? 'h-7 w-7 cursor mr-[10px] md:hidden block' : 'h-7 w-7 block md:hidden cursor-pointer ml-[10px]'}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        ref={Ref1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};
