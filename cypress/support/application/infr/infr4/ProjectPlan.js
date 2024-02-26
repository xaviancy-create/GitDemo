import {lorem} from '../../../lorem';

class ProjectPlan {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.ProjectPlan();
        cy.withSelected([
            { xpath: "(//div[@class='fr-element fr-view'])", options: this.typeOptions },
        ]);
        this.clickSaveBtn();
        this.ProjectTeam();
        cy.withSelected([
            { xpath: "(//div[@class='fr-element fr-view'])", options: this.typeOptions },
        ]);
        this.clickSaveBtn();

    }
    ProjectPlan(){
        cy.xpath("//a[contains(text(),'Project Plan')]").click();
    }
    ProjectTeam(){
        cy.xpath("//a[contains(text(),'Project Team')]").click();
    }
    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default ProjectPlan;
