
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Error404() {
    return <section>
        <div className="p-5 m-5 d-flex flex-column align-items-center">
            <h1 className="display-3 fw-bold">404</h1>
            <div className="text-center fs-5">Oops! We can&apos;t find this page.</div>

            <Link href="/"><Button variant="dark" className="mt-3">Return Home</Button></Link>
        </div>
    </section>;
}