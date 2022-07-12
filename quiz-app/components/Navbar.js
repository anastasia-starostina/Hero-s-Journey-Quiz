import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <button> Journey Type</button>
      <button>Login</button>
    </>
  );
}
