"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../../utils/animations";

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const TransitionLink = ({ href, children, className }: NavigationLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <div onClick={handleClick} className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default TransitionLink;
