export const Header = () => (
  <header className="flex flex-row justify-end flex-none">
    <div className="basis-1/2">
      <h1 className="text-5xl font-bold leading-tight">
        Get your print-ready passport photo in minutes
      </h1>
      <p className="text-lg text-gray-400 mt-2.5">
        Why spending $20 on passport photo? Simply upload your photo and we'll
        automatically adjust it to the 6x4 inch layout for flawless printing.
      </p>
    </div>
    <div className="basis-1/2">
      <img src="/images/banner.svg" className="block ml-auto" />
    </div>
  </header>
);
