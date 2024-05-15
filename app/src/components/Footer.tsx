import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="text-center text-gray-400 text-sm underline flex-none py-6 flex flex-row justify-center gap-4">
    <a href="https://google.com">Contact us</a>
    <a href="https://google.com">Buy me a coffee</a>
    <Link to="/privacy-policy">Privacy policy</Link>
  </footer>
);
