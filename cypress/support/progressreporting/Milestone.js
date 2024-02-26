import {lorem} from '../lorem';
class Milestone{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(program){

        this.clickStartandView();
        this.clickScientificProgress();
        cy.withSelected([
            { xpath: '//div[@class="fr-element fr-view"]', options: this.typeOptions },
        ])
        this.selectMilestone1Status();
        this.Milestone1Date();
        this.selectMilestone2Status();
        this.Milestone2Date();
        this.clickonSave();
        cy.xpath(`//a[contains(text(),'Grant: ${program}-')]`).click();
        this.clickDetails();
        this.clickPILogin();
        this.clickYourAwards();

    }


    clickonSave(){
        cy.xpath("//button[@type='submit']").click();
    }
    ClickBacktoGrant(){
        cy.xpath("//a[contains(text(),'Back to Grant')]").click();
    }
    clickStartandView(){
            cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").each(($el,index) => {
                const storetext = $el.text();
                if(storetext.includes("Start")){
                    cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("Start").click();
                    cy.wait(1000);
                    cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("View").click();
                }
        })
    }
    clickScientificProgress(){
        cy.xpath("//a[text()='Scientific Progress']").click();
    }
    selectMilestone1Status(){
        cy.xpath("(//select[@class='status_selector'])[1]").select("Completed")
    }
    Milestone1Date(){
        cy.xpath("(//select[@id])[4]").select("Feb")
        cy.xpath("(//select[@id])[5]").select("9")
        cy.xpath("(//select[@id])[6]").select("2024")
    }
    selectMilestone2Status(){
        cy.xpath("(//select[@class='status_selector'])[2]").select("In Progress")
    }
    Milestone2Date(){
        cy.xpath("(//select[@id])[8]").select("Nov")
        cy.xpath("(//select[@id])[9]").select("2024")
    }
    clickDetails(){
        cy.xpath("//a[text()='Details']").click()
    }
    clickPILogin(){
        cy.xpath("(//a[@id='become_user_glyph'])[1]").click({force:true})
    }
    clickYourAwards(){
        cy.xpath("(//a[text()='Your Awards'])[2]").click()
    }
    clickAOO(){
        cy.xpath("(//a[@id='become_user_glyph'])[2]").click({force:true});
    }
    clickAOOTask(){
        cy.xpath("(//a[text()='AOO'])[2]").click();
    }
    clickreportSchedule(){
        cy.xpath("//a[text()='Reports Schedule']").click()
    }
}

export default Milestone;
