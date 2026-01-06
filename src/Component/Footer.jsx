import React from "react";
import { GithubLogoIcon } from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="footerContainer ">
        <a
          target="_blank"
          href="https://github.com/shivangi-verma/weather"
          className=" footer text-xl font-[DM_Sans] tracking-tighter text-[#11121480] flex justify-center items-center cursor-pointer font-regular hover:text-[#5e8cf6] hover:underline gap-2"
        >
          Made by
          <span className="font-medium footerContainer-hover:text-[#f97316] text-inherit">
            Shivangi
          </span>
          <GithubLogoIcon
            className="color-inherit size-5 hover:transform hover:scale-110"
            weight="duotone"
          />
        </a>
      </div>
    </>
  );
}

export default Footer;
