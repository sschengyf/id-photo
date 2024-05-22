import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="text-center text-gray-400 text-sm flex-none py-6 ">
    <div className="underline flex flex-row justify-center gap-4">
      <a href="mailto:theidphoto@gmail.com">Contact us</a>
      <a href="https://buymeacoffee.com/theidphoto">Buy me a coffee</a>
      <Link to="/privacy-policy">Privacy policy</Link>
    </div>
    <div className="mt-4">Copyright &copy; 2024 theidphoto.com</div>
  </footer>
);
