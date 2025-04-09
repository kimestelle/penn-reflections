import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Penn Reflections</h1>
        <div className="space-x-4">
          <Link href="/" className="nav text-blue-600 hover:underline">
            Video
          </Link>
          <Link href="/script" className="nav text-blue-600 hover:underline">
            Script
          </Link>
          <Link href="/quiz" className="nav text-blue-600 hover:underline">
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
