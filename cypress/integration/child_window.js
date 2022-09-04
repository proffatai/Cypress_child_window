///<reference types="cypress">
describe("Registering at BG", () => {
    let page;
    it("Accessing the register page", () => {
       cy.visit("/"); // visit the site
 
       cy.get("#menu-1-a3bcb3e > .menu-item-3661 > .elementor-item").click({
          force: true,
       }); // accessing the career button
       cy.contains("Check Openings").click({ force: true }); // accessing the check openings button
       cy.get(":nth-child(3) > a") // accessing the Register button
          .invoke("removeAttr", "target")//removing the target attribute so that the new page page doesnt open on a new tab
          .click({ force: true }); // clicking the register button
      
      // Creating my login credentials
      cy.get(
          "crux-email-component > .cxElementValue > .w100per > .lyteField > .cxBorderBottom"
       ).type("Ase2d@gmail.com"); // always edit the email to avoid user already exist error
       
       cy.get(
          ".crc-rec-form_3333 > .crc-form-field > rec-password-component > .crc-password > .crc-form-textfield > .lyteField > input"
       ).type("1234ac@EAE");
      
       cy.get(
          ".crc-rec-form_3334 > .crc-form-field > rec-password-component > .crc-password > .crc-form-textfield > .lyteField > input"
       ).type("1234ac@EAE");
       
       //Filling my basic information
       cy.get(
          ".crc-rec-form_595887000000063542 > .crc-form-field > crux-picklist-component > .cxElementValue > .cxBoxDropdown > .lyteDummyEventContainer > lyte-drop-button"
       ).click();
       cy.contains("Mr.").click({ force: true });
       
       cy.get(
          ".crc-rec-form_595887000000063542 > .crc-form-field > crux-text-component > .cxElementValue > .w100per > .lyteField > .cxBorderBottom"
       ).type("Damilola");
       
       cy.get(
          ".crc-rec-form_595887000000063544 > .crc-form-field > crux-text-component > .cxElementValue > .w100per > .lyteField > .cxBorderBottom"
       ).type("Adesanmi");
       
       cy.get(
          ".cxElementValue > :nth-child(1) > .w100per > .lyteField > .cxBorderBottom"
       ).type("09123254477");
       
       // Filling my Address
       cy.get(
          ".crc-rec-form_595887000000063560 > .crc-form-field > crux-text-component > .cxElementValue > .w100per > .lyteField > .cxBorderBottom"
       ).type("56, Urgu road, Ilasamaja.");
       
       cy.get(
          ".crc-rec-form_595887000000063562 > .crc-form-field > crux-text-component > .cxElementValue > .w100per > .lyteField > .cxBorderBottom"
       ).type("Agege"); 
 
       cy.get(
          ".crc-rec-form_595887000000063564 > .crc-form-field > crux-text-component > .cxElementValue > .w100per > .lyteField > .cxBorderBottom"
       ).type("Lagos state");
 
       cy.get(
          ".crc-rec-form_595887000000063566 > .crc-form-field > crux-text-component > .cxElementValue > .w100per > .lyteField > .cxBorderBottom"
       ).type("101554");
 
       cy.get(
          ".crc-rec-form_595887000000063568 > .crc-form-field > crux-text-component > .cxElementValue > .w100per > .lyteField > .cxBorderBottom"
       ).type("Uganda");
 
       //Filling my professional details
       cy.get(
          ".crc-section-3 > .wbf-doublewrapper > .crc-form-row > .crc-form-field > crux-picklist-component > .cxElementValue > .cxBoxDropdown > .lyteDummyEventContainer > lyte-drop-button"
       ).click({ force: true });
       cy.contains("Fresher").click({ force: true });
 
       //selecting skills
       cy.get(".skl-selected-skill").type("cypress");
       cy.wait(500); // wait for some time for the modal to appear
       cy.get(".skl-suggested-skill > li").click({ force: true }); //selecting the skill from the modal
 
       cy.get(".skl-selected-skill").type("Jmeter");
       cy.wait(500);
       cy.get(".skl-suggested-skill > li").eq(0).click({ force: true }); // selecting the first option since multiple results would appear on typing jmeter
 
       cy.get(".skl-selected-skill").clear().type("Postman"); //clearing the field before typing
       cy.wait(500);
       cy.get(".skl-suggested-skill > li").click({ force: true });
 
       //Educational Details
       cy.get(
          ".Educational_Details > .wbf-doublewrapper > rec-tabular-component > .crc-form-tabularblock > .crc-tabular-add > .tabular-group-add"
       ).click({ force: true });
       cy.get("#\\35 95887000000311066_1_tab > .lyteField > .cxBorderBottom").type(
          "University of Lagos"
       ); //double \\ was used which would translate into \
       cy.get("#\\35 95887000000311068_1_tab > .lyteField > .cxBorderBottom").type(
          "Elect./Elect"
       );
       cy.get("#\\35 95887000000311070_1_tab > .lyteField > .cxBorderBottom").type(
          "B.Sc."
       );
       
       //Duration for Month isnt perfect yet
       cy.get(
          "#cxd-595887000000311072_1_from_month > .lyteDummyEventContainer > lyte-drop-button"
       ).click({ force: true });
       cy.contains("Jan").click({ force: true });
       cy.get(
          "#cxd-595887000000311072_1_from_year > .lyteDummyEventContainer > lyte-drop-button"
       ).click({ force: true });
       cy.get('#cxdby-595887000000311072_1_from_year > [data-value="2017"]').click(
          { force: true }
       );
 
       cy.get(
          "#cxd-595887000000311072_1_to_month > .lyteDummyEventContainer > lyte-drop-button"
       ).click({ force: true });
       cy.contains("Oct").click({ force: true });
       cy.get(
          "#cxd-595887000000311072_1_to_year > .lyteDummyEventContainer > lyte-drop-button"
       ).click({ force: true });
       cy.get('#cxdby-595887000000311072_1_to_year > [data-value="2021"]').click({
          force: true,
       });
 
       //uploading CV : This part is not working yet
       cy.get(
          ".crc-form-row > rec-file-upload-component > .cxElementValue > lyte-fileupload > .fileUploadWrapper > lyte-yield > lyte-file-select-area > .lyteFileUpdMsgWrap"
       ).attachFile("CV.pdf");
 
       cy.log("Select a CV and Enter the Capture before the wait time goes out");
       cy.wait(30000);
       cy.get("#cw-submit-btn > .lyte-button").click();
       cy.wait(15000);
       cy.get("#submit-cls").should("be.visible");
    });
 });
 