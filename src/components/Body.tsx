import axios from "axios";
import React, { useEffect, useState } from "react";

type TData = {
  title: string;
};

function Body() {
  const [data, setData] = useState<TData | null>(null);

  const fetchData = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos/1");

    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="py-5">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center justify-center gap-2">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg"
            className="w-[50px] rounded-full"
          />
          <div>
            {data && <p className="text-lg font-semibold uppercase">Hello {data.title},</p>}
            <p className="font-bold text-orange-400">Good Evening !!!</p>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOcmLN8L2HWAVnzuXJPpbsyQwRWdvbQLslxsBmitKhQ&s"
          className="w-[50px]"
        />
      </div>
      <div className="mt-5 px-2">
        <ul>
          <li>⛏️ 210 kata tersensor</li>
          <li>⛏️ 200 website terlarang terlidungi</li>
          <li>⛏️ 11 gambar nsfw tersensor dengan baik</li>
        </ul>
      </div>
      <div className="mt-5 flex justify-between px-2">
        <div className="flex items-center">
          <input type="radio" />
          <label>mode orang tua</label>
        </div>
      </div>
    </div>
  );
}

export default Body;
