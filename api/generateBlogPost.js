import { faker } from "@faker-js/faker";
// import chalk from "chalk";
// import fs from "fs";
// import db from "./db.json"
export function createRandomblogs() {
  //   const sex = this.faker.name.sexType();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  //   const email = faker.helpers.unique(faker.internet.email, [
  //     firstName,
  //     lastName,
  //   ]);
  const article = faker.lorem.paragraphs();
  const title = faker.lorem.sentence();

  return {
    _id: faker.datatype.uuid(),
    image: faker.image.image(),
    date: faker.date.recent(),
    firstName,
    lastName,
    title,
    article,
    avatar: faker.image.avatar(),
  };
}

// const blogs = createRandomblogs();
// const json = JSON.stringify({
//   blogs,
// });

// fs.writeFile("./db.json", json, (err) => {
//   if (err) {
//     console.log(chalk.red(err.message));
//   } else {
//     console.log(chalk.green("Mock API data generated."));
//   }
// });
