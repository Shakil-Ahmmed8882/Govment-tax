import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TaxPayment = () => {

  const goTo = useNavigate();

  //Village correction form handler
  const handleVillageCorrection = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const villageData = Object.fromEntries(form);
    console.log(villageData);
    e.target.reset();
    toast.success("Edited");
    goTo("/main-dashboard/village");
  };

  return (
    <div className="hero min-h-screen bg-base-200">

      <form
        onSubmit={handleVillageCorrection}
        className="card-body w-[90%] lg:w-1/2 bg-white top-0">
        <h1 className="text-2xl md:text-4xl font-bold pb-2">কর পরিশোধ</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
              নাম
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 focus-within:outline-none border-b bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
              মন্তব্য
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered focus-within:outline-none"
            placeholder="Comment"></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold md:text-[14px] lg:text-[16px]">
              ওয়ার্ড:
            </span>
          </label>
          <input
            type="number"
            name="ward"
            placeholder="Ward"
            className="p-2 focus-within:outline-none border-b bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-green-500 text-white hover:bg-green-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaxPayment;
