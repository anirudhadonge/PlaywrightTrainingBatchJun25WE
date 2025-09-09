import { Given, Then, When } from "@cucumber/cucumber";

         Given('First step', function () {
            console.log("First step");
         });


         When('Second step', function () {
          console.log("Second step");
         });

         Then('Third Step', function () {
           console.log("Third Step");
         });

         Then('fourth Step', async function () {
           console.log("Fourth Step");
         });