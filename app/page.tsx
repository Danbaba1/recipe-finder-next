import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Recipe finder</h1>
      <Link href="/recipes">Browse recipes</Link>
    </>
  );
}
