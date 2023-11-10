import { Link } from "react-router-dom";

const AddHousehold = () => {
  return (
    <div className="">
      <div className="flex justify-between px-5 py-5 bg-info">
        <h3 className="card-title d-inline-block">গৃহস্থ সংশোধন</h3>
        <Link
          to={"/main-dashboard/household"}
          className="btn btn-primary btn-md text-white text-lg font-semibold "
        >
          গৃহস্থ তালিকা
        </Link>
      </div>
      <form>
        <div className="grid mx-5 md:grid-cols-3">
          {/*  column */}
          <div className=" space-y-4">
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">গ্রাম:</span>
              </label>
              <select className="select font-semibold border-info text-base text-gray-500 max-w-xs w-full">
                <option disabled selected>
                  গবিন্দপুর
                </option>
                <option>Java</option>
                <option>Go</option>
              </select>
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">থানা প্রধানের নাম:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"মোছা: আয়শা বেগম"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পিতা/স্বামীর নাম:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"মোছা: আয়শা বেগম"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">হোল্ডিং নং:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"32900"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">বাড়ির জমির পরিমান:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের মোট সদস্য সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের অশিক্ষিত সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের মহিলা সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের বেকার সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">১৮ + বৎসর:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
          </div>

          {/*  column */}
          <div className=" space-y-4">
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ওয়ার্ড:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">খানা প্রধানের মোবাইল: :</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">জাতীয় পরিচয়পত্র নং:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পেশা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"কৃষি"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের শিক্ষিত সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের পুরুষ সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের কর্মজীবী সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">০-১৮ বৎসর:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">মোট পুরুষ ভোটার:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">মুক্তিযোদ্ধা সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
          </div>
          {/* column */}
          <div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">মোট মহিলা ভোটার:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের বিধবা সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের প্রতিবন্ধী সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"5"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>

            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">পরিবারের তালাকপ্রাপ্ত সংখ্যা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ইউপি থেকে প্রাপ্ত সুবিধা:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ল্যাট্রিন:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">
                  আবাদি জমির পরিমান(বাড়ি ভিটা ছাড়া):
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">বাড়ির মূল্য:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
            {/* row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ইউপি কর্তৃক ধার্য্য কৃত কর:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"012568973"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">ধর্ম:</span>
              </label>
              <select className="select font-semibold border-info text-base text-gray-500 max-w-xs w-full">
                <option disabled selected>
                  ইসলাম ধর্ম
                </option>
                <option>হিন্দু ধর্ম</option>
                <option>Go</option>
              </select>
            </div>

            {/* left row */}
            <div className="flex items-center">
              <label className="label">
                <span className="font-bold">নলকূপ:</span>
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-group-1"
                    defaultChecked=""
                  />
                  <label
                    htmlFor="hs-radio-group-1"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    আছে
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-group-2"
                  />
                  <label
                    htmlFor="hs-radio-group-2"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    নাই
                  </label>
                </div>
              </div>
            </div>
            {/* left row */}
            <div className="flex items-center">
              <label className="label">
                <span className="font-bold">বাড়ির মালিকানা:</span>
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-group-1"
                    defaultChecked=""
                  />
                  <label
                    htmlFor="hs-radio-group-1"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    নিজস্ব
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-group-2"
                  />
                  <label
                    htmlFor="hs-radio-group-2"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    ভাড়াকৃত
                  </label>
                </div>
              </div>
            </div>
            {/* left row */}
            <div className="flex items-center">
              <label className="label">
                <span className="font-bold">বাড়ির ধরন:</span>
              </label>
              <div className="flex gap-x-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-group-1"
                    defaultChecked=""
                  />
                  <label
                    htmlFor="hs-radio-group-1"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    কাঁচা
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="hs-radio-group"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-group-2"
                  />
                  <label
                    htmlFor="hs-radio-group-2"
                    className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                  >
                    পাকা
                  </label>
                </div>
              </div>
            </div>

            {/* left row */}
            <div className="form-control">
              <label className="label">
                <span className="font-bold">এসেসমেন্ট অনুযায়ী কর:</span>
              </label>
              <input
                type="text"
                placeholder=""
                defaultValue={"500"}
                className="input font-semibold border-info text-base text-gray-500 max-w-xs w-full input-bordered"
                required
              />
            </div>
          </div>
        </div>
        <div className="text-center ">
          <input type="submit" className="btn max-w-xs w-full  btn-secondary" />
        </div>
      </form>
    </div>
  );
};

export default AddHousehold;
