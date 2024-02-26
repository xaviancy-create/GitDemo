import Home from "../../../support/application/clin/clin1/HomePage"
import Eligibility from "../../../support/application/educ/educ3/Eligibility"
import GrantApplication from "../../../support/application/GrantApplication"
import Budget from "../../../support/application/educ/educ3/Budget"
import BudgetJustification from "../../../support/application/educ/educ1_10/BudgetJustification"
import ProjectTitle from "../../../support/application/educ/ProjectTitle"
import DocumentUpload from "../../../support/application/educ/educ3/DocumentUpload"
import TitleandAbstract from "../../../support/application/educ/educ3/TitleandAbstract"
import StatementsofBenufits from "../../../support/application/educ/educ2/StatementsofBenufits"
import ProgramSummary from "../../../support/application/educ/educ3/ProgramSummay"
import TraineeSelection from "../../../support/application/educ/educ3/TraineeSelection"
import AuxiliaryEducational from "../../../support/application/educ/educ3/AuxiliaryEducational"
import PatientandHealthcare from "../../../support/application/educ/educ3/PatientandHealthcare"
import Alumni from "../../../support/application/educ/educ3/Alumni"
import Community from "../../../support/application/educ/educ3/Community"
import ProgramLeadership from "../../../support/application/educ/educ3/ProgramLeadership"
import PriorProgram from "../../../support/application/educ/educ3/PriorProgram"
import Diversity from "../../../support/application/educ/educ2/Diversity"
import VerifyTheApplication from "../../../support/application/clin/clin1/VerifytheApplication"

const program_code = 'EDUC3';

describe ('Educ3 Funding Process', function() {
    it ('Educ3 Funding opportunities', function() {
        cy.viewport(2000, 1320);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {
            cy.login();
            cy.ensureProgramOpenForApplications(program_code);
            cy.pushUser(data.ApplicantUsername);

            const hp = new Home();
            hp.startApplication(program_code).then((application_number) => {
                new Eligibility().completeSection();
                new GrantApplication().completeSection({section_title: "Program Director and AOO", aoo_select_details: data.AooSelectDetails});
                new Budget().completeSection();
                new BudgetJustification().completeSection();
                new ProjectTitle().completeSection();
                new TitleandAbstract().completeSection();
                new StatementsofBenufits().completeSection();
                new ProgramSummary().completeSection();
                new TraineeSelection().completeSection();
                new AuxiliaryEducational().completeSection();
                new PatientandHealthcare().completeSection();
                new Alumni().completeSection();
                new Community().completeSection();
                new ProgramLeadership().completeSection();
                new PriorProgram().completeSection();
                new Diversity().completeSection();
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
