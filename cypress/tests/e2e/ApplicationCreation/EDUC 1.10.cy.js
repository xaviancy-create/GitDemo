import Home from "../../../support/application/clin/clin1/HomePage"
import GrantApplication from "../../../support/application/educ/educ1_10/GrantApplication"
import BudgetJustification from "../../../support/application/educ/educ1_10/BudgetJustification"
import ConferenceInformation from "../../../support/application/educ/educ1_10/ConferenceInformation"
import ConsultantsandServiceContracts from "../../../support/application/educ/educ1_10/ConsultantsandServiceContracts"
import FundCalculator from "../../../support/application/educ/educ1_10/FundCalculator"
import ApproachandSetting from "../../../support/application/educ/educ1_10/ApproachandSetting"
import Qualification from "../../../support/application/educ/educ1_10/Qualification"
import DocumentUpload from "../../../support/application/educ/educ1_10/DocumentUpload"
import VerifyTheApplication from "../../../support/application/educ/educ1_10/VerifytheApplication"

const program_code = 'EDUC1.10';

describe ('Educational 1.10 Funding Process', function() {
    it ('Educational 1.10 Funding opportunities', function() {
        cy.viewport(2000, 1320);
        cy.gmsLoginFixture().then((data)=> {
            cy.login();
            cy.ensureProgramOpenForApplications(program_code);
            cy.pushUser(data.ApplicantUsernameEduc10);

            const hp = new Home();
            hp.startApplication("CIRM Conference - The 2023 Alpha Stem Cell Clinic Annual Symposium").then((application_number) => {
                new GrantApplication().completeSection({aoo_select_details: data.AooSelectDetailsEduc10});
                new ConferenceInformation().completeSection();
                new ConsultantsandServiceContracts().completeSection();
                new FundCalculator().completeSection();
                new BudgetJustification().completeSection();
                new ApproachandSetting().completeSection();
                new Qualification().completeSection();
                new DocumentUpload().completeSection();
                cy.submitDeliverable(application_number);
                cy.popUser();
                cy.pushUser(data.AooUsernameEduc10);
                new VerifyTheApplication().AooSubmitApplication(application_number);
                cy.popUser();
                new VerifyTheApplication().verifyApplicationExists(application_number.split('-')[1].trim());


            })
        })
    })
})
