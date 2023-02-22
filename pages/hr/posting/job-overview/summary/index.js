import { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../../../../../lib/Layout";
// import StatsCard from "../../../../components/StatsCard";
import JobProfileCard from "../../../../../components/Cards/JobProfileCard";
import {
  SimpleGrid,
  VStack,
  Text,
  Flex,
  Image,
  HStack,
} from "@chakra-ui/react";
// import PDFViewer from "../../../../../components/Pdf/PdfViewer";
import Karen from "../../../../../assets/karen.png";
import NextImage from "next/image";
// const PDFViewer = dynamic(
//   () => import("../../../../../components/Pdf/PdfViewer"),
//   {
//     ssr: false,
//   }
// );

const Summary = () => {
  const columnsData = [
    {
      Header: "NAME",
      accessor: "name",
      type: "name",
      isLink: true,
      HeaderStyles: {
        w: "25%",
      },
      styles: {
        noOfLines: "1",
        textDecoration: "underline",
        width: "100%",
      },
    },

    {
      Header: "EXPERIENCE",
      accessor: "experience",
    },
    {
      Header: "SKILL SUMMARY",
      accessor: "skills",
      styles: {
        noOfLines: "1",
        textDecoration: "underline",
        width: "100%",
      },
    },
    {
      Header: "SCORE",
      accessor: "score",
    },
  ];

  const tableData = [
    {
      name: "Karen Santos",
      skills: ["react", "vuejs", "css", "html", "javascript"],
      experience: 8,
      score: 88.5,
      skillsummary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
      profilesummary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    },
    {
      name: "Usha Nahuel",
      skills: ["react", "nextjs", "css", "html", "figma"],
      experience: 4,
      score: 82.1,
      skillsummary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
      profilesummary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    },
    {
      name: "Anne Aziz",
      skills: ["react", "nextjs", "css", "html"],
      experience: 3,
      score: 76.2,
      skillsummary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
      profilesummary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    },
    {
      name: "Meera Virgee",
      skills: ["react", "css", "html", "javascript"],
      experience: 5,
      score: 67.8,
      skillsummary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
      profilesummary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    },
  ];

  const karen = {
    name: "Karen Santos",
    skills: ["react", "vuejs", "css", "html", "javascript"],
    experience: 8,
    score: 88.5,
    skillsummary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    profilesummary:
      "<ul> <li>Js Vue.js Testing Enyzme Jest CI/CD GIT CAREER OBJECTIVE Senior Front-End Developer with 9 years of proven leadership and meaningfully contributions to teams of varying size and scope.</li> <li>With my results-driven mentality, I transformed my team at GitHub by seeking, learning, and teaching new, efficient technologies to make aggressive deadlines consistently achievable.</li> <li>WORK EXPERIENCE Senior Front-End Developer GitHub January 2017 - current New York, NY Led development team of 5 to create GitHub pages, allowing customer repositories to be hosted directly.</li> <li>Mentored 8 new junior front-end developers on team in expanding JavaScript, React, and Angular skillset.</li> <li>Worked with PM/IM to keep on track with the project plan, timeline, and billing.</li> <li>Led bi-weekly stand-up to ensure team worked effectively, using coaching strategies to increase efficiency by 10%. Worked with Quality Assurance to get new pages/products tested, and addressed any issues within 48 hours.</li> <li>Introduced Kanban Board style ticketing system to promote highly efficient asynchronous and synchronous work, increasing efficiency by 12%. Utilized HTML, CSS, and JavaScript to create 100 responsive landing pages for both company and client.</li> </ul>",
  };
  return (
    <Layout>
      <VStack w={"100%"} align={"flex-start"}>
        <Text fontSize={24}>Profile Summary</Text>

        <HStack align={"flex-start"} columns={2} gap={4} w={"100%"}>
          <Flex maxW={"50%"}>
            <JobProfileCard
              key={"karen"}
              name={karen.name}
              score={karen.score}
              experience={karen.experience}
              skills={karen.skills}
              profilesummary={karen.profilesummary}
              skillsummary={karen.skillsummary}
            />
          </Flex>
          <Flex p={4} bg={"gray.200"}>
            <Image alt={"image"} as={NextImage} src={Karen} />
          </Flex>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Summary;
