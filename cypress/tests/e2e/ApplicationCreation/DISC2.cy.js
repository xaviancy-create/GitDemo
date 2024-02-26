import Home from "../../../support/application/clin/clin1/HomePage"
import GrantApplication from "../../../support/application/GrantApplication"
import ProjectTitle from "../../../support/application/disc/ProjectTitle"
import PositiveSelectionPreview from "../../../support/application/disc/disc0/PositiveSelectionPreview"
import Keywords from "../../../support/application/disc/disc2/Keywords"
import PublicInformation from "../../../support/application/PublicInformation"
import CoFunder from "../../../support/application/clin/clin1/CoFunder"
import FundsCalculator from "../../../support/application/disc/disc2/FundsCalculator"
import BudgetJustification from "../../../support/application/disc/disc0/BudgetJustification"
import InstitutionalApprovalsOversight from "../../../support/application/InstitutionalApprovalsOversight"
import DocumentUpload from "../../../support/application/disc/disc0/DocumentUpload"
import VerifyTheApplication from "../../../support/application/clin/clin1/VerifytheApplication"
import Eligibility from "../../../support/application/disc/disc2/Eligibility"
import InformationForReview from "../../../support/application/disc/disc2/InformationForReview"

const program_code = 'DISC2';

describe ('DISC2 Funding Process', function() {
    it ('DISC2 Funding opportunities', function() {
        cy.viewport(2000, 1320);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {
            cy.login();
            cy.ensureProgramOpenForApplications(program_code);
            cy.pushUser(data.ApplicantUsername);
            const hp = new Home();
            hp.startApplication(program_code).then((application_number) => {
            new Eligibility().completeSection();
            new GrantApplication().completeSection({aoo_select_details: data.AooSelectDetails});
            new ProjectTitle().completeSection();
            new PositiveSelectionPreview().completeSection();
            new InformationForReview().completeSection();
            new Keywords().completeSection();
            new PublicInformation().completeSection();
            new CoFunder().completeSection();
            new FundsCalculator().completeSection();
            new BudgetJustification().completeSection();
            new InstitutionalApprovalsOversight().completeSection();
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
