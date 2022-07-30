import React from "react";
import Link from "next/link";
import Image from "next/image";
import myPhoto from "../public/images/minified.png";

export default function HeroSection() {
  return (
    <div className="mb-20">
      <div className="md:flex mb-10">
        <div className="text pt-8 w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            I merge marketing && web developement to create experiences
          </h1>
          <p>
            Hey there! I am Mahdi. A passionate marketer and an even more
            passionate web developer. <br /> I like blending marketing, UI/UX
            design and code to create websites and products that speak to your
            audiance. <br /> I also started blogging to ace my communication
            skills and also to share my journey.{" "}
            <Link href="https://blog.mahdibeldjoudi.xyz/">
              <a className="underline">You can check my blog.</a>
            </Link>
          </p>
        </div>
        <div className="image w-full mt-8 md:mt-0 md:w-1/2">
          <Image
            src={myPhoto}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <div className="scroll -rotate-90 text-center mt-10">
        <p className="underline underline-offset-8 animate-bouncy">Scroll</p>
      </div>
    </div>
  );
}
