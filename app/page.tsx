"use client";
import { useState } from "react";

export default function ChoreButton() {
  // 1. お風呂掃除が完了しているかどうかを true / false で管理する（初期値は未完了なので false）
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleChore = () => {
    // ✍️ 【問題①】ここにお風呂掃除の状態（trueとfalse）を反転させる処理を書いてください
    // ヒント：setIsCompleted(!isCompleted) と書くと、今と逆の状態に一発でひっくり返せます！
    setIsCompleted(!isCompleted)
  };

  // 2. 状態（isCompleted）によって、ボタンの色（Tailwind CSSのクラス名）を切り替える
  // ✍️ 【問題②】三項演算子、またはif文を使って、色を切り替えてください
  // ヒント： const buttonClassName = isCompleted ? "完了時の色" : "未完了時の色";

  const buttonColor =
  isCompleted ===true
  ? "bg-cyan-500 text-white"// 完了時：鮮やかな水色
  : "bg-gray-100 text-gray-400"; // 未完了時：おとなしいグレー
  return (
    <div className="p-8 flex justify-center items-center min-h-screen bg-gray-50">
      
      {/* ✍️ 【問題③】ボタンが押されたときに toggleChore が動くように onClick を設定してください */}
      <button onClick={toggleChore}
        className={`w-40 h-40 rounded-3xl  text-xl border-2 transition-all ${buttonColor}`}
      >
        <span className={isCompleted ? "font-bold" : "font-normal"}>
        {isCompleted ? "完了":"未完了"}
        </span>
        <br />
        {"風呂掃除"}
      </button>

    </div>
  );
}