import { BsFillArrowRightCircleFill} from "react-icons/bs";
import "./dashboard.css";

const Dashboard = () => {
  const TaxData = [
    {
      user: "সকল গৃহস্ত",
      userData: "১৫৬৮৩",
    },
    {
      user: "সকল ব্যবসা",
      userData: "৩১১৮",
    },
    {
      user: "গৃহ্য কর",
      userData: "৬২৩৬০০",
    },
    {
      user: "ব্যবসা কর",
      userData: "বিস্তারিত ত",
    },
    {
      user: "গৃহস্থ কর আদায়",
      userData: "৬২৩৬০০",
    },
    {
      user: "ব্যবসা কর আদায়",
      userData: "৬২৩৬০০",
    },
    {
      user: "আজকের আদায়",
      userData: "৬২৩৬০০",
    },
    {
      user: "ব্যবহারকারী/অপারেটর",
      userData: "৬২৩৬০০",
    },
  ];

  return (
    <div className="p-8">
      <div className="gridLayout">
        {TaxData?.map((user, idx) => {
          // Define an array of background colors
          const colors = ["bg-[#17A2B8]", "bg-[#DC3545]", "bg-[#FFC107]"];

          // Use modulo operator to cycle through the colors
          const bgColor = colors[idx % colors.length];

          return (
            <div
              key={idx}
              className={`card  ${bgColor == 'bg-[#FFC107]'?'text-black':'text-white'} ${bgColor} space-y-8 shadow-xl`}>
              <div className="card-body space-y-3 min-h-[200px]">
                <h2 className="card-title  text-[22px] leading-9">{user.user}</h2>
                <p className=" text-[19px]">{user.userData}</p>
                <div className=" flex gap-2  items-center">
                  <button className=" text-[16px]"> বিস্তারিত</button>
                <BsFillArrowRightCircleFill className="text-[16px]"></BsFillArrowRightCircleFill>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
