// import TopNavBar from "../Dashboard/TopNavBar";
import { useState } from "react";
import DashboardRoutes from "../Dashboard/DashboardRoutes";
import { Outlet } from "react-router-dom";
import right_arrow from '../../../public/icons/right-arrow.png'
import left_arrow from '../../../public/icons/left-arrow.png'

const MainDashboard = () => {
  /// i am adding the new line
  const [reveal,setReveal] = useState(true)

  const handleReveal = () =>{
    setReveal(!reveal)
  }
  return (
    <>
      {/* component */}

      <div className="h-full w-full  flex overflow-hidden antialiased text-gray-800 bg-white">
        {/* section body side nav */}
        <div className="flex-1 flex flex-col">
          {/* Dashboard routers */}
          <main className=" flex-grow flex min-h-0 border-t relative">
          {
           reveal? <img className="w-6 h-9 hidden md:block my-1 cursor-pointer absolute left-[300px] top-0" src={left_arrow} alt="" onClick={handleReveal} />:
             <img className="w-6 h-9 left-3 absolute hidden md:block cursor-pointer" src={right_arrow} alt="" onClick={handleReveal}/>

          }
            
            <section className={` ${reveal?'flex':'hidden'} transition-all flex-col p-4 w-full max-w-sm flex-none   min-h-0 overflow-auto`}>
              <DashboardRoutes></DashboardRoutes>
            </section>
            <section className="flex-1 bg-[#f8fff3]">
              <Outlet></Outlet>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
export default MainDashboard;
