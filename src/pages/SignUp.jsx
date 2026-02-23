import { useState } from "react";

export default function SignUp(){

  const [contact,setContact]=useState("");
  const [otp,setOtp]=useState("");

  const sendOtp = async ()=>{
    await fetch("http://localhost:5000/api/auth/send-otp",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify({ contact })
    });
    alert("OTP sent (check backend terminal)");
  };

const verifyOtp = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact, otp })
    });

    const data = await res.json();
    console.log("VERIFY RESPONSE:", data); // ⭐ debug

    if (!data.token) {
      alert("OTP verification failed");
      return;
    }

    // ⭐ Save login
    localStorage.setItem("token", data.token);

    // ⭐ Redirect to dashboard
    window.location = "/";
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};
  return(
    <div className="flex flex-col gap-4 p-10">

      <button className="bg-red-500 text-white p-3 rounded">
        Continue with Google (demo)
      </button>

      <input
        placeholder="Email or Mobile"
        value={contact}
        onChange={(e)=>setContact(e.target.value)}
        className="border p-2"
      />

      <button onClick={sendOtp} className="bg-blue-500 text-white p-2">
        Get OTP
      </button>

      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e)=>setOtp(e.target.value)}
        className="border p-2"
      />

      <button onClick={verifyOtp} className="bg-green-600 text-white p-2">
        Sign In
      </button>

    </div>
  )
}