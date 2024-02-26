class GrantApplication {



    completeSection({ section_title = "Program Director and AOO", aoo_select_details } = {}){
        cy.xpath(`//a[text()='${section_title}']`).click();
        this.clickPIEditLink();
        this.typeKeyPersonRole();
        this.clickSaveBtn();
        this.addAOODetails();
        cy.get("select").select(aoo_select_details, {force:true});
        this.clickSaveBtn();
    }

    clickPIEditLink(){
        cy.xpath("//a[text()='Edit']").click();
    }

    typeKeyPersonRole(){
        cy.xpath("//textarea[@id='key_person_role_description']").type("Test");
    }

    clickSaveBtn(){
        cy.xpath("//button[@name='commit']").click();
    }

    addAOODetails(){
        cy.xpath('//*[@id="AooSectionDef_div"]/table/tbody[2]/tr[2]/td[3]/a').click();
    }

}

export default GrantApplication;
