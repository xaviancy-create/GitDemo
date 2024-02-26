class PIAOOSubmit{

    completeSection(){
        this.clickreportSchedule();
        this.clickDetails();
        this.clickAOO();
        this.clickAOOTask();
    }
    clickreportSchedule(){
        cy.xpath("//a[text()='Reports Schedule']").click()
    }
    clickDetails(){
        cy.xpath("//a[text()='Details']").click()
    }
    clickAOO(){
        cy.xpath("(//a[@id='become_user_glyph'])[2]").click({force:true});
    }
    clickAOOTask(){
        cy.xpath("(//a[text()='AOO'])[2]").click();
    }

}

export default PIAOOSubmit;
