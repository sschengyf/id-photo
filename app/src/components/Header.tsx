export const Header = () => (
  <header className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-end flex-none">
    <div className="lg:basis-1/2">
      <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
        Get your print-ready passport photo in minutes
      </h1>
      <p className="text-base lg:text-lg text-gray-400 mt-2.5">
        Why spending $20 on passport photo? Simply upload your photo and we'll
        automatically adjust it to the 6x4 inch layout for flawless printing.
      </p>
    </div>
    <div className="m-auto sm:w-3/4 lg:basis-1/2">
      <img src="/images/banner.png" className="block ml-auto" />
    </div>
  </header>
);
