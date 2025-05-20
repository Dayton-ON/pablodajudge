"use client";

import { useState, ChangeEvent,} from "react";
import React from "React";
import "~/styles/globals.css";

export default function RootLayout() {

    const [Calc1, setNumber] = useState<number>(0); // To track the input for NUMERS
    const [Calc2, setNumber2] = useState<number>(0); // To track the input for the second NUMBERS

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
      setNumber(e.target.valueAsNumber);
    };

    const handleNumberChange2 = (e: ChangeEvent<HTMLInputElement>) => {
      setNumber2(e.target.valueAsNumber);
    };
  
    const Add = async () => {
      var A = Calc1 +Calc2;
      if (isNaN(Calc1) || isNaN(Calc2)) {
        alert ("Invalid Input. Please enter numbers in both boxes")}
      else {
        alert("The sum is " + A);}
      }

    const Subtract = async () => {
      var B = Calc1 - Calc2;
      if (isNaN(Calc1) || isNaN(Calc2)) {
        alert ("Invalid Input. Please enter numbers in both boxes")}
      else {
        alert("The difference is " + B)};
      }

    const handleButtonClick = async () => {
      var C = Calc1 * Calc2;
      if (isNaN(Calc1) || isNaN(Calc2)) {
        alert ("Invalid Input. Please enter numbers in both boxes")}
      else {
        alert("The product is " + C)};
      }

    const Division = async () => {
      var D = Calc1/Calc2;
      if (isNaN(Calc1) || isNaN(Calc2)) {
        alert ("Invalid Input. Please enter numbers in both boxes")}
      else {
        alert("The quotient is " + D)};
      }

  return (
    <main className="min-h-screen flex justify-center items-center bg-navy blue-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4 text-black">Calculate</h1>
        
        <input
          type= "number"
          value={Calc1}
          onChange={handleNumberChange}
          placeholder="Enter numbers here"
          className="input input-bordered w-full mb-4 text-black"
          min="0" required>
          </input>

          <button 
            onClick={Add}
            className="btn btn-primary text-align: center text-white"
          >
          +
          </button>

          <button 
            onClick={Subtract}
            className="btn btn-primary text-align: center text-white"
          >
          -
          </button>
          
          <button 
            onClick={handleButtonClick}
            className="btn btn-primary text-align: center text-white"
          >
          x
          </button>

          <button 
            onClick={Division}
            className="btn btn-primary text-align: center text-white"
          >
          ÷
          </button>

          <input
          type= "number"
          value={Calc2}
          onChange={handleNumberChange2}
          placeholder="Enter numbers here also"
          className="input input-bordered w-full mt-4 text-black"
          min="0" required>
          </input>

        </div>
      </main>
    );
  }

function Sigma() {
  throw new Error("Function not implemented.");
}
