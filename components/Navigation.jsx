import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
    return (
        <nav>
            <div className="wrapper">
                <a id="logo" href="https://k2integris.com">
                    <Image src="/images/logo.png" width={79.5} height={47} alt="K2Integris Logo" />
                </a>
            </div>

            <div className="wrapper">
                <a id="text-logo" href="https://k2integris.com">
                    K2INTEGRIS
                </a>
            </div>

            <ul className="wrapper">
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="">
                        Work
                    </Link>
                </li>
                <li>
                    <Link href="">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;