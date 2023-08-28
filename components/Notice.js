import Link from "next/link";

export function Notice() {
  return (
    <div className="bg-red-500 p-4 text-center text-white hover:underline">
        <Link href="https://www.lashmono.space/">
            No longer maintained in favor to my new content (I don't really like this).
        </Link>
    </div>
  );
}
