export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rika Saito. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
