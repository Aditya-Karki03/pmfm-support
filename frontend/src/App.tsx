import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200 px-10 border border-red-700 justify-between py-4">
      <div className=" w-full h-20 flex justify-center items-center">
        <h1 className="font-bold text-lg sm:text-2xl md:text-4xl">
          PMFM Support
        </h1>
      </div>
      <div className=""></div>
      <div className="min-h-52 border border-black/10 justify-center px-2 md:px-4 flex flex-col gap-3 w-full rounded-lg shadow-2xl ">
        <input
          type="text"
          placeholder="Type your question"
          className="border border-black/30 p-2 md:p-3 rounded-md outline-none"
        />
        <button className="bg-black text-white py-2 rounded-md">Ask</button>
      </div>
    </div>
  );
};
export default App;
