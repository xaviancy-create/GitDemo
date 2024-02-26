import Home from "../../../support/application/clin/clin1/HomePage"
import GrantApplication from "../../../support/application/educ/GrantApplication"
import Budget from "../../../support/application/educ/educ2/Budget"
import BudgetJustification from "../../../support/application/educ/educ1_10/BudgetJustification"
import ProjectTitle from "../../../support/application/educ/ProjectTitle"
import PublicAbstract from "../../../support/application/educ/educ2/PublicAbstract"
import StatementsofBenufits from "../../../support/application/educ/educ2/StatementsofBenufits"
import ProgramSummaryandProgramDesign from "../../../support/application/educ/educ2/ProgramSummaryandProgramDesign"
import InternshipPlacement from "../../../support/application/educ/educ2/InternshipPlacement"
import EngagementActivities from "../../../support/application/educ/educ2/EngagementActivities"
import EducationalEnhancementActivities from "../../../support/application/educ/educ2/EducationalEnhancementActivities"
import CommunityOutreach from "../../../support/application/educ/educ2/CommunityOutreach"
import AdvancedCell from "../../../support/application/educ/educ2/AdvancedCell"
import TraineeAssessment from "../../../support/application/educ/educ2/TraineeAssessment"
import ProgramLeadership from "../../../support/application/educ/educ2/ProgramLeadership"
import PriorProgramTrackRecord from "../../../support/application/educ/educ2/PriorProgramTrackRecord"
import InternshipHostInstitutions from "../../../support/application/educ/educ2/InternshipHostInstitutions"
import Diversity from "../../../support/application/educ/educ2/Diversity"
import DocumentUpload from "../../../support/application/educ/educ2/DocumentUpload"
import VerifyTheApplication from "../../../support/application/clin/clin1/VerifytheApplication"


const program_code = 'EDUC2';

describe('Educational 2 Funding Process', function (){
    it('Educational 2 Funding opportunities', function(){
        cy.viewport(2000, 1320);
        cy.gmsLoginFixture().then((data)=> {
            cy.login();
            cy.ensureProgramOpenForApplications(program_code);
            cy.pushUser(data.ApplicantUsername);

            const hp = new Home();
            hp.startApplication(program_code).then((application_number) => {
                new GrantApplication().completeSection({aoo_select_details: data.AooSelectDetails});

                new Budget().completeSection();
                new BudgetJustification().completeSection();
                new ProjectTitle().completeSection();
                new PublicAbstract().completeSection();
                new StatementsofBenufits().completeSection();
                new ProgramSummaryandProgramDesign().completeSection();
                new InternshipPlacement().completeSection();
                new EngagementActivities().completeSection();
                new EducationalEnhancementActivities().completeSection();
                new CommunityOutreach().completeSection();
                new AdvancedCell().completeSection();
                new TraineeAssessment().completeSection();
                new ProgramLeadership().completeSection();
                new PriorProgramTrackRecord().completeSection();
                new InternshipHostInstitutions().completeSection();
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
