import { NavLink } from "react-router-dom";
import dashboard from "/icons/dashboard.png";
import setting from "/icons/setting.png";
import village from "/icons/village.png";
import household from "/icons/househld.png";
import tax from "/icons/tax.png";
import business from "/icons/business.png";
import user from "/icons/user.png";


 const data =  [
    { to: "/main-dashboard/dashboard", icon: dashboard, text: "ড্যাশবোর্ড" },
    { to: "/main-dashboard/setting", icon: setting, text: "সেটিংস" },
    { to: "/main-dashboard/village", icon: village, text: "গ্রাম" },
    { to: "/main-dashboard/household", icon: household, text: "গৃহস্থ" },
    { to: "/main-dashboard/business", icon: business, text: "ব্যবসা" },
    { to: "/main-dashboard/household-tax", icon: tax, text: "গৃহস্থ কর আদায়" },
    { to: "/main-dashboard/business-tax", icon: tax, text: "ব্যবসা কর আদায়" },
    { to: "/main-dashboard/operator", icon: user, text: "ব্যবহারকারী/অপারেটর" },
  ]



const DashboardRoutes = () => (
    <ul className=" ">
    <header className="flex-none flex h-16 border-t px-4 w-full items-center">
      <h1 id="page-caption" className="font-semibold text-4xl">
        Dashboard
      </h1>
    </header>
    {data.map((item, index) => (
      <NavLink
        key={index}
        to={item.to}
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
      >
        <article
          tabIndex={0}
            className="cursor-pointer custom-shadow items-center rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-l-green-400 hover:border-2 border-2 border-transparent focus:outline-none hover:bg-green-50"
        >
          <span className="flex-none pt-1 pr-2">
            <img className="rounded-md w-5 md:w-7" src={item.icon} alt={item.text} />
          </span>
          <div className="flex-1">{item.text}</div>
        </article>
      </NavLink>
    ))}
  </ul>
);

export default DashboardRoutes;
