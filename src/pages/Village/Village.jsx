import Swal from "sweetalert2";
import Print from "./Print";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import TableHeading from "./TableHeading";
import { Link } from "react-router-dom";
import Pagination from "../shared/Pagination/Pagination";
// import { useState } from "react";
const Village = () => {
  const villageData = [
    {
      serialNo: 1,
      name: "সুপারির ভিটা (গবিন্দপুর)",
      ward: 2,
            comment: "Hello",
      action: "Edit Delete",
      type: "Residential",
    },
    {
      serialNo: 2,
      name: "নন্দির ভিটা (গবিন্দপুর)",
      ward: 2,
            comment: "Hello",
      action: "Edit Delete",
      type: "Business",
    },
    {
      serialNo: 3,
      name: "তামাকের তারি (গবিন্দপুর)",
      ward: 2,
            comment: "Hello",
      action: "Edit Delete",
      type: "Residential Tax Collection",
    },
    {
      serialNo: 4,
      name: "সবিন্দপুর",
      ward: 2,
            comment: "Hello",
      action: "Edit Delete",
      type: "User/Operator",
    },
    {
      serialNo: 5,
      name: "কুটিপাড়া (গোবিন্দপুর)",
      ward: 2,
            comment: "Hello",
      action: "Edit Delete",
      type: "",
    },
    {
      serialNo: 6,
      name: "জানপাড় গোবিন্দপুর)",
      ward: 2,
            comment: "Hello",
      action: "Edit Delete",
      type: "",
    },
    {
      serialNo: 7,
      name: "উত্তর বালাটা (গোবিন্দপুর)",
      ward: 2,
            comment: "Hello",
      action: "Edit Delete",
      type: "",
    },
    {
      serialNo: 8,
      name: "গোবিন্দপুর (একতা বাজার)",
      ward: 3,
            comment: "Hello",
      action: "Edit Delete",
      type: "",
    },
    {
      serialNo: 9,
      name: "খামার গোবিন্দপুর। মুন্সিপাড়া",
      ward: 3,
            comment: "Hello",
      action: "Edit Delete",
      type: "",
    },
    {
      serialNo: 10,
      name: "খামার গোবিন্দপুর (সালাম বাজার)",
      ward: 3,
            comment: "Hello",
      action: "Edit Delete",
      type: "",
    },
  ];

  //   handling delete event here
  const handleDelete = () => {
    // Delete pop-up
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  //  Paginiation contents count
  const totalItems = 100;

  return (
    <div className="overflow-x-auto">
      <div className="card-body">
        <div className="table-responsive">
          <div>
            {/* Village data start here */}
            <table className="table table-sm table-bordered no-footer">
              <TableHeading></TableHeading>
              <tbody>
                {villageData?.map((data, idx) => (
                  <tr key={idx} >
                    <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
                      {data.serialNo}
                    </td>
                    <td className="px-2 text-[10px] md:text-xl py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
                      {data.name}
                    </td>
                    <td className="px-2 py-1  sm:px-4 sm:py-2 md:px-6 md:py-3">
                      {data.ward}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
                      {data.comment}
                    </td>
                    <td className="flex gap-3 px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3">
                      <Link to="/main-dashboard/edit-village">
                        <button className=" px-1  md:px-3 text-white">
                          <AiFillEdit className="text-green-500 text-[18px] md:text-3xl"></AiFillEdit>
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete()}
                        className=" px-1  md:px-3 text-white">
                        <AiFillDelete className="text-[#ff5959] text-[18px] md:text-3xl"></AiFillDelete>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Print></Print>

        </div>
        <Pagination totalItems={totalItems}></Pagination>
      </div>
    </div>
  );
};

export default Village;
