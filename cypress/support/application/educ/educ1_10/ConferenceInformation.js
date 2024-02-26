class ConferenceInformation{

    title = { type: function(options, index) { return "Test Automation" } };
    startdate = { type: function(options, index) { return "24/05/2023" } };
    enddate = { type: function(options, index) { return "24/05/2023" } };

    completeSection(){

        this.clickConferenceInfoLink();
        cy.withSelected([
            { xpath: "//textarea[@class='width-of-parent']", options: this.title },
            { xpath: "(//textarea[@cols='40'])[1]", options: this.startdate },
            { xpath: "(//textarea[@cols='40'])[2]", options: this.enddate },

        ]);
        this.clickSaveBtn();
    }
    clickConferenceInfoLink(){
        cy.xpath('//a[text()="Conference Information"]').click();
    }
    // addConferenceTitle(title){
    //     cy.xpath('//*[@id="edit_deliverable"]/div/div/div[2]/label').click({force:true}).type(title);
    // }
    // addConStartDate(start_date){
    //     cy.xpath('(//textarea[@cols="40"])[1]').type(start_date);
    // }
    // addConEndDate(end_date){
    //     cy.xpath('(//textarea[@cols="40"])[2]').type(end_date);
    // }
    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}
export default ConferenceInformation;
