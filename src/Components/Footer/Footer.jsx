import React from 'react';
import Container from '../Container/Container';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <>
      <footer className="footer-style">
        {/* soft glow orbs */}
        <div className="pointer-events-none absolute -top-20 -left-32 h-72 w-72 bg-gradient-to-br from-indigo-300/20 via-sky-300/15 to-transparent blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-20 -right-32 h-80 w-80 bg-gradient-to-tr from-sky-300/20 via-indigo-300/10 to-transparent blur-3xl"></div>

        <Container>
          <div className="footer sm:footer-horizontal text-base-content md:p-10">
            <aside className="space-y-3">
              <figure>
                <img className="w-14 h-14 drop-shadow-sm animate-spin-slow " src={logo} alt="AppVerse Logo" />
              </figure>
              <h2 className="text-2xl font-heading text-slate-700 font-medium">AppVerse Inc.</h2>
              <p className="text-sm font-p -mt-3 text-slate-500 leading-relaxed">
                Explore the universe of productive apps.
                <br />
                Crafted with <span className="text-rose-500">❤️</span> by Pixyora.
              </p>
            </aside>

            <nav>
              <h6
                className="text-xs font-semibold uppercase tracking-wider
               text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500"
              >
                Services
              </h6>
              <a className="anchor-style">UI/UX Design</a>
              <a className="anchor-style">Web Development</a>
              <a className="anchor-style">API Integration</a>
              <a className="anchor-style">App Marketing</a>
            </nav>

            <nav>
              <h6
                className="text-xs font-semibold uppercase tracking-wider
               text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500"
              >
                About AppVerse
              </h6>
              <a className="anchor-style">Our Mission</a>
              <a className="anchor-style">Careers</a>
              <a className="anchor-style">Blog</a>
              <a className="anchor-style">Contact</a>
            </nav>

            <nav>
              <h6
                className="text-xs font-semibold uppercase tracking-wider
               text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">
                Legal
              </h6>
              <a className="anchor-style">Terms of Service</a>
              <a className="anchor-style">Privacy Policy</a>
              <a className="anchor-style">Cookie Policy</a>
              <a className="anchor-style">License</a>
            </nav>
          </div>

          <p className="text-sm text-center text-slate-400 mt-8 tracking-wide">
            © 2025 <span className="font-semibold text-slate-700">AppVerse</span> — All rights reserved.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
