import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
import Link from "next/link";
import Footer from "~/components/Footer";



const main: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>{"Swensen's"}</title>
        <meta name="description" content="Swensen's" />
        <link rel="icon" href="/fav-sw.jpg" />
      </Head>
      
      <Header />
      <div className="bg-gradient-to-b from-[#ff807c] to-[#fd4b47] px-0 pt-44 font-kanit font-light leading-5 text-white">
        <div className="my-0 mx-auto max-w-[1200px] pb-28 px-6 leading-5">
          <div className="-mx-4 flex items-center text-white">
            <div className="relative px-4 md:float-left md:box-border md:block md:w-5/6 md:flex-none lg:float-left lg:box-border lg:block lg:w-1/2 lg:flex-none">
              <div className="">
                <h1 className="m-0 text-5xl font-medium uppercase leading-tight text-white">
                {'สมัครเป็นสมาชิก'}
                  <br className="uppercase" />
                  {'สเวนเซ่นส์วันนี้ พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่'}
                </h1>
                <div className="mt-6 text-xl">
                  <p className="m-0 leading-6">
                  {`พิเศษสุดๆ สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน ยิ่งได้
                    ยิ่งคุ้ม ใครๆ ก็สมัครได้
                    ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ รอไม่ได้แล้ว
                    สมัครเลย`}
                  </p>
                </div>
                <div className="relative clear-both mx-0 table h-auto">
                  <div className="relative px-0 sm:float-left sm:box-border sm:block sm:w-full sm:flex-none md:float-left md:box-border md:block md:w-1/2 md:flex-none lg:float-left lg:box-border lg:block lg:w-1/2 lg:flex-none">
                    <div className="mt-12">
                      <Link
                        href="/en/delivery"
                        className="relative inline-block h-20 w-[230px] cursor-pointer bg-transparent bg-[url('/th-normal.svg')] bg-contain bg-center bg-no-repeat font-light leading-5 text-red-600 hover:bg-[url('/th-hover.svg')] hover:text-red-500"
                      ></Link>
                    </div>
                  </div>
                  <div className="relative px-0 sm:float-left sm:box-border sm:block sm:w-full sm:flex-none md:float-left md:box-border md:block md:w-1/2 md:flex-none lg:float-left lg:box-border lg:block lg:w-1/2 lg:flex-none"></div>
                </div>
              </div>
            </div>
            <div className="relative px-4 md:float-left md:box-border md:block md:w-5/6 md:flex-none lg:float-left lg:box-border lg:block lg:w-1/2 lg:flex-none">
              <div className="">
                <img
                  src="/banner-image.svg"
                  alt="banner"
                  className="block h-auto w-full max-w-full border-none align-middle"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-no-repeat pt-16 font-light leading-5 text-neutral-500 bg-[url('/bg-page-bottom.jpg')]">
          <div className="my-0 mx-auto px-10 leading-5 max-w-[1200px]">
            <div className="flex items-center text-neutral-500 flex-wrap flex-row">
              <div className="relative px-0 md:float-left md:box-border md:block md:w-5/12 md:flex-none">
                <div>
                  <img
                    src="/app-screen-webp.webp"
                    alt=""
                    className="block h-auto w-full border-none align-middle"
                  />
                </div>
              </div>
              <div className="relative md:float-left md:box-border md:block md:w-2/5 md:flex-none">
                <div>
                  <h2
                    className="mb-6 text-4xl font-medium text-neutral-800"
                  >
                    Download on
                  </h2>
                  <div>
                    <div className="relative clear-both -mx-3 table h-auto">
                      <div className="relative float-left block w-1/2 flex-none px-3">
                        <div>
                          <a
                            href="https://play.google.com/store/apps/details?id=com.swensens1112.swensens"
                            target="_blank"
                            className="cursor-pointer bg-transparent text-red-600 hover:text-red-500"
                          >
                            <img
                              src="/google-play.png"
                              alt = "google play"
                              className="block h-auto w-full border-none align-middle text-red-500"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="relative float-left block w-1/2 flex-none px-3">
                        <div>
                          <a
                            href="https://apps.apple.com/th/app/swensens/id1553427962"
                            target="_blank"
                            className="cursor-pointer bg-transparent text-red-600 hover:text-red-500"
                          >
                            <img
                              src="/app-store.png"
                              alt = "app store"
                              className="block h-auto w-full border-none align-middle"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default main;
