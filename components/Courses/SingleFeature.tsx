import React from "react";
import { Courses } from "@/types/courses";
import Image from "next/image";
import { motion } from "framer-motion";

import "./index.css"

const SingleFeature = ({ coursesData }: { coursesData: Courses }) => {
  const { icon, title, subtitle, description, linkk } = coursesData;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] courceicon">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <h4 className="mb-2 mt-0.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle text-align:text-justify">
          {subtitle}
        </h4>
        <p className="cousec">{description}</p>
        <div>
          <a
            href="https://wa.me/8558831009"
            className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary" target="_blank"
          >
            <span className="duration-300 group-hover:pr-2">
              Know More
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
