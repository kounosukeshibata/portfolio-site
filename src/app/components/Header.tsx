import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black py-5">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white">
          <Link href="/">YK Room</Link>
        </h1>
        <ul className="flex gap-3">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/works" className="text-white">
              Works
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
