// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  const categories = Object.keys(skillsData);
  const categoryStyles = [
    'text-blue-400',
    'text-purple-400',
    'text-orange-400'
  ];

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <h3 className={`text-2xl font-semibold mb-6 ${categoryStyles[catIndex % categoryStyles.length]}`}>
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skillsData[category].map((skill, id) => (
                <div className="w-full h-fit flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative hover:scale-[1.05] cursor-pointer"
                  key={id}>
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 p-4">
                      <div className="h-6 sm:h-8">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={32}
                          height={32}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-white text-xs sm:text-sm text-center">
                        {skill}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;