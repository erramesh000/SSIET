import React from "react";
import Courses from "@/components/Courses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Support page for Solid Pro"
};

const CoursesPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Courses />
    </div>
  );
};

export default CoursesPage;
