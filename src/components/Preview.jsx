import React from "react";
import video from "../assets/preview.mp4";
import logo from "../assets/logo.png";

export default function Preview() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"/>
      <div className="relaitive z-20 flex h-screen flex-col justify-end pd-20">
        <img src={logo} alt="Reastaura"  className="w-full p-4"/>
        <p className="p-10 text-lg tracking-tighter text-white">Moscow</p>
      </div>
    </section>
  );
}
