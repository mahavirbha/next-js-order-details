import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 hidden md:flex items-center justify-between gap-4">
      <div className="flex items-center justify-between w-full md:w-auto gap-6">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
          <Image src="/logo.svg" alt="MedCart Logo" width={32} height={32} className="h-8 w-auto" />
        </div>
        <div className="text-xs text-gray-600 border-l pl-4 hidden sm:block">
          <div className="font-semibold">Delivery to</div>
          <div className="flex items-center gap-1">
            Bengaluru, 560102
            <Image src="/dropdown.svg" alt="Change Location" width={12} height={7} />
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-xl w-full">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for Medicines or Health Products" 
            className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 px-4 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <span className="absolute right-3 top-2.5">
             <Image src="/search.svg" alt="Search" width={16} height={16} />
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        <button className="flex items-center gap-1 hover:text-[#60096A]">
          <Image src="/login.svg" alt="Login" width={14} height={14} /> Login
        </button>
        <button className="flex items-center gap-1 hover:text-[#60096A]">
          <Image src="/cart.svg" alt="Cart" width={16} height={16} /> Cart
        </button>
        <button className="flex items-center gap-1 hover:text-[#60096A] font-bold">
          <Image src="/seller.svg" alt="Seller" width={14} height={14} /> Become a seller
        </button>
        <button className='bold'>⋮</button>
      </div>
    </nav>
  );
}
