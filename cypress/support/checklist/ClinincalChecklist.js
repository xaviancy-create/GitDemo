import {lorem} from '../lorem';
class ClinicalChecklist{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };
    typeScore = { type: function(options, index) { return "75" } };

    ClickChecklist(Report){
        const reportName = Report.trim();
        cy.xpath(`(//div[@class='table'])[2]//div[contains(., 'CLIN1') and contains(normalize-space(), '${reportName}')]`).first().closest('.typicalrow')
  .within(() => {
    //   cy.xpath("//div[@class='cell']//strong[text()][1]").invoke('text').then(($clin1) => {
    //         cy.wrap($clin1).as('AppTitle');
    //    })
            cy.contains('a', 'Checklist').click();
        });
        this.saveTitle();
    }

    completeSOSection(){

        this.clickEvaluation();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']//p", options: this.typeOptions },
            ])
        this.selectAimStatus();
        this.clickSave();
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

    SelectApplication(Report){
        cy.get('@AppTitle').then(($text) => {
            const reportName = Report.trim();
        cy.xpath(`(//div[@class='table'])[2]//div[contains(normalize-space(), '${$text.trim()}') and contains(normalize-space(), '${reportName}')]`).first().closest('.typicalrow')
        .within(() => {
            cy.contains('a', 'Checklist').click();
             })
});
    }

    completeGMOSection() {

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
    checkChecklist(){
        cy.xpath("//a[@name='Grants Management']").click();
        cy.xpath("(//a[@name='Manage Grants'])[1]").click();
        cy.get('@AppTitle').then(($Tit)=> {
        cy.xpath("//input[@id='search_grant_number']").type($Tit.trim());
    })
        cy.xpath("//button[@type='submit']").click();
        cy.xpath("//a[text()='Reports Schedule']").click();
}
    clickPublication(){
        cy.xpath("//a[text()='Publications and Inventions']").click();
    }
    clickAdministrate(){
        cy.xpath("//a[text()='Administrative Review']").click();
    }
    saveTitle(){
        cy.xpath("(//div[@class='section']//div[@class='title'])[1]").invoke('text').then(($title) =>{
            cy.wrap($title).as('AppTitle')
            })
        }
        selectAimStatus() {
            cy.get('input[type="radio"][id^="assessment_project_milestone_details_"]').filter(':visible').each(($radioButton) => {
                // Check if the radio button is disabled
                const isDisabled = $radioButton.prop('disabled');

                // If it's not disabled, click on it
                if (!isDisabled) {
                    cy.wrap($radioButton).click();
                }
            });
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
    clickPublicSummary(){
        cy.xpath("//a[text()='Public Summary of Scientific Progress']").click();
    }
    clickEvaluation(){
        cy.xpath("//a[text()='Evaluation and Status of Milestones or Aims']").click();
    }
    clickSave(){
        cy.get("button[type='submit'][value='Save']").click();
    }
    clickSubmit(){
        cy.get("button[type='submit'][value='Submit']").click();
    }
}




export default ClinicalChecklist;
