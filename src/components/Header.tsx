import { useEffect, useState } from "react";
import { X, Moon, List } from "phosphor-react";
import classNames from "classnames";
import Logors from "./Logors";

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
        "fixed flex px-5 bg-slate-300 w-full h-28 md:justify-center md:items-center transition-all duration-700 ",
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
                className={classNames("uppercase text-lg transition-all duration-700", {
                  "text-white": scrollHeader === true,
                  "text-black": scrollHeader === false,
                })}
                href="#Home"
              >
                Home
              </a>
            </li>
            <li>
              <a className={classNames("uppercase text-lg transition-all duration-700", {
                  "text-white": scrollHeader === true,
                  "text-black": scrollHeader === false,
                })} href="#Sobre">
                Sobre
              </a>
            </li>
            <li>
              <a className={classNames("uppercase text-lg transition-all duration-700", {
                  "text-white": scrollHeader === true,
                  "text-black": scrollHeader === false,
                })} href="#Projetos">
                Projetos
              </a>
            </li>
            <li>
              <a className={classNames("uppercase text-lg transition-all duration-700", {
                  "text-white": scrollHeader === true,
                  "text-black": scrollHeader === false,
                })} href="#Social">
                Social
              </a>
            </li>
            <li>
              <a className={classNames("uppercase text-lg transition-all duration-700", {
                  "text-white": scrollHeader === true,
                  "text-black": scrollHeader === false,
                })} href="#Contato">
                Contato
              </a>
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
          "absolute w-[70%] flex flex-col h-screen bg-slate-500 p-4 md:hidden transition-all duration-300",
          {
            "right-0": open === true,
            "right-[-100%]": open === false,
          }
        )}
      >
        <button onClick={() => setOpen(!open)} className="absolute right-4 ">
          <X size={32} />
        </button>
        <ul className="flex flex-col w-full pl-10 mt-10 gap-5">
          <li>
            <a href="#" className="uppercase text-2xl">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-2xl">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-2xl">
              Projetos
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-2xl">
              Social
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-2xl">
              Contato
            </a>
          </li>
        </ul>

        <div className="mt-56 absolute flex w-full justify-center items-center gap-5 bottom-36">
          <span>Dark Mode</span>
          <button>
            <Moon size={32} />
          </button>
        </div>
      </nav>
    </header>
  );
}
