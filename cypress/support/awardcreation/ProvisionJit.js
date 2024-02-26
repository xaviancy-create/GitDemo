
let EarliestStartMonth = 'Jan';
let LastStartMonth = 'Mar';
let LastStartYear = '2024';

class ProvisionJit{

    completeSection(){
        this.clickGrantManagementbutton();
        this.selectProvisionJits();
    }
    completeJits(){
        this.clickDueDate();
        this.enterDuedate();
        this.clickEarliestStartDate();
        this.selectEarliestStartDate();
        this.clickLastStartDate();
        this.selectLastStartDate();
        this.clickProvisioJits();

    }


    clickGrantManagementbutton(){
        cy.xpath("//a[@name='Grants Management']").click();
    }
    selectProvisionJits(){
        cy.xpath("//a[@name='Provision JITs']").click();
    }

    clickDueDate(){
        cy.get("#jit_provisioning_defaults_due_date").click();
    }
    enterDuedate(){
        cy.xpath("//td[@class=' ui-datepicker-days-cell-over  ui-datepicker-today']/following-sibling::td[1]").click();
    }

    clickEarliestStartDate(){
        cy.xpath("//input[@name='jit_earliest_start_date']").click();
    }
    selectEarliestStartDate(){
        cy.xpath("//select[@class='ui-datepicker-month']").select(EarliestStartMonth);
        cy.xpath("//button[@type='button'][text()='Done']").click();
    }
    clickLastStartDate(){
        cy.xpath("//input[@name='jit_latest_start_date']").click();
    }
    selectLastStartDate(){
        cy.xpath("//select[@class='ui-datepicker-month']").select(LastStartMonth);
        cy.xpath("//select[@class='ui-datepicker-year']").select(LastStartYear);
        cy.xpath("//button[@type='button'][text()='Done']").click();
    }
    clickProvisioJits(){
        cy.xpath("//input[@type='submit']").click();
    }

}

export default ProvisionJit;
