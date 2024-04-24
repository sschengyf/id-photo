import { Home } from './Pages';

const App = () => {
  return (
    <div className="container mx-auto pt-28 bg-white h-screen flex flex-col">
      <header className="flex flex-row justify-end flex-none">
        <div className="basis-1/2">
          <h1 className="text-5xl">
            Get your print-ready passport photo in minutes
          </h1>
          <p className="text-lg text-gray-400">
            Why spending $20 on passport photo? Simply upload your photo and
            we'll automatically adjust it to the 6x4 inch layout for flawless
            printing.
          </p>
        </div>
        <div className="basis-1/2">
          <img src="/images/banner.svg" className="block ml-auto" />
        </div>
      </header>
      <main className="grow">
        <Home />
      </main>
      <footer className="text-center text-gray-400 text-sm underline flex-none py-6 flex flex-row justify-center gap-4">
        <a href="https://google.com">Contact us</a>
        <a href="https://google.com">Buy me a coffee</a>
        <a href="https://google.com">Privacy policy</a>
      </footer>
    </div>
  );
};

export default App;
