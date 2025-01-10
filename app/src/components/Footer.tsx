import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-400 text-sm flex-none py-6 ">
      <div className="underline flex flex-row justify-center gap-4">
        <a href="mailto:theidphoto@gmail.com">Contact us</a>
        <Link to="/privacy-policy">Privacy policy</Link>
      </div>
      <div className="mt-4">Copyright &copy; {currentYear} theidphoto.com</div>
    </footer>
  );
};
