import { useRef } from "react";
import { useDrag } from "@use-gesture/react";

const MobileLayout = ({ children }) => {
  const ref = useRef(null);

  useDrag(
    ({ down, movement: [mx], memo }) => {
      if (!memo) memo = ref.current.scrollLeft;

      if (down) {
        ref.current.scrollLeft = memo - mx;
      }

      return memo;
    },
    {
      target: ref,
      axis: "x",
      pointer: { mouse: true }, // 마우스 드래그만
      filterTaps: true,
    }
  );

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div
        className="bg-slate-400 rounded-xl shadow-2xl overflow-hidden"
        style={{ width: "390px", height: "750px" }}
      >
        <div
          ref={ref}
          className="
            flex
            h-full
            overflow-hidden
            gap-6
            px-4
            py-10
            cursor-grab
            active:cursor-grabbing
          "
        >
          {children.map((child, idx) => (
            <div key={idx} className="flex-shrink-0 w-[320px]">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
