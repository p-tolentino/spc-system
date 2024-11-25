import Image from "next/image";
import Link from "next/link";

// TODO: HOME PAGE DETAILS

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start justify-center items-center ">
        <div className="flex justify-center w-full">
          <Image
            className="dark:invert"
            src="https://protonproducts.com/wp-content/uploads/2020/12/spcbluewithtext.png"
            alt="SPC"
            width={180}
            height={38}
            priority
          />
        </div>

        <div>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">Placeholder Page</li>
            <li>Have to implement Auth first</li>
          </ol>
        </div>
        <div className="flex justify-center w-full">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href={`/login`}
            rel="noopener noreferrer"
          >
            Login →
          </Link>
        </div>
      </main>
    </div>
  );
}
