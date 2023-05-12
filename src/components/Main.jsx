import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { increment, decrement, pow, divide } from "../features/CountSlice";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.count.number);
  const inputRef = useRef();
  const inputRef2 = useRef();
  //   second style
  // const { number} = useSelector(state=>state.count)

  const incrBtn = () => {
    dispatch(increment(Number(inputRef.current.value)));
  };
  const decrBtn = () => {
    dispatch(decrement(Number(inputRef.current.value)));
  };
  const powBtn = () => {
    dispatch(pow(Number(inputRef.current.value)));
  };
  const divideBtn = () => {
    dispatch(divide(Number(inputRef.current.value)));
  };

  return (
    <main className="w-[100%] h-[100vh] bg-slate-700 p-4 flex flex-col items-center gap-3">
      <input
        className="p-2"
        ref={inputRef}
        type="number"
        placeholder="Enter first number"
      />
      <input
        className="p-2"
        ref={inputRef2}
        type="number"
        placeholder="Enter second number"
      />
      <h1 className="text-2xl text-red-400">Main Page: {number}</h1>
      <div className="w-[100%] flex items-center justify-center gap-4 p-3 bg-slate-200">
        <button
          className="w-[300px] p-2 bg-slate-500 text-white font-serif"
          onClick={incrBtn}
        >
          INCR
        </button>
        <button
          className="w-[300px] p-2 bg-slate-500 text-white font-serif"
          onClick={decrBtn}
        >
          DECR
        </button>
        <button
          className="w-[300px] p-2 bg-slate-500 text-white font-serif"
          onClick={powBtn}
        >
          POW
        </button>
        <button
          className="w-[300px] p-2 bg-slate-500 text-white font-serif"
          onClick={divideBtn}
        >
          DIVIDE
        </button>
      </div>
    </main>
  );
}

export default Main;
