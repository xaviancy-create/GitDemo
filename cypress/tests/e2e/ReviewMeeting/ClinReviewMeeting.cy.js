import Application from "../../../support/reviewmeeting/Application";
import Members from "../../../support/reviewmeeting/Members";
import COIList from "../../../support/reviewmeeting/COIList";
import CritiqueAssignment from "../../../support/reviewmeeting/CritiqueAssignment";
import List from "../../../support/reviewmeeting/List";
import Overview from "../../../support/reviewmeeting/Overview";
import Home from "../../../support/reviewmeeting/Home";
import GWGDetails from "../../../support/reviewmeeting/GWGDetails";
import GWGBoard from "../../../support/reviewmeeting/GWGBoard";
import FinalScoreGWG from "../../../support/reviewmeeting/FinalScoreGWG";
import FinalScoreGWGBoard from "../../../support/reviewmeeting/FinalScoreGWGBoard";
import FinalScore from "../../../support/reviewmeeting/FinalScore";


const program_code = 'CLIN';

describe ('CLIN Review Process', function() {
    it ('CLIN Review opportunities', function() {
        cy.viewport(2000, 1230);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {
            cy.login();
            new Home().completeSection(program_code)
            new Application().completeSection();
            new Members().completeSection();
            new COIList().completeSection();
            new CritiqueAssignment().completeSection();
            new List().clickFirstGWG();
            new Home().clickClinApplication();
            new GWGDetails().completeSection();
            cy.popUser();
            new List().clickSecondGWG();
            new Home().clickClinApplication();
            new GWGDetails().completeSection();
            cy.popUser();
            new List().clickFirstGWGBoard();
            new Home().clickClinApplication();
            new GWGBoard().completeSection();
            cy.popUser();
            new List().clickSecondGWGBoard();
            new Home().clickClinApplication();
            new GWGBoard().completeSection();
            cy.popUser();
            new List().clickFirstspec();
            new Home().clickClinApplication();
            new GWGDetails().completeSection();
            cy.popUser();
            new Overview().completeSection();
            new List().clickFirstGWG();
            new Home().clickClinApplication();
            new FinalScoreGWG().completeSection();
            cy.popUser();
            new List().clickSecondGWG();
            new Home().clickClinApplication();
            new FinalScoreGWG().completeSection();
            cy.popUser();
            new List().clickFirstGWGBoard();
            new Home().clickClinApplication();
            new FinalScoreGWGBoard().completeSection();
            cy.popUser();
            new List().clickSecondGWGBoard();
            new Home().clickClinApplication();
            new FinalScoreGWGBoard().completeSection();
            cy.popUser();
            new List().clickFirstspec();
            new Home().clickClinApplication();
            new FinalScoreGWG().completeSectionSpec();
            cy.popUser();
            new FinalScore().completeSection();
        })
    })
})
