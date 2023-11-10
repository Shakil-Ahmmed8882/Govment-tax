import { useState } from "react";

const Setting = () => {
  const [formData, setFormData] = useState({
    site_name: "",
    description: "",
    address: "",
    state: "",
    postal_code: "",
    contact_no: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center mt-10 lg:mt-16">
      <div className="max-w-lg p-6 rounded-lg bg-white shadow-2xl">
        <h3 className="text-4xl font-semibold text-center w-full">
          General Setting
        </h3>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex">
              <div>
                <label
                  htmlFor="site_name"
                  className="text-lg font-semibold text-gray-800 mr-2"
                >
                  Site Name:
                </label>
                <input
                  type="text"
                  name="site_name"
                  id="site_name"
                  value={formData.site_name}
                  onChange={handleChange}
                  className="input input-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="contact_no"
                  className="text-lg font-semibold text-gray-800 mr-2"
                >
                  Contact No:
                </label>
                <input
                  type="text"
                  name="contact_no"
                  id="contact_no"
                  value={formData.contact_no}
                  onChange={handleChange}
                  className="input input-primary"
                />
              </div>
            </div>

            <div className="flex">
              <div>
                <label
                  htmlFor="state"
                  className="text-lg font-semibold text-gray-800 mr-2"
                >
                  Upazila Name:
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="input input-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="postal_code"
                  className="text-lg font-semibold text-gray-800 mr-2"
                >
                  Union Name:
                </label>
                <input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  value={formData.postal_code}
                  onChange={handleChange}
                  className="input input-primary"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="description"
                className="text-lg font-semibold text-gray-800 mr-2"
              >
                Description:
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="input input-primary"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="address"
                className="text-lg font-semibold text-gray-800 mr-2"
              >
                Address:
              </label>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="input input-primary"
              />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full hover:bg-primary-dark">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
