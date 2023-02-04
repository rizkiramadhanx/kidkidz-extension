import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (formData.username === "oji" && formData.password === "123") {
      chrome.storage.sync.set({ myValue: true }, function () {
        console.log("set");
      });
    }
  };

  return (
    <div className="flex w-[350px] flex-col items-center justify-center bg-slate-500 min-h-[200px]">
      <form className="w-3/4 flex flex-col gap-2" onSubmit={onSubmit}>
        <div className="flex flex-col gap-1">
          <label className="text-white">Username :</label>
          <input type="text" name="username" className="rounded-md" onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white">Password :</label>
          <input type="text" name="password" className="rounded-md" onChange={handleChange} />
        </div>
        <button type="submit" className="bg-green-300 rounded-md py-[1px]">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
