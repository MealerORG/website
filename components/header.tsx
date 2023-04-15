import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header(props: any) {
    const [offcanvas, setOffcanvas] = useState(false);
    const router = useRouter();

    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Download", href: "/download" },
        { name: "Contact Us", href: "/contact" },
    ];

    return <>
        <Navbar variant="dark" expand="sm" className={`p-3 sticky-top ${props.className ?? ""}`}>
            <Link href="/" passHref legacyBehavior>
                <Navbar.Brand className="py-0 d-flex align-items-center">
                    <Image src="/img/logo.png" alt="Mealer Logo" width="36" height="36" />
                    <div className="fs-4 ms-2 mb-0">Mealer</div>
                </Navbar.Brand>
            </Link>

            <Navbar.Toggle onClick={() => setOffcanvas(true)}/>

            <Navbar.Offcanvas show={offcanvas} placement="end" className="offcanvas">
                <Offcanvas.Header>
                    <Offcanvas.Title>Pages</Offcanvas.Title>
                    <Button className="btn-close" variant="" onClick={() => setOffcanvas(false)}></Button>
                </Offcanvas.Header>
                
                <Offcanvas.Body className="justify-content-end">
                    <Nav>
                        {links.map(({href, name}, index) => (
                            <Link className={`nav-link ${router.pathname === href ? "active" : ""}`}
                            href={href} key={index} onClick={() => setOffcanvas(false)}>
                                {name}
                            </Link>
                        ))}
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    </>;
}