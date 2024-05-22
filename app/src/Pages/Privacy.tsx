import { Footer, HomeIcon } from '../components';
import { Link } from 'react-router-dom';

export const Privacy = () => {
  return (
    <div className="container mx-auto pt-12 lg:pt-20 xl:pt-24 bg-white h-screen flex flex-col px-4 xl:px-0 max-w-screen-lg">
      <header className="flex items-center text-neutral-800">
        <Link to="/">
          <div className="flex items-center">
            <HomeIcon />
            &nbsp;Home
          </div>
        </Link>
        <span>&nbsp;/&nbsp;</span>
        <Link to="/privacy-policy">Privacy policy</Link>
      </header>
      <main className="grow">
        <article>
          <header className="text-center py-20">
            <h1 className="text-5xl font-bold  text-neutral-800">
              Privacy policy
            </h1>
            <div className="text-gray-500 mt-4">
              Last Updated: 21th May 2024
            </div>
          </header>
          <p className="text-gray-500">
            <section>
              Welcome to theidphoto.com. We value your privacy and are committed
              to protecting your personal information. This privacy policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website theidphoto.com. Please read
              this privacy policy carefully. If you do not agree with the terms
              of this privacy policy, please do not access the website.
            </section>

            <section className="mt-4">
              <h2 className="text-2xl font-bold text-neutral-800">
                Information we collect
              </h2>
              When you visit our site, we automatically collect certain
              information about your device, including information about your
              web browser, IP address, time zone, and some of the cookies that
              are installed on your device. Additionally, as you browse the
              website, we collect information about the individual web pages or
              products that you view, what websites or search terms referred you
              to the website, and information about how you interact with the
              website.
            </section>

            <section className="mt-4">
              <h2 className="text-2xl font-bold text-neutral-800">
                Cookies and tracking technologies
              </h2>
              We may use cookies and similar tracking technologies to access or
              store information. You can instruct your browser to refuse all
              cookies or to indicate when a cookie is being sent. However, if
              you do not accept cookies, you may not be able to use some
              portions of our site.
            </section>

            <section className="mt-4">
              <h2 className="text-2xl font-bold text-neutral-800">
                How we handle your photos
              </h2>
              One of the key features of our site is the generation of
              print-ready passport photo templates. We want to assure you that:
              <ul className="list-disc list-inside">
                <li>All photo processing happens directly on your device.</li>
                <li>
                  Photos are not uploaded to our servers or stored by us in any
                  way.
                </li>
                <li>
                  Your photos stay on your device and are never transmitted to
                  us or any third party.
                </li>
              </ul>
            </section>

            <section className="mt-4">
              <h2 className="text-2xl font-bold text-neutral-800">
                Third-party services
              </h2>
              Our site may contain links to third-party websites and services.
              We are not responsible for the privacy practices or the content of
              these third-party sites. Please review the privacy policies of
              each site you visit.
            </section>

            <section className="mt-4">
              <h2 className="text-2xl font-bold text-neutral-800">
                Data security
              </h2>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable.
            </section>

            <section className="mt-4">
              <h2 className="text-2xl font-bold text-neutral-800">
                Changes to this privacy policy
              </h2>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal, or regulatory reasons. We will notify you of
              any changes by posting the new privacy policy on our website. You
              are advised to review this privacy policy periodically for any
              changes.
            </section>

            <section className="mt-4">
              <h2 className="text-2xl font-bold text-neutral-800">
                Contact us
              </h2>
              If you have any questions about this privacy policy, please
              contact us by sending email to theidphoto@gmail.com
            </section>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};
