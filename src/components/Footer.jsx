import React from "react";
import { Facebook, Twitter } from "lucide-react";

// Reusable column component
const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">{title}</h3>
      {links.map((link, i) => (
        <p
          key={i}
          href="#"
          className="text-sm text-[#22262A] hover:underline cursor-pointer"
        >
          {link}
        </p>
      ))}
    </div>
  );
};

// Social links
const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-4 w-[240px]">
      <h3 className="text-lg font-semibold ">Follow Us</h3>
      <p className="text-sm text-[#22262A] text-justify">
        Since the 1500s, when an unknown printer took a galley of type and
        scrambled.
      </p>
      <div className="flex items-center gap-4">
        <Facebook size={20} className="text-[#385C8E]" />
        <Twitter size={20} className="text-[#03A9F4]" />
      </div>
    </div>
  );
};

// Bottom section
const FooterBottom = () => {
  return (
    <div className="border-t-2 border-t-gray-300 flex sm:flex-row flex-col gap-8 items-center justify-between py-4 mt-6 ">
      <p className="text-sm text-[#C1C8CE]">
        © 2018 Ecommerce theme by www.bisenbaev.com
      </p>
      <div className="flex items-center gap-4">
        <img
          src="/Western-union.png"
          alt="western-union"
          className="w-10 h-6 object-contain"
        />
        <img
          src="/master.png"
          alt="master"
          className="w-10 h-6 object-contain"
        />
        <img
          src="/paypal.png"
          alt="paypal"
          className="w-10 h-6 object-contain bg-white"
        />
        <img
          src="/visa.jpg"
          alt="visa"
          className="w-10 h-6 object-contain bg-white"
        />
      </div>
    </div>
  );
};

// Main Footer
const Footer = () => {
  // ✅ JSON for footer columns
  const footerLinks = [
    {
      title: "Information",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "Service",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "My Account",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "Our Offers",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
  ];

  return (
    <footer className="bg-[#bcddfe]  text-[#22262A]  px-20 py-10 mt-0">
      {/* Top section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 ">
        {/* Logo & description */}
        <div className="flex flex-col gap-4 ">
          <img src="/logo.png" alt="logo" className="h-8 w-32 object-contain" />
          <p className="w-[220px] text-sm text-[#22262A] text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Social links */}
        <SocialLinks />

        {/* Contact info */}
        <div className="flex flex-col gap-4 w-[150px]">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-[#22262A]">
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </p>
        </div>
      </div>
      {/* Footer columns from JSON */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 mt-8  gap-10 ">
        {footerLinks.map((col, i) => (
          <FooterColumn key={i} title={col.title} links={col.links} />
        ))}
      </div>

      {/* Bottom section */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
