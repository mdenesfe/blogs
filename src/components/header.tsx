"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import IconArrowDropDown from "./icons/arrow-drop-down";
import cx from "@/lib/cx";
import Container from "./container";

const MENU = {
  "/": "hakkımda 🙋‍♂️",
  "/post": "yazılar ✨",

};

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();

  const clearSlash = pathname?.split("/")[1];
  const path = clearSlash ? `/${clearSlash}` : "/";

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <header className="">
      <Container>
        <nav
          className={cx(
            isNavOpen ? "flex" : "hidden",
            "flex-col gap-4 sm:!flex sm:flex-row",
          )}
        >
          {Object.entries(MENU).map(([key, value]) => {
            const isActive = key === path;
            return (
              <span key={key}>
                <NextLink href={key} className={cx(isActive ? "shine" : "")}>
                  {value}
                </NextLink>
              </span>
            );
          })}
        </nav>

        {!isNavOpen && (
          <button
            type="button"
            className="flex select-none items-center sm:hidden"
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            <span>menu</span>
            <IconArrowDropDown className="opacity-50" />
          </button>
        )}
      </Container>
    </header>
  );
}
