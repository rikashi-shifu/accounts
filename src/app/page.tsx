"use client";
import React, { useState } from "react";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  if (isLogin) {
    return <div>Projects</div>;
  } else {
    return <div>Landing page</div>;
  }
};

export default Home;
