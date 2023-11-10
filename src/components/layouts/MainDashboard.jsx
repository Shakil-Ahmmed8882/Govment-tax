
// import TopNavBar from "../Dashboard/TopNavBar";
import DashboardRoutes from "../Dashboard/DashboardRoutes";
import MetaStyle from "../Dashboard/MetaStyle";
import { Outlet } from "react-router-dom";

const MainDashboard = () => {
  /// i am adding the new line
  return (
    <>
      {/* component */}
      <MetaStyle></MetaStyle>
      {/* you can clone or fork the repo if you want */}
      {/* https://github.com/bluebrown/tailwind-zendesk-clone   */}
      <div className="h-full w-full  flex overflow-hidden antialiased text-gray-800 bg-white">
        {/* section body side nav */}
        <div className="flex-1 flex flex-col">
          {/* Dashboard routers */}
          <main className=" flex-grow flex min-h-0 border-t">
            <section className="hidden md:flex flex-col p-4 w-full max-w-sm flex-none  min-h-0 overflow-auto">
              <DashboardRoutes></DashboardRoutes>
            </section>
            <section className="flex-1 bg-[#f9fff4]">
              <Outlet></Outlet>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
export default MainDashboard;
