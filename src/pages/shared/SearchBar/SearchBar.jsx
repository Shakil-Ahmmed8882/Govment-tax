const SearchBar = () => {
    return (
      <div className="flex border bg-white items-center m-3 rounded-lg py-5 px-5 gap-5">
        <select className="select select-secondary outline-none border-none  focus-within:outline-none p-5 select-sm">
          <option disabled selected>
            10
          </option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
        </select>
        <input
          type="text"
          placeholder="Search holding"
          name="phone"
          className="input input-bordered p-5 outline-none border-none  focus-within:outline-none input-secondary input-sm w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Search house"
          name="phone"
          className="input input-bordered outline-none border-none  focus-within:outline-none p-5 input-secondary input-sm w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Search Nid "
          name="nid"
          className="input input-bordered p-5 outline-none border-none  focus-within:outline-none input-secondary input-sm w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Search Mobile"
          name="holding"
          className="input  input-bordered p-5  outline-none border-none  focus-within:outline-none input-sm w-full max-w-xs"
        />
        <input
          type="submit"
          value={"search"}
          className="btn outline-none border-none  focus-within:outline-none bg-accentClr text-white hover:bg-hoverClr"
        />
      </div>
    );
};
export default SearchBar;