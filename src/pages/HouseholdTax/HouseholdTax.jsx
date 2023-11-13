import { useState } from "react";
import getTaxSubmissionDate from "../Tax-payment/Date";
import pay_tax_icon from '../../../public/icons/pay-tax.png'
import { months } from "./data/data";
import { amounts } from "./data/data";
import Swal from "sweetalert2";
const TaxPaymentForm = () => {
  // months for users to select



  // state to store name,date,month
  const [userName, setUserName] = useState("");
  const [startMonth, setStartMonth] = useState("January");
  const [endMonth, setEndMonth] = useState("March");
  const [amount,setAmount] = useState(100);
  const submissionDate = getTaxSubmissionDate();

  // getting taxpayer name
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  // starting month to pay tax
  const handleStartMonthChange = (event) => {
    setStartMonth(event.target.value);
  };

  // end month in range
  const handleEndMonthChange = (event) => {
    setEndMonth(event.target.value);
  };

  // end month in range
  const handleAmount  = (event) => {
    setAmount(event.target.value);
  };

  // organizing taxpayer information
  const taxesInfo = {
    name: userName,
    amount,
    phone: "3434347",
    submissionDate,
    monthsRange: {
      startMonth: startMonth.toLowerCase(),
      endMonth: endMonth.toLowerCase(),
    },
  };
  const handleTaxPayment = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Payment Received',
      text: 'Thank you for your tax payment. Your transaction is successful!',
      footer: '<a href="#">Print Payment Confirmation</a>'
    });
    
    console.log("Taxes Info:", taxesInfo);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <form
          onSubmit={handleTaxPayment}
          className="card-body w-[90%] lg:w-1/2 relative bg-white top-0">
            <div className=" bg-[#ffffff] border overflow-hidden border-5 rounded-full absolute p-2 -top-8 left-[45%]">
            <img className=""  src={pay_tax_icon} alt="" />

            </div>
            <h1 className="text-2xl mt-8 md:text-3xl text-center font-bold pb-2 ">কর পরিশোধ</h1>
          <div className="1/4 mx-auto space-y-8">
          {/* 1st colum */}
          <div className="flex gap-3 flex-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                  নাম
                </span>
              </label>

              <input
                type="text"
                name="name"
                value={userName}
                onChange={handleUserNameChange}
                placeholder="Name"
                className="p-2 focus-within:outline-none w-[80%] border-b bordered"
                required
              />
            </div>
            {/* Amount */}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
                পরিমাণ 
                </span>
              </label>
              <select  className="w-32 py-1" value={amount} onChange={handleAmount}>
              {amounts.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            </div>
          </div>

          {/* 2cnd column */}
          <div className="flex gap-3">
          {/* Started month */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold mb-1 md:text-[14px] lg:text-[16px]">
                শুরু মাস নির্বাচন করুন
              </span>
            </label>
            <select value={startMonth} onChange={handleStartMonthChange} className="p-1">
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* End Month */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold mb-1 md:text-[14px] lg:text-[16px]">
                শেষ মাস নির্বাচন করুন
              </span>
            </label>
            <select value={endMonth} onChange={handleEndMonthChange}>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

          </div>
          </div>

          </div>
          <div className="form-control">
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#57e557] text-white hover:bg-[#07b107]">
                Save
              </button>
            </div>

          {/* Submission date */}
          </div>

          {/* End Month */}
        </form>
      </div>
    </>
  );
};

export default TaxPaymentForm;
