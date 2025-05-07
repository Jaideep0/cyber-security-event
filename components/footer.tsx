import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="blob-primary p-4 inline-block mb-4">
              <h3 className="text-lg font-bold hand-drawn-text">SWOCTS</h3>
            </div>
            <p className="text-foreground">
              Connecting students, graduates, and professionals in the
              cybersecurity industry.
            </p>
          </div>

          <div>
            <div className="blob-primary p-4 inline-block mb-4">
              <h3 className="text-lg font-bold hand-drawn-text">QUICK LINKS</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary transition-colors font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#categories"
                  className="text-foreground hover:text-primary transition-colors font-bold"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="blob-primary p-4 inline-block mb-4">
              <h3 className="text-lg font-bold hand-drawn-text">CONTACT</h3>
            </div>
            <address className="not-italic text-foreground">
              <p>Open Cyber Sec YQG</p>
              <p>Windsor-Essex, Ontario</p>
              <p className="mt-2">
                <a
                  href="mailto:singh5s3@uwindsor.ca"
                  className="hover:text-primary transition-colors font-bold"
                >
                  singh5s3@uwindsor.ca
                </a>
                <br />
                <a
                  href="mailto:singh8q3@uwindsor.ca"
                  className="hover:text-primary transition-colors font-bold"
                >
                  singh8q3@uwindsor.ca
                </a>
                <br />
                <a
                  href="mailto:singh3b3@uwindsor.ca"
                  className="hover:text-primary transition-colors font-bold"
                >
                  singh3b3@uwindsor.ca
                </a>
                <br />
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-black text-center text-foreground">
          <p>
            &copy; {new Date().getFullYear()} Southwestern Ontario Cyber Talent
            Showcase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
