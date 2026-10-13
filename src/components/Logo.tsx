import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "green" }: { variant?: "green" | "gold" }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <Image
        src={variant === "green" ? "/logo-green-96.png" : "/logo-gold-96.png"}
        alt=""
        width={33}
        height={36}
        priority={variant === "green"}
        loading={variant === "green" ? undefined : "eager"}
        className="h-9 w-auto transition-transform duration-300 group-hover:-rotate-6"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.3rem] font-semibold">Makvion</span>
        <span className={`mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${variant === "green" ? "text-brand-500" : "text-gold-300"}`}>
          Technologies
        </span>
      </span>
    </Link>
  );
}
