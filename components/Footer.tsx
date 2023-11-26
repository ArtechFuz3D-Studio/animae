import Image from "next/image";

function Footer() {
  return (
    <header className="fixed bottom-0 left-0 z-20 w-full sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 ArtechFuz3D</p>
      <a href="https://linktr.ee/artechfuz3d">
      <Image
        src="./logoa.svg"
        alt="logo"
        width={100}
        height={100}
        className="object-contain"
      /></a>

      <div className="flex items-center gap-6">
      <a href="https://www.instagram.com/artechfuz3d">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        </a>
          <a href="https://www.instagram.com/artechfuz3d">
        <Image
        
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </a>
  
          <a href="https://www.instagram.com/artechfuz3d">
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />    </a>
      </div>
    </header>
  );
}

export default Footer;
