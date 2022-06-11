import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function Drawer() {
  return (
    <>
      <div className="mt-10 mb-20">
        <ul className="flex flex-col justify-center space-y-7">
          <li className="mx-auto">
            <Link href="https://blog.mahdibeldjoudi.xyz/">
              <li className="mx-auto">
                <a className="underlineStyle">
                  <span>Blog</span>
                </a>
              </li>
            </Link>
          </li>
          <Link href="#projects">
            <li className="mx-auto">
              <a className="underlineStyle">
                <span>Projects</span>
              </a>
            </li>
          </Link>
          <li className="mx-auto">
            <Button
              href="mailto:mehdiibeldjoudi@gmail.com"
              bgColor="bg-white"
              txtColor="text-accent"
              text="Contact"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
