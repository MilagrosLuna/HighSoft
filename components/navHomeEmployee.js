import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function HomeNavEmployee() {
 
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/home">
                <Image
                  src="/img/logoW.png"
                  width={4550}
                  height={4550}
                  quality={100}
                  alt="logo highsoft"
                ></Image>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/img/close.svg"
                      width={30}
                      height={30}
                      alt="logo cerrar"
                      quality={100}
                    />
                  ) : (
                    <Image
                      src="/img/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo hamburgesa"
                      className="focus:border-none active:border-none"
                      quality={100}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                 <Link
                    href="/dashboard/loan-employees"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Prestamos
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="/dashboard/branches"
                    onClick={() => setNavbar(!navbar)}
                  
                  >
                    Sucursales
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="/dashboard/currency-exchange"
                    onClick={() => setNavbar(!navbar)}
                   
                  >
                    Conversor
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="/dashboard/credit-cards"
                    onClick={() => setNavbar(!navbar)}
                   
                  >
                    Tarjetas
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="/dashboard/my-account"
                    onClick={() => setNavbar(!navbar)}
                   
                  >
                    Cuenta
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="/"
                    onClick={() => setNavbar(!navbar)}
                    style={{                     
                      color: "white",                     
                    }}
                  >
                    CerrarSesión
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavEmployee;
