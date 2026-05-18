export const Footer = () => {
  return (
    <footer className="w-full border-t border-border">
      <div className="responsive-layout mx-auto max-w-5xl items-center justify-between px-6 py-8 text-sm text-muted">
        {/* left */}
        <div className="text-center md:text-left">
          <p className="mt-1">
            Full Stack Developer · React · TypeScript · Next.js · GraphQL
          </p>
        </div>

        {/* right */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="https://github.com/bmoya217"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/branden-moya"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>

          <a
            href="mailto:bmoya217@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};
