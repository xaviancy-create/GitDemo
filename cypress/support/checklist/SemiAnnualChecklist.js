import {lorem} from '../lorem';
class SemiAnnualChecklist{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };
    typeScore = { type: function(options, index) { return "75" } };
completeSOSection(){
   this.clickPublicSummary();
   cy.withSelected([
    { xpath: "//span[@class='end-user-text']//textarea", options: this.typeOptions },
    { get: "input[type='checkbox']", options: this.checkOptions },
   ])
   this.clickSave();
   this.clickAdministrate();
   cy.withSelected([
    { xpath: "//span[@class='end-user-text']//textarea", options: this.typeOptions },
    { get: "input[type='checkbox']", options: this.checkOptions },
   ])
   this.clickSave();
   this.clickObjectives();
   cy.withSelected([
    { get: "div[class='fr-element fr-view']", options: this.typeOptions },
    { get: "input[type='radio'][id^='projectmilestonechecklist_'][id*='_project_objective_achieved_'][id$='__yes']", options: this.checkOptions },
    { get: "input[type='radio'][value='green']", options: this.checkOptions },
   ])
   this.clickSave();
   this.clickPublication();
   cy.withSelected([
    { xpath: "//span[@class='end-user-text']//textarea", options: this.typeOptions },
    { get: "input[type='checkbox']", options: this.checkOptions },
   ])
   this.clickSave();
   this.clickScientific();
   cy.withSelected([
    { xpath: "//span[@class='end-user-text']//textarea", options: this.typeOptions },
    { get: "input[type='checkbox']", options: this.checkOptions },
   ])
   this.clickSave();
   this.clickOutcomes();
   cy.withSelected([
    { xpath: "//span[@class='end-user-text']//textarea", options: this.typeScore },
    { get: "input[type='radio'][id^='projectmilestonechecklist_'][id*='_progression_event_achieved_'][id$='__yes']", options: this.checkOptions },
    { get: "input[type='radio'][id^='projectmilestonechecklist_'][id*='_partnership_occurred_'][id$='__yes']", options: this.checkOptions },
   ])
   this.clickSave();
   this.clickSubmit();
}

    completeGMOSection(){
        this.clickAdministrate();
        cy.withSelected([
            { xpath: "//span[@class='end-user-text']//textarea", options: this.typeScore },
            { get: "input[type='checkbox']", options: this.checkOptions },
           ])
        this.clickSave();
        this.clickPublication();
        cy.withSelected([
            { xpath: "//span[@class='end-user-text']//textarea", options: this.typeOptions },
            { get: "input[type='checkbox']", options: this.checkOptions },
           ])
        this.clickSave();
        this.clickSubmit();
}
clickOutcomes(){
    cy.xpath("//a[text()='Outcomes Assessment']").click();
}
clickScientific(){
    cy.xpath("//a[text()='Scientific Coding']").click();
}
clickPublication(){
    cy.xpath("//a[text()='Publications and Inventions']").click();
}
clickObjectives(){
    cy.xpath("//a[text()='Project Summary, Objective and Status']").click();
}
clickAdministrate(){
    cy.xpath("//a[text()='Administrative Review']").click();
}
clickEvaluation(){
    cy.xpath("//a[text()='Evaluation and Status Aims and Milestones']").click();
}
clickPublicSummary(){
    cy.xpath("//a[text()='Public Summary of Scientific Progress']").click();
}
clickSave(){
    cy.get("button[type='submit'][value='Save']").click();
}
clickSubmit(){
    cy.get("button[type='submit'][value='Submit']").click();
}
clickAdministrate(){
    cy.xpath("//a[text()='Administrative Review']").click();
}
clickPublication(){
    cy.xpath("//a[text()='Publications and Inventions']").click();
}

}

export default SemiAnnualChecklist;
