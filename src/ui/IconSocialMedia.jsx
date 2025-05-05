import { Facebook, Github, Instagram, Linkedin, X } from "lucide-react";
import React from "react";

const variants = {
  github: <Github/>,
  facebook: <Facebook />,
  instagram: <Instagram />,
  linkedin:<Linkedin />,
  x: <X />,
};

function IconSocialMedia({ href, variant }) {
  const icon = variants[variant] || null;
  return (
    <a
      href={href}
      data-tooltip-target={`"tooltip-${variant}`}
      className="inline-flex items-center justify-center text-gray-500 w-10 h-10 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
    >
      {icon}
      <span className="sr-only">
        View on {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </span>
    </a>
  );
}

export default IconSocialMedia;
