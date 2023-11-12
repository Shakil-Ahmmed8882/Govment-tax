import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Client from "./Client";
import BASE_URL from "../../../api/api";

const Clients = () => {
  const [clients,setClients] = useState([])
  useEffect(()=>{
    fetch(BASE_URL + "/collection/house")
      .then((res) => res.json())
      .then((data) => setClients(data));
  },[])

    return (
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>ক্রমিক </th>
              <th>উপজেলা </th>
              <th>ইউনিয়ন</th>
              <th>গ্রাম</th>
              <th>ওয়ার্ড</th>
              <th>নাম</th>
              <th>মোবাইল</th>
              <th>হোল্ডিং নং</th>
              <th>বাড়ির মূল্য</th>
              <th>এসেসমেন্ট কর</th>
              <th>ইউপি কর</th>
              <th>একশন</th>
            </tr>
          </thead>
          {
            clients?.map((client) => <Client key={client._id} client={client}></Client>)
          }
        </table>
      </div>
    );
};
export default Clients;