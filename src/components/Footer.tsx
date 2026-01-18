import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--primary)' }} className="text-white">
      <div className="container mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {/* Kanzlei Info */}
          <div>
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: 'var(--gold)' }}
            >
              Advokatur-KuK
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ihre kompetente Rechtsberatung in allen Rechtsfragen.
            </p>
            <div className="text-gray-300 space-y-3">
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
            </div>
            <div className="text-gray-300 space-y-3 mt-6">
              <p>Tel: +49 123 456789</p>
              <p>E-Mail: info@advokatur-kuk.de</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: 'var(--gold)' }}
            >
              Navigation
            </h3>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/kanzlei"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kanzlei
                </Link>
              </li>
              <li>
                <Link
                  href="/rechtsgebiete"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Rechtsgebiete
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: 'var(--gold)' }}
            >
              Rechtliches
            </h3>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t mt-16 pt-10"
          style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Advokatur-KuK. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-400 text-sm">
              Mit Sorgfalt für Sie da.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
