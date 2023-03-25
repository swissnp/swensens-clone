import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "~/components/Header";
import SignInForm from "~/components/SignInForm";
import { type ILogin } from "~/common/validation/auth";
import { useCallback } from "react";
import { signIn } from "next-auth/react";

const Home: NextPage = () => {
  const onSubmit = useCallback(async (data: ILogin) => {
    await signIn("credentials", { ...data, callbackUrl: "/" });
  }, []);
  
  return (
    <>
      <Head>
        <title>{"Swensen's"}</title>
        <meta name="description" content="Swensen's" />
        <link rel="icon" href="/fav-sw.jpg" />
      </Head>
      <main className="flex min-h-screen flex-col items-center font-kanit tabular-nums">
        <Header />
        <section className="mt-16 flex flex-auto flex-col bg-none py-10 font-kanit font-light leading-5 text-neutral-500">
          <section className="flex flex-auto flex-col">
            <main className="block flex-auto font-kanit font-light leading-5 text-neutral-500">
              <div className="mx-autoleading-5 px-6 text-neutral-500">
                <div className=" mx-auto flex flex-col rounded-[10px] w-[480px] bg-white leading-5 text-neutral-500">
                  <div className="relative flex h-60 grow flex-col items-start justify-center bg-zinc-300 bg-contain object-cover py-8 px-10 font-kanit font-light leading-5 text-white">
                    <div className="z-10 bg-contain text-white ">
                      <h2 className="text-3xl">ยินดีต้อนรับ</h2>
                      <p>เข้าสู่ระบบเพื่อใช้งาน</p>
                    </div>
                    <Image src={"/card-head.png"} fill alt="card-head" />
                  </div>
                  <div className="p-10 font-kanit font-light leading-5 text-neutral-500">
                    <SignInForm onSubmit={onSubmit}/>
                  </div>
                </div>
              </div>
            </main>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
