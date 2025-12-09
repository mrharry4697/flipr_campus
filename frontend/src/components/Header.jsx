function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          LOGO
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Projects</a>
          <a href="#" className="hover:text-blue-600">Clients</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;
