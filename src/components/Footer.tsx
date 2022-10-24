import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  PinterestLogo,
  TiktokLogo,
  LinkedinLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full flex justify-center mt-6 text-gray-500">
      <div className="flex flex-col justify-center w-screen mx-5 sm:w-[968px] lg:w-[1024px] gap-10 py-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Renato Smania</h3>
            <p>Imagine, Ele dará forma ao seu sonho.</p>

            <ul className="grid grid-cols-4 my-5 gap-2">
              <li>
                <a
                  href="https://www.instagram.com/renatosmania.arq/"
                  target={"_blank"}
                >
                  <InstagramLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Renato-Smania-Arquitetura/100077983083114/"
                  target={"_blank"}
                >
                  <FacebookLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com/arq_renatosmania"
                  target={"_blank"}
                >
                  <PinterestLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@renatosmaniaarquitetura"
                  target={"_blank"}
                >
                  <TiktokLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/renatosmaniastudiodearquitetura"
                  target={"_blank"}
                >
                  <LinkedinLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5545999210484"
                  target={"_blank"}
                >
                  <WhatsappLogo size={32} />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Sobre</h3>
            <ul>
              <li>
                <Link to={"/sobre"}>Sobre nós</Link>
              </li>
              <li>
                <Link to={"/posts"}>Posts</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">A Empresa</h3>
            <ul>
              <li>
                <a href="#">Equipe</a>
              </li>
              <li>
                <a href="#">Na mídia</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Suporte</h3>
            <ul>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between">
          <p>&#169; 2023 Renato Smania. Todos os direitos reservados.</p>

          <div className="flex gap-4 justify-between">
            <a href="#">Termos de uso</a>
            <a href="#">Políticas de priacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
