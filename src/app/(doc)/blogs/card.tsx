import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default function Card({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Link
      href={"/ft-printf"}
      className="text-sm opacity-90 group-hover:opacity-100"
    >
      <div
        className={cn(
          "mx-auto px-5 border border-neutral-700 hover:border-neutral-600 transition-all group rounded-lg py-7 mb-4 [&>*]:transition-all",
          className
        )}
      >
        <p className="font-semibold opacity-95 group-hover:opacity-100">
          Understanding the inner workings of printf: A deep dive into the ft_printf project
        </p>
        <p className="text-xs opacity-60 group-hover:opacity-80">
          MDX is a popular library to add Markdown into your React application.
          Using MDX we can add React components inside markdown.
        </p>
        < br />
        Read more...
      </div>
    </Link>
  );
}
