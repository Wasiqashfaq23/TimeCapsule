import { FaClockRotateLeft } from "react-icons/fa6";
function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-8 h-15 flex items-center">
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <FaClockRotateLeft className="text-gray-900 text-xl" />
        <span className="font-serif text-[18px] tracking-tight text-gray-900">
          Time<em>capsule</em>
        </span>
      </a>
    </nav>
  );
}
export default Navbar