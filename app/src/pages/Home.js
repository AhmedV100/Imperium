import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import HomeStruct from "../components/HomeStruct";

function Home() {
  // Function to change background color
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  // Change background color when component mounts
  useEffect(() => {
    changeBackgroundColor('#F9F9F9'); // Sets the initial background color to #FAFAFA
  }, []);

  return (
    <div>
      <NavBar />
      <HomeStruct />
      <Footer />
    </div>
  );
}

export default Home;
