import Image from "next/image";

const Splash = () => {
  return (
    <div className="justify-cente flex h-screen w-screen items-center">
      <div className="flex h-full w-1/3 flex-col items-center justify-center bg-[#262626] text-left text-white">
        <div className="w-3/4">
          <div className="mb-8 text-6xl leading-tight">
            Do more. <br /> Think less.
          </div>
          <div>
            <button className="w-full rounded border py-3 hover:bg-white hover:font-bold hover:text-black">
              Get started {"->"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-full w-2/3 items-center justify-center bg-[#7d7d7d]">
        <Image
          src="/splash.svg"
          alt="splash"
          height="300rem"
          width="1000rem"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
export default Splash;
