import { MoveUp } from "lucide-react";
import React, { useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const [allMsg, setAllMsg] = useState<string[]>([]);

  const sendMesage = () => {
    // const trimmedMsg=msg.trim()
    //TODO: make the api call with the trimmed message
    setAllMsg((prev) => [...prev, message]);
    setMessage("");
    //
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMesage();
    }
  };

  return (
    <div className="w-screen h-screen bg-[#212121]">
      <div className="min-h-screen sm:w-full md:w-3xl mx-auto flex flex-col items-center bg-[#212121] sm:px-2 md:px-10 border border-red-700 justify-between py-4">
        <div className=" w-full h-20 flex justify-center items-center">
          <h1 className="font-bold text-lg text-white sm:text-2xl md:text-4xl">
            PMFM Support
          </h1>
        </div>
        <div className="">
          {allMsg?.map((msg) => (
            <p className="text-white" key={msg}>
              msg
            </p>
          ))}
        </div>
        <div className="min-h-30 sm:rounded-lg border border-white/30 w-full md:rounded-4xl mx-auto  bg-[#303030]  justify-center px-1 py-2 flex flex-col gap-3 shadow-2xl ">
          <textarea
            placeholder="Type your question"
            className="p-2 md:p-3 min-h-10 rounded-md outline-none text-white text-wrap  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 overflow-auto default-browser"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <div className="flex justify-end mx-2 my-4">
            <button
              onClick={sendMesage}
              className="bg-[#fff] hover:bg-[#C1C1C1] text-black flex justify-center items-center w-10 h-10 p-3 rounded-full cursor-pointer"
            >
              <MoveUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
