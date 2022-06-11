import Link from "next/link";

export default function Button({
  href,
  as,
  bgColor,
  txtColor,
  text,
  ClickHandler,
  additionalStyle,
}) {
  return (
    <Link href={href} as={as}>
      <a onClick={ClickHandler}>
        <div
          className={`${additionalStyle} ${bgColor} ${txtColor} cursor-pointer py-4 px-6 text-center`}
        >
          {text}
        </div>
      </a>
    </Link>
  );
}
