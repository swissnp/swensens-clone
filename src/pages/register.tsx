import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "~/components/Header";
import SignUpForm from "~/components/SignUpForm";
import { type ISignUp } from "~/common/validation/auth";
import { useCallback } from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const Home: NextPage = () => {

  const { mutateAsync } = api.auth.signUp.useMutation();

  const onSubmit = useCallback(
    async (data: ISignUp) => {
      const result = await mutateAsync(data);
      return result;
    },
    [mutateAsync]
  );

  return (
    <>
      <Head>
        <title>{"Swensen's"}</title>
        <meta name="description" content="Swensen's" />
        <link rel="icon" href="/fav-sw.jpg" />
      </Head>

      <main className="flex min-h-screen flex-col  font-kanit tabular-nums">
        <Header />
        <section className="mt-16 flex flex-auto flex-col items-center bg-none py-10 px-0 font-kanit font-light leading-5 text-neutral-500">
          <section className="flex flex-auto flex-col">
            <main className="block flex-auto font-kanit font-light leading-5 text-neutral-500">
              <div className="mx-autoleading-5 px-6 text-neutral-500">
                <div className="mx-auto max-w-[480px] overflow-hidden rounded-[10px] bg-white leading-5 text-neutral-500">
                  <div className="relative flex h-60 grow flex-col items-start justify-center bg-zinc-300  py-8 px-10 font-kanit font-light leading-5 text-white">
                    <div className=" z-10 bg-cover text-white">
                      <h2 className="text-3xl">สร้างบัญชี</h2>
                      <p>สมัครสมาชิกและเริ่มใช้งาน</p>
                    </div>
                    <Image
                      src={"/card-head.png"}
                      className="bg-contain bg-right"
                      fill
                      alt="card-head"
                    />
                  </div>
                  <div className="p-10 font-kanit font-light leading-5 text-neutral-500">
                    <SignUpForm onSubmit={onSubmit} />
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
