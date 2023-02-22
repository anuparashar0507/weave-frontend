import { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../../../../../lib/Layout";
// import StatsCard from "../../../../components/StatsCard";
import JobProfileCard from "../../../../../components/Cards/JobProfileCard";
import { SimpleGrid, VStack, Text, Flex } from "@chakra-ui/react";
// import PDFViewer from "../../../../../components/Pdf/PdfViewer";

const PDFViewer = dynamic(
  () => import("../../../../../components/Pdf/PdfViewer"),
  {
    ssr: false,
  }
);

const Summary = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eosnim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
  };
  return (
    <Layout>
      <VStack w={"100%"} align={"flex-start"}>
        <Text fontSize={24}>Profile Summary</Text>

        <SimpleGrid columns={2} gap={4} w={"100%"}>
          {/* {profiles.map((profile, i) => {
            return ( */}
          <JobProfileCard
            key={"karen"}
            name={karen.name}
            score={karen.score}
            experience={karen.experience}
            skills={karen.skills}
            profilesummary={karen.profilesummary}
            skillsummary={karen.skillsummary}
          />
          {/* );
          })} */}
          <Flex>
            <PDFViewer file={"./karen.pdf"} />
          </Flex>
        </SimpleGrid>
      </VStack>
    </Layout>
  );
};

export default Summary;
