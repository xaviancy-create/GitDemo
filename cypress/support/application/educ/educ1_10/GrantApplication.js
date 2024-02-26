class GrantApplication {

    addaoodetails='//*[@id="AooSectionDef_div"]/table/tbody[2]/tr[2]/td[3]/a';
    btnsave='//button[@name="commit"]';

    completeSection({ section_title = "Program Director and AOO", aoo_select_details } = {}){
        cy.xpath(`//a[text()='${section_title}']`).click();
        this.clickPIEditLink();
        cy.xpath('//button[@name="commit"]').click();
        this.addAOODetails();
        cy.get("select").select(aoo_select_details, {force:true});
        cy.xpath('//button[@name="commit"]').click();
    }

    clickPIEditLink(){
        cy.xpath("//a[text()='Edit']").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }

    addAOODetails(){
        cy.xpath('//*[@id="AooSectionDef_div"]/table/tbody[2]/tr[2]/td[3]/a').click();
    }

}

export default GrantApplication;
