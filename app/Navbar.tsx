"use client";

import { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

import { usePathname } from "next/navigation";
import ModeToggle from "./ModeToggle";

interface NavData {
  id: number;
  name: string;
  url: string;
}

const navData: NavData[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Project",
    url: "/project",
  },
  {
    id: 3,
    name: "Research",
    url: "/research",
  },
  {
    id: 4,
    name: "Blogs",
    url: "/blogs",
  },
  {
    id: 5,
    name: "CV",
    url: "/cv",
  },
];

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = useCallback((path: string) => pathname === path, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [windowWidth]);

  return (
    <div>
      <div className="flex flex-row max-w-5xl relative justify-between mx-auto pt-2 pb-4 w-full sm:align-top align-middle items-center gap-4 sm:px-4">
        <Link href="/" className="font-bold text-2xl">
          Sam<span className="text-primary">Oye</span>
        </Link>
        <div>
          {windowWidth < 768 ? (
            <div className="lg:hidden md:hidden pr-8">
              {open ? (
                <HiOutlineX
                  onClick={() => setOpen(false)}
                  size={30}
                  className="cursor-pointer text-black"
                />
              ) : (
                <HiMenuAlt3
                  onClick={() => setOpen(true)}
                  size={30}
                  className="cursor-pointer text-black"
                />
              )}
            </div>
          ) : null}
          <nav className="flex flex-row items-center align-middle relative">
            {open && (
              <ul className={`flex flex-row gap-4  font-medium`}>
                {navData.map((data) => (
                  <li key={data.id}>
                    <Link href={data.url} className="flex cursor-pointer">
                      <span
                        className={`${
                          isActive(data.url)
                            ? "text-primary"
                            : "text-black dark:text-white"
                        } px-4`}
                      >
                        {data.name}
                      </span>
                    </Link>
                  </li>
                ))}
                <ModeToggle />
              </ul>
            )}
            {!open && (
              <div className="flex flex-col pr-8">
                <ModeToggle />
                <ul className={`flex flex-col gap-4 absolute right-10  font-medium z-50 top-10 bg-orange-700`}>
                  {navData.map((data) => (
                    <li key={data.id}>
                      <Link href={data.url} className="flex cursor-pointer">
                        <span
                          className={`${
                            isActive(data.url)
                              ? "text-primary"
                              : "text-black dark:text-white"
                          } px-4`}
                        >
                          {data.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;