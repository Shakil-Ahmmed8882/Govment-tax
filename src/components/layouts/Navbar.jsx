
const Navbar = () => {
     return (
      <div className="w-full navbar bg-[#5cb904] text-white">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className=" cursor-pointer  absolute right-2 w-7 h-7"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex gap-3 flex-1 px-2 mx-2">
          <img className="w-[40px]" src="https://laxmipurup.uptaxs.com/public/uploaded/logo-bd.png" alt="" />
          <p >১ নং লক্ষীপুর ইউনিয়ন পরিষদ</p>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            {/* Navbar menu content here */}
            <li>
              <a>Navbar Item 1</a>
            </li>
            <li>
              <a>Navbar Item 2</a>
            </li>
          </ul>
        </div>
      </div>     )
};

export default Navbar;



