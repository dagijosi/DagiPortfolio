"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";
import { GitHub, LinkedIn, MenuOutlined } from "@mui/icons-material";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navs = [
    { name: "About Me", url: "#About" },
    { name: "Skills", url: "#skills" }, // Updated URL
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];
  const { theme } = useTheme();
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef();
  const handleClick = (name) => {
    setActive(name);
  };
  return (
    <nav
      className={`fixed top-0 left-0 flex justify-center border-b ${
        theme === "dark" ? "border-gray-800" : "border-gray-200"
      } p-2 w-full z-50`}
    >
      {navs.map((menu) => (
        <Link href={menu.url} key={menu.name} className=" hidden md:block">
          <Button
            variant="ghost"
            className={`mr-4 ${active === menu.name ? "bg-accent" : ""}`}
            onClick={() => handleClick(menu.name)}
          >
            {menu.name}
          </Button>
        </Link>
      ))}
      <Button
        ref={menuRef}
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute left-0"
      >
        <MenuOutlined />
      </Button>
      {isOpen && (
        <div
          className={`absolute left-0 mt-2 w-40 rounded-md shadow-lg py-2 z-50 ${theme === 'dark' ? "bg-gray-950": "bg-white"}`}
          style={{ top: `${menuRef.current?.offsetHeight}px` }}
        >
          {navs.map((menu) => (
            <Link href={menu.url} key={menu.name}>
              <Button
                variant="ghost"
                className={`block px-4 py-2 ${
                  active === menu.name ? "bg-accent" : ""
                }`}
                onClick={() => handleClick(menu.name)}
              >
                {menu.name}
              </Button>
            </Link>
          ))}
        </div>
      )}

      <ModeToggle />
      <div className="mt-2">
        <Link href={"https://github.com/dagijosi"} className="mr-4">
          <GitHub />
        </Link>
        <Link
          href={"http://linkedin.com/in/dagmawi-yoseph-4b4aa6296"}
          className="mr-4"
        >
          <LinkedIn />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
