import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="flex justify-end gap-x-80 gap-y-80 bg-violet-800 ">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            <ul>
                <li>Journey Types</li>
                <li>Login</li>
   
            </ul>
        </nav>
    )
}

