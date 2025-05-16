export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/50 backdrop-blur-md py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300">
              Bakchod Group
            </span>
          </h2>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            A digital memory vault for our squad. Upload photos and videos to preserve our best moments together.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <SocialLink label="Instagram" />
            <SocialLink label="YouTube" />
            <SocialLink label="WhatsApp" />
          </div>

          <div className="text-white/40 text-sm">© {currentYear} Bakchod Group. All memories reserved.</div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="px-4 py-2 bg-gray-800 rounded-full text-white/80 text-sm hover:bg-gray-700 transition-colors"
    >
      {label}
    </a>
  )
}
