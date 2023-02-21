import React from "react";
import Layout from "../../../../lib/Layout";
import StatsCard from "../../../../components/StatsCard";
import JobDescriptionCard from "../../../../components/Cards/JobDescriptionCard";
import { SimpleGrid, VStack, Text } from "@chakra-ui/react";
import TableWithStatus from "../../../../components/Tables";
const JobOverview = () => {
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
  return (
    <Layout>
      <VStack w={"100%"} align={"flex-start"}>
        <Text fontSize={24}>Job Profile & Matching Applicants</Text>

        <JobDescriptionCard />
        <SimpleGrid columns={1} gap={4} w={"100%"}>
          <TableWithStatus
            headerBg={"blue.700"}
            enablePagination={true}
            pageSize={5}
            enableSearch={true}
            columnsData={columnsData}
            tableData={tableData}
            size={"md"}
            isBordered={true}
            badges={true}
            // onRowClick={(row, index) => handleDsClick(row)}
          />
          {/* {profiles.map((profile, i) => {
            return (
              <JobProfileCard
                key={i}
                name={profile.name}
                score={profile.score}
                experience={profile.experience}
                skills={profile.skills}
                profilesummary={profile.profilesummary}
                skillsummary={profile.skillsummary}
              />
            );
          })} */}
        </SimpleGrid>
      </VStack>
    </Layout>
  );
};

export default JobOverview;
