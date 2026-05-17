export const Footer = () => {
  return (
    <footer className="border-t py-4">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-4">
        <div className="flex gap-6 text-sm text-muted">
          <a
            href="https://github.com/bmoya217"
            target="_blank"
            className="hover:text-hover"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/brandenmoya"
            target="_blank"
            className="hover:text-hover"
          >
            LinkedIn
          </a>

          <a href="mailto:bmoya217@gmail.com" className="hover:text-hover">
            Email
          </a>

          <a href="/resume.pdf" target="_blank" className="hover:text-hover">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};
