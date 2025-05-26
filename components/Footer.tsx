export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between xl:px-16 items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
          <div>
            <h3 className="text-xl font-bold mb-4">SoundVoyage</h3>
            <p className="text-gray-400">
              Discover the rich musical heritage of cultures around the world through interactive exploration and
              authentic sounds.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/favorites" className="hover:text-white transition-colors">
                  Favorites
                </a>
              </li>
              <li>
                <a href="/learn" className="hover:text-white transition-colors">
                  Learn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SoundVoyage. Exploring musical cultures worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
