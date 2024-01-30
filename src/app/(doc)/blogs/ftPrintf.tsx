import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default function FtPrintf({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Link
      href={"/ftPrintf"}
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
        The `printf` function is a widely used C library function that is used to print text to the standard output. 
        Its a powerful and flexible function that allows developers to format and print text in a variety of ways. 
        </p>
        < br />
        Read more...
      </div>
    </Link>
  );
}
