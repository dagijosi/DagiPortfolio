import { Text } from "@radix-ui/themes";
import React from "react";
import { Divider } from "@mui/material";
import Link from "next/link";
import { Instagram, LinkedIn, Twitter, X } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col items-center">
        <Text className="text-3xl font-semibold">Contact</Text>
        <Divider className=" w-28" />
        <Text className="text-sm md:text-xl font-light mt-4">
        Feel free to reach out to me via my phone number or connect with me on my social media platforms.
        </Text>
      </div>
      <div className="flex flex-col mt-10 items-center">
      <Text className="mt-4">Phone: +251924406791</Text>
      <Text className="mt-4">Email: Dagijossy18@gmail.com</Text>
      <div className="mt-4">
      <Link href={"http://linkedin.com/in/dagmawi-yoseph-4b4aa6296"} className="mr-4">
        <LinkedIn/>
      </Link>
      <Link href={"https://instagram.com/dagi_josi"} className="mr-4" >
        <Instagram/>
      </Link>
      <Link href={"https://x.com/Dagijosi1"} className="mr-4">
        <X/>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default Contact;
