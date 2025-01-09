import { Separator } from "@/components/ui/separator";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full backdrop-blur-md shadow-lg border-t border-black/10">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img src={Logo} alt="hardcore-wisdoms" className="w-[170px]" />
            </div>
            <p className="text-sm">
              Empowering through knowledge and wisdom. Join our community of
              lifelong learners.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start">
                <Link
                  to="/"
                  className="text-sm hover:text-[#670404] transition-colors"
                >
                  Introduction
                </Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link
                  to="/research"
                  className="text-sm hover:text-[#670404] transition-colors"
                >
                  Research
                </Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link
                  to="/mastery"
                  className="text-sm hover:text-[#670404] transition-colors"
                >
                  Woman Mastery
                </Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link
                  to="/affiliate"
                  className="text-sm hover:text-[#670404] transition-colors"
                >
                  Become Affiliate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">Email: contact@example.com</li>
              <li className="text-sm">Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-black/10" />

        {/* Copyright */}
        <div className="pt-6 text-center text-sm">
          <p>© {currentYear} Hardcore Wisdoms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
