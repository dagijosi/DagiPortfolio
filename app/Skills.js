import { Text } from "@radix-ui/themes";
import React from "react";
import { IMAGE_PATHS } from "@/components/constant";
import { Divider } from "@mui/material";
const Skills = () => {
  const skills = [
    { src: IMAGE_PATHS.HTML, name: "HTML" },
    { src: IMAGE_PATHS.CSS, name: "CSS" },
    { src: IMAGE_PATHS.JAVASCRIPT, name: "JavaScript" },
    { src: IMAGE_PATHS.REACT, name: "React" },
    { src: IMAGE_PATHS.NEXTJS, name: "Next.js" },
    { src: IMAGE_PATHS.TAILWIND, name: "Tailwind" },
    { src: IMAGE_PATHS.NODEJS, name: "Node.js" },
    { src: IMAGE_PATHS.VSCODE, name: "VSCode" },
    { src: IMAGE_PATHS.GITHUB, name: "Github" },
    { src: IMAGE_PATHS.BOOTSTRAP, name: "BootStrap"},
    { src: IMAGE_PATHS.MONGODB, name: "MongoDB"},
    { src: IMAGE_PATHS.FIREBASE, name: "Firebase" },
  ];
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center">
        <Text className="text-3xl font-semibold">Skills</Text>
        <Divider className="w-20" />
        <Text className=" text-sm md:text-xl font-light mt-4">
          Programming languages and tools I am working with.
        </Text>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-14">
          {skills.map((skill) => (
            <div key={skill.name}>
              <img src={skill.src} alt={skill.name} className="w-12 h-12" />
              <Text className="text-sm not-italic font-normal">
                {skill.name}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
