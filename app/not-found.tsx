import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell py-28">
      <p className="kicker">Not found</p>
      <h1 className="serif mt-4 text-[clamp(2.4rem,6vw,4rem)] leading-none">
        This page is not in the archive.
      </h1>
      <p className="measure mt-6 text-ink-soft">
        The address may have changed. Return to the family archive to continue.
      </p>
      <p className="mt-8">
        <Link href="/" className="editorial-link">
          Return home
        </Link>
      </p>
    </div>
  );
}
