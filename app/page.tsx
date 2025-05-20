"use client";

import { useState, ChangeEvent,} from "react";
import React from "React";
import "~/styles/globals.css";
import MyButton from "./MyButton"

export default function RootLayout() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-navy blue-50 p-4">
        <MyButton></MyButton>
      </main>
    );
  }
