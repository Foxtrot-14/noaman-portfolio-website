import { Typewriter } from "react-simple-typewriter";
export default function Devpage() {
  return (
    <>
      <h1 className="font-bold text-4xl p-5 mb-10 rounded-lg bg-black text-[#0F0] font-mono">
        <Typewriter words={["The Engineer's Instinct"]} typeSpeed={50} />
      </h1>
    </>
  );
}
