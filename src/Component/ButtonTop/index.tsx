import { useEffect, useState, memo } from "react";
import { Chevron } from "../iconSvg/icon";

const ButtonTop = () => {
  const [scrollTop, setScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleTop = () => {
      window.scrollY > 150 ? setScrollTop(true) : setScrollTop(false);
    };
    window.addEventListener("scroll", handleTop);
    return () => window.removeEventListener("scroll", handleTop);
  }, []);
  const handleTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setScrollTop(false);
  };
  return (
    <div>
      {scrollTop && (
        <div
          className="fixed bottom-[20px] right-[20px] w-[50px] h-[50px] rounded-[50%] bg-[#666] flex justify-center text-center items-center cursor-pointer hover:bg-[#ccc]"
          onClick={handleTop}
        >
          <Chevron />
        </div>
      )}
    </div>
  );
};
export default memo(ButtonTop);
