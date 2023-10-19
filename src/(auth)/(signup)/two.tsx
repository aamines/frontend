import {
  useRef,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEventHandler,
} from "react";
import { Link } from "react-router-dom";

const Verification: React.FC = () => {
  const inputRefs: React.RefObject<HTMLInputElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let value = e.target.value;

    // Ensure only one digit is allowed
    if (value.length > 1) {
      value = value.charAt(value.length - 1);
    }

    e.target.value = value;

    // Focus on the next input
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (index > 0) {
        // Clear the current input
        inputRefs[index].current!.value = "";
        // Handle backspace to shift focus backward
        inputRefs[index - 1].current?.focus();
      } else {
        // Clear the first input if there's nothing to delete
        if (inputRefs[0].current) {
          inputRefs[0].current.value = "";
        }
      }
    }
  };

  const handlePaste: ClipboardEventHandler<HTMLInputElement> = (
    e: ClipboardEvent
  ) => {
    const pastedText = e.clipboardData?.getData("text");
    const numbers = pastedText?.match(/\d/g);

    if (numbers) {
      // Distribute pasted numbers to the inputs
      inputRefs.forEach((inputRef, index) => {
        if (numbers[index] && inputRef.current) {
          inputRef.current.value = numbers[index];
          if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
          }
        }
      });
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-background items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-dark mb-2">
          Verify your email!
        </h2>
        <p>
          Enter the code sent to{" "}
          <span className="text-bright">byiringirosaad@gmail.com</span> to
          verify your email!
        </p>
      </div>
      <div className="mt-14 flex space-x-4">
        {inputRefs.map((inputRef, index) => (
          <input
            key={index}
            type="number"
            maxLength={1}
            ref={inputRef}
            onPaste={handlePaste}
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-14 h-14 text-center text-xl outline-none rounded-md bg-white text-dark"
          />
        ))}
      </div>
      <div className="flex h-12 w-96 overflow-hidden rounded-md mb-6 mt-14">
        <button className="w-full h-full outline-none bg-bright text-white">
          Continue
        </button>
      </div>
      <div className="flex mt-14">
        <p className="text-dark">Feeling lost?</p>
        <Link to={"/signup"} className="ml-2 text-bright">
          Get Back
        </Link>
      </div>
    </div>
  );
};

export default Verification;
