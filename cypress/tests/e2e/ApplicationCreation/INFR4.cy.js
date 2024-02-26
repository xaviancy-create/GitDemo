import Home from "../../../support/application/clin/clin1/HomePage"
import GrantApplication from "../../../support/application/GrantApplication"
import PublicInformation from "../../../support/application/PublicInformation"
import BudgetJustification from "../../../support/application/educ/educ5/BudgetJustification"
import DocumentUpload from "../../../support/application/infr/infr4/DocumentUpload"
import ProjectTitle from "../../../support/application/infr/ProjectTitle"
import AddValueForStemCell from "../../../support/application/infr/infr4/AddValueForStemCell"
import ValueProposition from "../../../support/application/infr/infr4/ValueProposition"
import Organizational from "../../../support/application/infr/infr4/Organizational"
import ProjectPlan from "../../../support/application/infr/infr4/ProjectPlan"
import ExperienceCapacity from "../../../support/application/infr/infr4/ExperienceCapacity"
import AddressingUnderserved from "../../../support/application/infr/infr4/AddressingUnderserved"
import KnowledgeSharingPlan from "../../../support/application/infr/infr4/KnowledgeSharingPlan"
import ContingencyPlan from "../../../support/application/infr/infr4/ContingencyPlan"
import Reference from "../../../support/application/infr/infr4/Reference"
import CIRMFundsCalculator from "../../../support/application/infr/infr4/CIRMFundsCalculator"
import Eligibility from "../../../support/application/infr/infr4/Eligibility"
import VerifyTheApplication from "../../../support/application/clin/clin1/VerifytheApplication"


const program_code = 'INFR4';

describe ('Infra4 Funding Process', function() {
   it ('Infra4 Funding opportunities', function() {
      cy.viewport(2000, 1320);
      // User Enters the GMS URL
      cy.gmsLoginFixture().then((data)=> {
         cy.login();
         cy.ensureProgramOpenForApplications(program_code);
         cy.pushUser(data.ApplicantUsername);

         const hp = new Home();
         hp.startApplication(program_code).then((application_number) => {
            new Eligibility().completeSection();
            new GrantApplication().completeSection({section_title: "PD and AOO", aoo_select_details: data.AooSelectDetails});
            new ProjectTitle().completeSection();
            new AddValueForStemCell().completeSection();
            new ValueProposition().completeSection();
            new Organizational().completeSection();
            new ProjectPlan().completeSection();
            new ExperienceCapacity().completeSection();
            new AddressingUnderserved().completeSection();
            new KnowledgeSharingPlan().completeSection();
            new ContingencyPlan().completeSection();
            new Reference().completeSection();
            new CIRMFundsCalculator().completeSection();
            new PublicInformation().completeSection();
            new BudgetJustification().completeSection();
            new DocumentUpload().completeSection();
            cy.submitDeliverable(application_number);
            cy.popUser();
            cy.pushUser(data.AooUsername);
            new VerifyTheApplication().AooSubmitApplication(application_number);
            cy.popUser();
            new VerifyTheApplication().verifyApplicationExists(application_number);
         })
      })
   })
})

