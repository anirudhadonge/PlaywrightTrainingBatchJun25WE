/**
 * 1. end point
 * 2. method type : get, put, post, delete
 * 3. Headers
 * 4. body
 *
 * a : you a request object
 * b : method
 * c: response
 *    a. status
 *    b. reponse body
 *    c. reponse headers
 *
 * apirequest
 */

import { test, expect } from "@playwright/test";

test("@apitest First Api test", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/productsList"
  );
  console.log(response.status());
  expect(response.ok()).toBeTruthy();
  console.log(await response.json());
});

// test("@apitest List all Jira Project", async ({ request }) => {
//   const response = await request.get("https://adonge2d0825.atlassian.net/rest/api/3/project", {
//     headers: {
//       Authorization: `Basic ${Buffer.from(
//         "anirudha.donge@gmail.com:<ApiToken>"
//       ).toString("base64")}`,
//       Accept: "application/json",
//     },

//   });
//   console.log(response.status());
//   expect(response.ok()).toBeTruthy();
//   console.log(await response.json());
// });

// let createProjectBody = {
//   assigneeType: "PROJECT_LEAD",
//   avatarId: 10200,
//   description: "Postman project",
//   key: "PM8",
//   leadAccountId: "5ec67022ae79a10c16b45d62",
//   name: "DemoPlaywrightProject_part5",
//   projectTemplateKey: "com.pyxis.greenhopper.jira:gh-simplified-agility-kanban",
//   projectTypeKey: "software",
// };

// test("@apitest create a new Project", async ({ request }) => {
//   /// timer started
//   const response = await request.post(
//     "https://adonge2d0825.atlassian.net/rest/api/3/project",
//     {
//       headers: {
//         Authorization: `Basic ${Buffer.from(
//           "anirudha.donge@gmail.com:<ApiToken>"
//         ).toString("base64")}`,
//         Accept: "application/json",
//       },
//       data: createProjectBody,
//     }
//   );
//   // timer stops
//   console.log(response.status());
//   expect(response.ok()).toBeTruthy();
//   const jsonObj = await response.json();
//   console.log(jsonObj);
//   const id = jsonObj["id"];
//   console.log(id);
//   const projectDetails =await request.get(
//     `https://adonge2d0825.atlassian.net//rest/api/3/project/${id}`,
//     {
//       headers: {
//         Authorization: `Basic ${Buffer.from(
//           "anirudha.donge@gmail.com:<ApiToken>"
//         ).toString("base64")}`,
//         Accept: "application/json",
//       },
//     }
//   );
//   console.log(await projectDetails.json());
// });
