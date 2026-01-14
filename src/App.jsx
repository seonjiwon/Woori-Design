// src/App.jsx
import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import Card_Back from "./components/card/Card_Back";

function App() {
  // 카드가 뒤집혔는지 상태 관리 (false: 앞면, true: 뒷면)
  const [isFlipped, setIsFlipped] = useState(false);

  // 뒤집기 함수
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <DefaultLayout>
      {/* 3D 원근감을 위한 컨테이너 */}
      <div className="perspective-1000 w-full flex justify-center py-10">
        {/* 실제 뒤집히는 카드 몸체 */}
        <div
          className={`relative w-[340px] h-[520px] transition-transform duration-700 preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* [1. 카드 앞면] - 팀원 담당 파트가 들어올 곳 */}
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full bg-slate-200 rounded-[2rem] flex flex-col items-center justify-center border-2 border-dashed border-slate-400 shadow-xl overflow-hidden">
              <p className="text-slate-500 font-bold">카드 앞면</p>
              <p className="text-slate-400 text-sm">(팀원 담당 파트)</p>

              {/* 임시 뒤집기 버튼 */}
              <button
                onClick={handleFlip}
                className="absolute top-4 right-4 bg-blue-900 text-white w-8 h-8 rounded-sm shadow-md flex items-center justify-center"
              >
                🔄
              </button>
            </div>
          </div>

          {/* [2. 카드 뒷면] - 사용자님 담당 파트 */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <Card_Back totalUsage="1,250,000원" onFlip={handleFlip}>
              {/* 팀원 작업 예정인 리스트 공간 */}
              <div className="w-full h-full flex items-center justify-center border border-white/20 rounded-sm">
                <span className="text-white/50 text-xs">
                  카드 내역 리스트 (팀원 작업)
                </span>
              </div>
            </Card_Back>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default App;
