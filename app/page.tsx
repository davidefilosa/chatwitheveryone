import Image from "next/image";
import Link from "next/link";
import demoGif from "@logos/demo.gif";

export default function Home() {
  return (
    <main className="">
      <div className="relative isolate pt-14 dark:bg-gray-900">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[360deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(50% 0%, 69% 33%, 100% 35%, 100% 70%, 80% 90%, 54% 46%, 14% 88%, 0% 70%, 0% 35%, 18% 47%)",
            }}
          />
        </div>
        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Chat with Anyone, anywhere!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                You speak your language, they speak their language.{" "}
                <span className="text-indigo-600 dark:text-indigo-500">
                  Let AI handle the transaction.
                </span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/chat"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
                >
                  View pricing <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
                <Image
                  unoptimized
                  src={demoGif}
                  alt="App screnshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%+36rem)] dark:bg-gray-900"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[360deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(50% 48%, 69% 33%, 100% 35%, 100% 70%, 82% 79%, 52% 63%, 14% 88%, 0% 70%, 1% 41%, 18% 47%)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
