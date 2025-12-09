function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">

        {/* About / Logo */}
        <div>
          <h2 className="text-xl font-bold mb-4">LOGO</h2>
          <p className="text-gray-400 text-sm">
            Providing high-quality web solutions to help businesses grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">Clients</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: info@example.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 1234567890</p>
          <p className="text-gray-400 text-sm">Address: 123 Main St, City</p>
        </div>

      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
