import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl sm:text-6xl tracking-tight font-bold text-gray-900 ">
            Your marketplace for high-quality
            <span className="text-green-600"> digital assets</span>.
          </h1>

          <p className="mt-6 text-lg max-w-prose text-muted-foreground ">
            Welcome to Nrova Digital Marketplace. A place where you can collect
            your digital assets with high quality and pre-verifed listing
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 ">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>

            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List Products  */}
      </MaxWidthWrapper>

      <section className="">
        <MaxWidthWrapper className="py-20">""</MaxWidthWrapper>
      </section>
    </>
  );
}
