export function Footer() {
  return (
    <footer className="flex justify-center border-t px-6 py-4">
      <div className="container flex flex-col justify-between gap-4 sm:flex-row">
        <div className="order-last flex flex-col text-center sm:order-first sm:text-start">
          <p className="text-foreground/75">
            <span className="font-semibold text-green-500">Cavescape</span>{' '}
            <span>- 2025 © All rights reserved</span>
          </p>
          <p className="order-first mb-4 text-foreground/75 sm:order-last sm:mb-0">
            <a
              href="https://rivo.gg/"
              className="hover:text-foreground hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rivo
            </a>{' '}
            <span>•</span>{' '}
            <a
              href="https://www.youtube.com/channel/UCa_4aXQV2MFMvF_Kr0PlbfQ"
              className="hover:text-foreground hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gargantua
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="/legal-notice"
            className="text-foreground/75 hover:text-foreground hover:underline"
          >
            Legal notice
          </a>
        </div>
      </div>
    </footer>
  )
}
