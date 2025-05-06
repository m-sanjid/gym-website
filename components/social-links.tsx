import React, { useState } from "react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

const SocialLinks = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  return (
    <div className="flex space-x-4 pt-2">
      {[
        {
          icon: IconBrandFacebook,
          name: "facebook",
          url: "https://facebook.com",
          color: "bg-[#3b5998]",
          iconColor: "#3b5998",
        },
        {
          icon: IconBrandInstagram,
          name: "instagram",
          url: "https://instagram.com",
          color: "bg-[#e4405f]",
          iconColor: "#e4405f",
        },
        {
          icon: IconBrandX,
          name: "twitter",
          url: "https://twitter.com",
          color: "bg-[#1da1f2]",
          iconColor: "#1da1f2",
        },
      ].map((social) => (
        <Link
          key={social.name}
          href={social.url}
          className="group"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredSocial(social.name)}
          onMouseLeave={() => setHoveredSocial(null)}
        >
          <div
            className={`p-2 rounded-full  group-hove transition-all duration-300 transform ${
              hoveredSocial === social.name ? `scale-110 ${social.color}` : ""
            }`}
          >
            <social.icon
              className={`h-4 w-4 transition-colors ${
                hoveredSocial === social.name
                  ? "text-white"
                  : `text-[${social.iconColor}]`
              }`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
