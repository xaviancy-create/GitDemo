import {lorem} from '../lorem';

class AimandMilestones{

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeDate = { type: function(options, index) { return "08/01/2024" } };
    typeDate2 = { type: function(options, index) { return "09/01/2024" } };

    completeSection(){
        this.clickAimandMileStone();
        this.clickAddAimandMilestone();
        cy.withSelected([
            { xpath: "//div[@id='title_input_div']//div[@class='fr-element fr-view']//p", options: this.typeOptions },
            { xpath: "//div[@id='description_input_div']//div[@class='fr-wrapper show-placeholder']//p", options: this.typeOptions },
            { get: "input[id='project_milestone_nga_target_completion']", options: this.typeDate },

        ])
        this.clickOriginalDate();
        this.selectontrack();
        this.clickSave();
        this.clickreturn();
        this.clickAddAimandMilestone();
        cy.withSelected([
            { xpath: "//div[@id='title_input_div']//div[@class='fr-element fr-view']//p", options: this.typeOptions },
            { xpath: "//div[@id='description_input_div']//div[@class='fr-wrapper show-placeholder']//p", options: this.typeOptions },
            { get: "input[id='project_milestone_nga_target_completion']", options: this.typeDate2 },

        ])
        this.clickOriginalDate();
        this.selectontrack();
        this.clickSave();
        this.clickreturn();
    }



    clickAimandMileStone(){
        cy.xpath("//a[text()='Aims/Milestones']").click();
    }
    clickAddAimandMilestone(){
        cy.xpath("//a[text()='Add a new Aim/Milestone']").click();
    }
    clickOriginalDate(){
        cy.get("input[id='project_milestone_nga_target_completion']").click();
    }
    selectontrack(){
        cy.xpath("//select[@id='project_milestone_details_status']").select("On Track");
    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickreturn(){
        cy.xpath("//a[text()='Return to Aims/Milestones list']").click();
    }
}

export default AimandMilestones;
