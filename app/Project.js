import { Text } from "@radix-ui/themes";
import React from "react";
import { Divider } from "@mui/material";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { GitHub } from "@mui/icons-material";
import { IMAGE_PATHS } from "@/components/constant";

const Project = () => {
  const proj = [
    {
      Img: IMAGE_PATHS.DMOVIES,
      Title: "DMovies",
      Description:
        "DMovies is a comprehensive movie and TV series platform featuring advanced search and categorization functionalities. It allows users to discover and like content, providing a personalized and engaging entertainment experience.",
      Languages: "JavaScript, HTML, Tailwind CSS, React",
      Link: "https://github.com/dagijosi/dMovies",
    },
    {
      Img: IMAGE_PATHS.FRIENDCHAT,
      Title: "Friend-Chat",
      Description:
        "Friend-Chat is a dynamic messaging platform that allows users to share text, files, emojis, and record audio conversations. It's designed to promote human connection and individual expression, providing a user-friendly interface for seamless interactions.",
      Languages: "JavaScript, HTML, Tailwind CSS, React",
      Link: "https://github.com/dagijosi/freind-chat",
    },
    {
      Img: IMAGE_PATHS.ECOWEB,
      Title: "Eco-Web",
      Description:
        "Eco-Web is a user-centric eCommerce platform featuring secure login and signup systems, a detailed product catalog, and a robust cart system. It leverages modern web technologies for optimal performance and user experience. The product detail page provides comprehensive information to aid customer decision-making, and the cart system supports multi-currency transactions. Eco-Web also incorporates SEO optimization and social media integration for increased traffic and engagement.",
      Languages: "JavaScript, HTML, Tailwind CSS, Next.js",
      Link: "https://github.com/dagijosi/eco-web",
    },
  ];
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center">
        <Text className="text-3xl font-semibold">Projects</Text>
        <Divider className=" w-28" />
        <Text className="text-sm md:text-xl font-light mt-4">
          Things I’ve built so far
        </Text>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
        {proj.map((project,index) => (
          <div key={index} className="flex justify-center ml-4 md:ml-0 mb-4">
            <Card className="w-fit rounded-2xl">
              <img src={project.Img} alt="Project Image" className="w-80 h-48" />
              <CardContent className="flex flex-col mt-4">
                <Text className="text-2xl font-semibold">{project.Title}</Text>
                <Text className="text-sm font-light mt-4 w-64">
                  {project.Description}
                </Text>
                <div className="mt-2 w-64">
                  <Text className=" text-sm font-medium mt-4">Languages: </Text>
                  <Text className=" text-xs font-light mt-4">
                    {project.Languages}
                  </Text>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={project.Link}>
                  <GitHub />
                  <Text className="text-xs font-light mt-4">
                    View on GitHub
                  </Text>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
