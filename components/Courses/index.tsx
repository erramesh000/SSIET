"use client";
import React from "react";
import coursesData from "./coursesData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Courses = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="courses" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Our Flagship ",
              subtitle: "Courses",
              description: `At Swami Sarvanand Group of Institutes, we take pride in offering our premier courses, designed to equip students with the skills, knowledge, and experience needed to excel in today’s competitive world.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {coursesData.map((courses, key) => (
              <SingleFeature coursesData={courses} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Courses;
