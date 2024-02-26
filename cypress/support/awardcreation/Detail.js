class Detail{

    completeSection(){
        this.clickDetails();
        this.selectExpenditureCode();
        this.selectGrantStatus();
        this.clickSave();
    }

    clickDetails(){
        cy.xpath("//a[text()='Details']").click();
    }
    selectExpenditureCode(){
        cy.xpath("//select[@name='grant[expenditure_code_id]']").select("Grants-For-Profit 64451000-5432500004-9990000601");
    }
    selectGrantStatus(){
        cy.xpath("//select[@name='grant[status]']").select("Active");
    }
    clickSave(){
        cy.get("input[value='Save']").click();
    }
}

export default Detail;
