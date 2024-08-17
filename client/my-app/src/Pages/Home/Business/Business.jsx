import React, { useEffect, useState } from "react";
import SingleBusiness from "./SingleBusiness";

const Business = () => {
  const [data, setData] = useState([]);
  const [seemore, setSeemore] = useState(false);
  useEffect(() => {
    fetch("https://handicraft-bd.vercel.app/business")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);


  const handleMore = () => {
    setSeemore(!seemore);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-center text-[3.5rem] font-bold mb-4">
        Similar Business Pages
      </h1>
      <hr className="w-1/2 mb-16 bg-slate-700" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {seemore ? data.map((item, index) => (
            <SingleBusiness key={index} item={item} />
          )) : data.slice(0,6).map((item, index) => <SingleBusiness key={index} item={item} />)

        }
      </div>
      <button
        onClick={handleMore}
        className="btn mx-auto mt-8 btn-neutral hover:text-orange-400 text-lg"
      >
        {" "}
        {seemore ? "See Less" : "See More"}{" "}
      </button>
    </div>
  );
};

export default Business;
