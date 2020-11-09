import Link from 'next/link';

const Navbar = () =>
{
    return (
        <nav className="red">
            <div className="nav-wrapper">
                <div className="container">
                    <Link href='/'>
                        <a>
                            Note App
                </a>
                    </Link>
                    <ul className="right">
                        <li>
                            <Link href='/'>
                                <a>
                                    Notes
                        </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/create-note'>
                                <a>
                                    Create Note
                        </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
