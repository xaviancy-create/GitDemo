class GrantApplication {

    addaoodetails='//*[@id="AooSectionDef_div"]/table/tbody[2]/tr[2]/td[3]/a';
    btnsave='//button[@name="commit"]';

    completeSection({ section_title = "PI and AOO", aoo_select_details } = {}){
        cy.xpath(`//a[text()='${section_title}']`).click();
        this.clickPIEditLink();
        this.typeUserInput();
        this.typeKeyPersonRole();
        cy.xpath('//button[@name="commit"]').click();
        this.addAOODetails();
        cy.get("select").select(aoo_select_details, {force:true});
        cy.xpath('//button[@name="commit"]').click();
    }

    clickPIEditLink(){
        cy.xpath("//a[text()='Edit']").click();
    }

    typeUserInput(){
        cy.xpath("//input[@type='text' and @id='key_person_percent_effort_reporting_period']").type("75");
    }

    typeKeyPersonRole(){
        cy.xpath("//textarea[@id='key_person_role_description']").type("Test");
    }

    clickSaveBtn(){
        cy.xpath(this.btnsave).click();
    }

    addAOODetails(){
        cy.xpath(this.addaoodetails).click();
    }

}

export default GrantApplication;
