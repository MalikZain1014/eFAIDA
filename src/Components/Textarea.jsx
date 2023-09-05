import React, { useState } from "react";

export default function MainBody() {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
  };
  const handleClearClick = () => {
    let newText = ``;
    setText(newText);
  };
  const handleCopyClick = () => {
    let newText = document.getElementById("textbox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const removeExtraSpaces = () => {
    const cleanedText = text.replace(/\s+/g, " ").trim();
    setText(cleanedText);
  };
  const toTitleCase = () => {
    const words = text.split(/\s+/);
    const titleCaseText = words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(titleCaseText);
  };
  const reverseText = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);
  };

  const [text, setText] = useState("");

  return (
    <div className="flex justify-center items-center mt-6  ">
      <div className="container ">
        <div className="w-full sm:w-6/2 md:w-4/3 lg:w-6/4 px-9">
          <h2 className="text-blue-700 font-bold">Text Area</h2>
          <textarea
            id="textbox"
            className="w-full px-2 border border-blue-400 border-2 rounded h-40 focus:outline-none focus:border-blue-800"
            placeholder="Enter text"
            value={text}
            onChange={handleOnChange}
          ></textarea>

          <button
            type="button"
            onClick={handleUpClick}
            className="inline-block rounded bg-blue-500 px-6 mr-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition-duration-150 ease-in-out hover:bg-blue-900 hover-shadow-zinc-900 [0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-Success-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-Danger-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            UpperCase
          </button>
          <button
            type="button"
            onClick={handleDownClick}
            className="inline-block rounded bg-blue-500 px-6 mr-2 my-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition-duration-150 ease-in-out hover:bg-blue-900 hover-shadow-zinc-900 [0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-Success-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-Danger-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            LowerCase
          </button>
          <button
            type="button"
            onClick={handleClearClick}
            className="inline-block rounded bg-blue-500 px-6 mr-2  my-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition-duration-150 ease-in-out hover:bg-blue-900 hover-shadow-zinc-900 [0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-Success-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-Danger-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Clear All
          </button>
          <button
            type="button"
            onClick={handleCopyClick}
            className="inline-block rounded bg-blue-500 px-6 mr-2 my-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition-duration-150 ease-in-out hover:bg-blue-900 hover-shadow-zinc-900 [0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-Success-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-Danger-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Copy All
          </button>
          <button
            type="button"
            onClick={removeExtraSpaces}
            className="inline-block rounded bg-blue-500 px-6 mr-2 my-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition-duration-150 ease-in-out hover:bg-blue-900 hover-shadow-zinc-900 [0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-Success-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-Danger-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Remove Spece
          </button>
          <button
            type="button"
            onClick={toTitleCase}
            className="inline-block rounded bg-blue-500 px-6 mr-2 my-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition-duration-150 ease-in-out hover:bg-blue-900 hover-shadow-zinc-900 [0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-Success-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-Danger-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Title Case
          </button>
          <button
            type="button"
            onClick={reverseText}
            className="inline-block rounded bg-blue-500 px-6 mr-2 my-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition-duration-150 ease-in-out hover:bg-blue-900 hover-shadow-zinc-900 [0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-Success-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-Danger-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Reverse Text
          </button>
          <div className="container mt-4">
            <h3 className="text-blue-700 font-bold">Summary</h3>

            <p>
              Words: {text.split(/\s+/).filter((word) => word !== "").length}{" "}
              Characters: {text.length}
            </p>
            <p>
              {(
                0.008 * text.split(" ").filter((word) => word !== "").length
              ).toFixed(2)}{" "}
              Read in Minute
            </p>
            <h3 className="text-blue-700 font-bold">Preview</h3>
            <p className="pb-12">{text}</p>

            {/* Add buttons and input for your functions here */}
          </div>
        </div>
      </div>
    </div>
  );
}
