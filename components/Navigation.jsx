import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
    return (
        <nav>
            <div className="wrapper">
                <div className="logo-wrapper">
                    <Link id="logo" href="https://k2integris.com">
                        <Image src="/images/logo.png" width={29} height={17} alt="K2Integris Logo" />
                    </Link>
                    <Link id="text-logo" href="https://k2integris.com">
                        K2INTEGRIS
                    </Link>
                </div>

                <button id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navigation;