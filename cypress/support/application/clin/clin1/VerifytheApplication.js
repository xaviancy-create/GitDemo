class VerifyTheApplication{

    AooSubmitApplication(application_number){
        // click the application's Edit link
        cy.xpath("//div[@id='apps_in_progress']")
            .get("td").contains(application_number)
            .parent().parent().find("a").contains("Edit").click();
        // Submit the application
        cy.submitDeliverable(application_number);
    }

    verifyApplicationExists(application_number){
        this.userClickOnFindButton();
        this.userSelectGrantApplication();

        // User fill up the relevant field and click on Apply filters
        this.userEnterstheApplicationNumber(application_number);
        this.userClickApplyFilterButton();

        cy.xpath("//*[@id='full-viewport']/div[2]/div/table/tbody/tr[last()]/td[1]/a").should('include.text', application_number.trim())
    }
    userClickOnFindButton(){
        cy.xpath("//a[@name='Find']").click();
    }
    userSelectGrantApplication(){
        cy.xpath("//a[@name='Grant Applications']").click();
    }
    userEnterstheApplicationNumber(application_number) {
        cy.xpath("//input[@name='filter_criteria[application_number]']").type(application_number.trim());
    }
    userClickApplyFilterButton(){
        cy.xpath("(//button[@name='commit'])[1]").click({force:true});

    }


}

export default VerifyTheApplication;
