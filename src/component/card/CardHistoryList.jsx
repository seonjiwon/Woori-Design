import { useRef } from "react";
import { useDrag } from "@use-gesture/react";
import CardHistoryItem from "./CardHistoryItem";

const CardHistoryList = ({ histories }) => {
  const ref = useRef(null);

  useDrag(
    ({ down, movement: [, my], memo }) => {
      // memo: 드래그 시작 시점의 scrollTop
      if (!memo) memo = ref.current.scrollTop;

      if (down) {
        ref.current.scrollTop = memo - my;
      }

      return memo;
    },
    {
      target: ref,
      axis: "y",
      pointer: { mouse: true }, // 마우스 드래그만
      filterTaps: true, // 클릭 방해 방지
    }
  );

  return (
    <div
      ref={ref}
      className="
        h-64
        overflow-y-scroll
        scrollbar-hide
        cursor-grab
        active:cursor-grabbing
        select-none
        bg-white
      "
    >
      {histories.map((history) => (
        <CardHistoryItem key={history.id} history={history} />
      ))}
    </div>
  );
};

export default CardHistoryList;
