import {lorem} from '../lorem';
class FinalScoreGWG{
    checkOptions = { check: true };
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeScore = { type: function(options, index) { return "90" } };
    completeSection(){
        this.clickFinalScoreApplication();
        cy.withSelected([
        { get: "input[type='radio'][id='task_assignment_tier_3']", options: this.checkOptions },
        { get: "#task_assignment_influence_of_potential_for_impact_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_rationale_sound_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_well_planned_and_designed_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_proposal_feasible_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_project_serves_the_needs_of_underserved_community_positive", options: this.checkOptions },
        { xpath: "//textarea[@class='end-user-text']", options: this.typeOptions },
        ])
        this.clicksave();
    }
    completeSectionforDISC(){
        this.clickFinalScoreApplication();
        cy.withSelected([
        { xpath: "//input[@class='end-user-text']", options: this.typeScore },
        { get: "#task_assignment_influence_of_potential_for_impact_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_rationale_sound_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_well_planned_and_designed_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_proposal_feasible_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_project_upholds_the_principles_of_dei_positive", options: this.checkOptions },
        { xpath: "//textarea[@class='end-user-text']", options: this.typeOptions },
        ])
        this.clicksave();
    }
    completeSectionSpec(){
        this.clickFinalScoreApplication();
        cy.withSelected([
        { get: "#task_assignment_influence_of_potential_for_impact_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_rationale_sound_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_well_planned_and_designed_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_proposal_feasible_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_project_serves_the_needs_of_underserved_community_positive", options: this.checkOptions },
        { xpath: "//textarea[@class='end-user-text']", options: this.typeOptions },
        ])
        this.clicksave();
    }
    completeSectionSpecforDISC(){
        this.clickFinalScoreApplication();
        cy.withSelected([
        { get: "#task_assignment_influence_of_potential_for_impact_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_rationale_sound_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_well_planned_and_designed_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_proposal_feasible_positive", options: this.checkOptions },
        { get: "#task_assignment_influence_of_project_upholds_the_principles_of_dei_positive", options: this.checkOptions },
        { xpath: "//textarea[@class='end-user-text']", options: this.typeOptions },
        ])
        this.clicksave();
    }

    clickFinalScoreApplication(){
        cy.xpath("(//div[@class='link_to']//div//a)[1]").click({force:true});
    }
    clicksave(){
        cy.xpath("//button[@type='submit']").click();
    }
}

export default FinalScoreGWG;
