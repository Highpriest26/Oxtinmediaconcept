import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow text-brand">404 Error</p>
      <h1 className="mt-4 font-display text-4xl font-black text-ink sm:text-6xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base text-muted sm:text-lg">
        The page or project you requested does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className={buttonClass("primary")}>
          Return Home
        </Link>
        <Link href="/projects" className={buttonClass("outline")}>
          View Projects
        </Link>
        <Link href="/services" className={buttonClass("outline")}>
          View Services
        </Link>
      </div>
    </div>
  );
}
