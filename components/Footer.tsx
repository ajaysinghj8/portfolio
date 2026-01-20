export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-space-900 border-t border-primary-500/20 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300">
            © {currentYear} Ajay Panwar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with Next.js and Tailwind CSS • Exploring the stars ✨
          </p>
        </div>
      </div>
    </footer>
  )
}
