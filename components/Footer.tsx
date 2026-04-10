export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="w-full px-6 lg:px-12 py-8">
        <div className="flex justify-between items-center">
          <p className="text-xs text-[#6b6460]">© {currentYear} Ajay Panwar</p>
          <p className="text-xs text-[#6b6460]">Gurugram, India</p>
        </div>
      </div>
    </footer>
  )
}
