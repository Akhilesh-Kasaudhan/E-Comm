import React from "react";
import { Facebook, Twitter } from "lucide-react";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">{title}</h3>
      {links.map((link, i) => (
        <p
          key={i}
          className="text-sm text-[#22262A] hover:underline cursor-pointer"
        >
          {link}
        </p>
      ))}
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Follow Us</h3>
      <p className="text-sm text-[#22262A] text-justify max-w-3xs">
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

const FooterBottom = () => {
  return (
    <div className="border-t-2 border-t-gray-300 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-between py-4 mt-6">
      <p className="text-xs sm:text-sm text-[#C1C8CE] text-center sm:text-left">
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

const Footer = () => {
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
    <footer className="bg-[#bcddfe] text-[#22262A] px-6 sm:px-10 lg:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="flex flex-col gap-4">
          <img src="/logo.png" alt="logo" className="h-8 w-32 object-contain" />
          <p className="text-sm text-[#22262A] text-justify max-w-3xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
        </div>

        <SocialLinks />

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-[#22262A] max-w-3xs">
            E-Comm, 4578 Marmora Road, Glasgow D04 89GR
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {footerLinks.map((col, i) => (
          <FooterColumn key={i} title={col.title} links={col.links} />
        ))}
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
