import { useEffect, useState } from "react";
import { X, Moon, List } from "phosphor-react";
import classNames from "classnames";
import Logors from "./Logors";
import { Link } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  const changeScrollHeader = () => {
    if (window.scrollY >= 100) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScrollHeader);
  }, []);
  return (
    <header
      className={classNames(
        "fixed flex px-5 w-full h-16 md:h-28 md:justify-center md:items-center transition-all duration-700 z-50",
        {
          "bg-black": scrollHeader === true,
          "bg-white/40 backdrop-blur-sm": scrollHeader === false,
        }
      )}
    >
      <div className="w-screen md:w-[968px] flex justify-between items-center">
        <div className="">
          <a href="/" className="flex items-center">
            <Logors
              className={classNames("w-48 p-1 transition-all duration-700", {
                "fill-white": scrollHeader === true,
                "fill-black p-0": scrollHeader === false,
              })}
            />
            <span className="text-[0rem]">Renato Smania</span>
          </a>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            <li>
              <a
                className={classNames(
                  "uppercase text-lg transition-all duration-700",
                  {
                    "text-white": scrollHeader === true,
                    "text-black": scrollHeader === false,
                  }
                )}
                href="/#Home"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                className={classNames(
                  "uppercase text-lg transition-all duration-700",
                  {
                    "text-white": scrollHeader === true,
                    "text-black": scrollHeader === false,
                  }
                )}
                to={"/#about"}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  "uppercase text-lg transition-all duration-700",
                  {
                    "text-white": scrollHeader === true,
                    "text-black": scrollHeader === false,
                  }
                )}
                to={"/#Projetos"}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  "uppercase text-lg transition-all duration-700",
                  {
                    "text-white": scrollHeader === true,
                    "text-black": scrollHeader === false,
                  }
                )}
                to={"/#Social"}
              >
                Social
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  "uppercase text-lg transition-all duration-700",
                  {
                    "text-white": scrollHeader === true,
                    "text-black": scrollHeader === false,
                  }
                )}
                to={"/#Contato"}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex md:hidden">
          <button onClick={() => setOpen(!open)}>
            <List
              size={32}
              className={classNames({
                "text-white": scrollHeader === true,
                "text-black": scrollHeader === false,
              })}
            />
          </button>
        </div>
      </div>

      <nav
        className={classNames(
          "absolute w-[70%] flex flex-col h-screen bg-white/90 dark:bg-black/80 backdrop-blur-sm p-4 md:hidden transition-all duration-700",
          {
            "right-0": open === true,
            "right-[-100%]": open === false,
          }
        )}
      >
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-4 text-black dark:text-white"
        >
          <X size={32} />
        </button>
        <ul className="flex flex-col w-full pl-10 mt-10 gap-5 text-black dark:text-white">
          <li>
            <Link to={"/#home"} className="uppercase text-2xl">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/#about"} className="uppercase text-2xl">
              Sobre
            </Link>
          </li>
          <li>
            <Link to={"/#projetos"} className="uppercase text-2xl">
              Projetos
            </Link>
          </li>
          <li>
            <Link to={"/#social"} className="uppercase text-2xl">
              Social
            </Link>
          </li>
          <li>
            <Link to={"/#contato"} className="uppercase text-2xl">
              Contato
            </Link>
          </li>
        </ul>

        <div className="mt-56 absolute flex w-full justify-center items-center gap-5 bottom-36 text-black dark:text-white">
          <span>Dark Mode</span>
          <button>
            <Moon size={32} />
          </button>
        </div>
      </nav>
    </header>
  );
}
