import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  PinterestLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <footer className="w-full flex justify-center mt-6 text-gray-500">
      <div className="flex flex-col justify-center w-screen mx-5 sm:w-[968px] lg:w-[1024px] gap-10 py-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Renato Smania</h3>
            <p>Imagine, Ele dará forma ao seu sonho.</p>

            <ul className="flex my-5 gap-4">
              <li>
                <a href="#">
                  <InstagramLogo size={32} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FacebookLogo size={32} />
                </a>
              </li>
              <li>
                <a href="#">
                  <PinterestLogo size={32} />
                </a>
              </li>
              <li>
                <a href="#">
                  <WhatsappLogo size={32} />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Sobre</h3>
            <ul>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">Novidades</a>
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
                <a href="#">Perguntas frequentes</a>
              </li>
              <li>
                <a href="#">Central de suporte</a>
              </li>
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
