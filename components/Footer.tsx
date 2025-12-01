import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#522260] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Us Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase">About us</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:opacity-70 transition-opacity">Home</Link></li>
              <li><Link href="/about" className="hover:opacity-70 transition-opacity">About Us</Link></li>
              <li><Link href="/blog" className="hover:opacity-70 transition-opacity">Blog</Link></li>
              <li><Link href="/contact" className="hover:opacity-70 transition-opacity">Contact us</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/size-guide" className="hover:opacity-70 transition-opacity">Size Guide</Link></li>
              <li><Link href="/shop" className="hover:opacity-70 transition-opacity">Shop All</Link></li>
              <li><Link href="/faq" className="hover:opacity-70 transition-opacity">FAQs</Link></li>
              <li><Link href="/returns" className="hover:opacity-70 transition-opacity">Return</Link></li>
              <li><Link href="/carriers" className="hover:opacity-70 transition-opacity">Carriers</Link></li>
            </ul>
          </div>

          {/* Privacy Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase">Privacy Policy</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:opacity-70 transition-opacity">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:opacity-70 transition-opacity">Terms of Service</Link></li>
              <li><Link href="/shipping" className="hover:opacity-70 transition-opacity">Shipping Policy</Link></li>
              <li><Link href="/return-policy" className="hover:opacity-70 transition-opacity">Return Policy</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase">Contact us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Address:</p>
                <p className="text-sm opacity-90">
                  Kanna road 1.10.32 of Malorum, USA<br />
                  Cicero in 45 BC
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Email us:</p>
                <a href="mailto:info@placeholder@gmail.com" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  info@placeholder@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2024. Pure hug
          </p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 hover:opacity-70 transition-opacity" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 hover:opacity-70 transition-opacity" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 hover:opacity-70 transition-opacity" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c5.302 0 9.917-3.158 11.877-7.68-.086-.702-.018-1.59.205-2.32.225-.785 1.462-9.77 1.462-9.77s-.373-.74-.373-1.836c0-1.72.997-3.005 2.237-3.005 1.055 0 1.565.792 1.565 1.74 0 1.06-.675 2.64-1.023 4.105-.29 1.23.618 2.234 1.84 2.234 2.208 0 3.705-2.595 3.705-5.68 0-2.347-1.59-4.08-4.38-4.08-3.008 0-4.77 2.254-4.77 4.58 0 1.062.405 2.2.912 2.82a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.697-2.436-2.888-2.436-4.65 0-3.784 2.748-7.26 7.92-7.26 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12 24.001c6.625 0 12-5.373 12-12S18.627.001 12 .001z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 hover:opacity-70 transition-opacity" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

