"use client";
import { BackgroundBeams } from "../../components/ui/background-beams";

function page() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Connect with Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Hello 👋 wanna get in touch with me. I provide reliable communication
          solutions for your inquiries, feedback, or collaborations. Whether you
          are reaching out for Tech opportunity or just want to say hello, I
          have got you covered.
        </p>
        <form
          action="https://getform.io/f/925bde26-6d3f-4a19-9ef2-c6c0be0a1886"
          method="POST"
        >
          <input
            type="text"
            placeholder=""
            className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2"
          />
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
