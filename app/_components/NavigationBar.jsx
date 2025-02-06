import Link from "next/link";
import Container from "./Container";

export default function NavigationBar() {
  return (
    <nav className="py-6">
      <Container className="flex items-center justify-between">
        <div>
          <img src="/skillup-logo.svg" alt="" />
        </div>

        <ul className="flex gap-[320px]">
          <div className="flex gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </div>

          <div className="flex gap-6">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Create account</Link>
            </li>
          </div>
        </ul>
      </Container>
    </nav>
  );
}
