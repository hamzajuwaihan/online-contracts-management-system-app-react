import React from "react";
import Header from "./Header";
import Counter from "../landing/Counter";
import About from "../landing/About";
import { Employees } from "../landing/Employees";
import Footer from "../landing/Footer";

function AboutUs() {
  return (
    <>
      <Header />
      <Counter />
      <About />
      <Employees />
      <Footer />
    </>
  );
}

export default AboutUs;
