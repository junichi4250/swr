import Link from "next/link";
import React from "react";

interface CustomLinkProps {
  href: string;
  as: string;
  children: React.ReactNode;
}
const CustomLink = ({ href, as, children }: CustomLinkProps) => (
  <Link href={href} as={as} passHref>
    <a>{children}</a>
  </Link>
);

export default CustomLink;
