"use client";
import { IMAGE_PATHS } from "@/components/constant";
import { Avatar } from "@mui/material";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { AlternateEmail, GitHub, LinkedIn } from "@mui/icons-material";
import { Text } from "@radix-ui/themes";
import Link from "next/link";

const Profile = () => {
  const { theme } = useTheme();
  return (
<div className="flex flex-col md:flex-row justify-center mr-16 ml-8 md:ml-4 mt-4 ">
 <div className="flex flex-col justify-center mr-16 md:mr-0">
   <Text className=" font-bold text-2xl mb-4">Hi, I am</Text>
   <Text className=" font-bold text-5xl">Dagmawi Yoseph</Text>
   <Text className=" font-extralight mb-4">
     Front-end Developer / UI Designer
   </Text>
   <div className="flex flex-row mb-4">
     <Link href={"https://github.com/dagijosi"} className="mr-4">
       <GitHub />
     </Link>
     <Link href={"https://Dagijossy18@gmail.com"} className="mr-4">
       <AlternateEmail />
     </Link>
     <Link href={"http://linkedin.com/in/dagmawi-yoseph-4b4aa6296"} className="mr-4">
       <LinkedIn />
     </Link>
   </div>
   <Text className=" w-80 font-light md:w-96">
     I am a seasoned full-stack software engineer with over 8 years of
     professional experience, specializing in backend development. My
     expertise lies in crafting robust and scalable SaaS-based
     architectures on the Amazon AWS platform.
   </Text>
   <div className="flex flex-row mt-4 md:justify-center">
     <Button className="mr-4 rounded-3xl">
      <Link href={"#contact"}> Get In Touch</Link>
      </Button>
     <Button className="mr-4 rounded-3xl" onClick={() => window.open('/Dagmawi Yoseph cv_2.pdf')}>
       Download CV
     </Button>
   </div>
 </div>
 <img src={IMAGE_PATHS.PROFILEPICS1}  />
</div>
  );
};

export default Profile;
