import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Client from "./Client";

const Clients = () => {
  const [clients,setClients] = useState([])
  useEffect(()=>{
    fetch('/clients.json')
    .then(res=> res.json())
    .then(data => setClients(data.clients))
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
            clients?.map((client,idx) => <Client key={idx} client={client}></Client>)
          }
        </table>
      </div>
    );
};
export default Clients;