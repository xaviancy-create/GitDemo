class Payee{


    completeSection(){
        this.clickPayee();
        this.clickNewPayees();
        this.typeContactInformation();
        this.clickSave();
        this.clickGrantManagement();
        this.clickManagePayments();
        cy.fixture('GMSLogin.json').then((fixtureData) => {
            cy.get("#filter_gmo_id").select(fixtureData.GMO);
        })
        this.selectInstitution();
        this.clickApplyFilter();
        this.selectFirstApplicationPayment();
        this.clickCreatePaymentMemos();
        this.clickCreateClaimSchedule();
        this.GetClaimNumber();
        this.clickGrantManagement();
        this.selectCliamSchedule();
        this.selectResponsibleDepartment();
        this.typeClaimScheduleNumber();
        this.clickApplyFilter();
        this.clickSendNow();
    }

    clickPayee(){
        cy.xpath("//a[text()='Payees']").click();
    }
    clickNewPayees(){
        cy.xpath("//a[text()='New Payee']").click();
    }
    typeContactInformation(){
        cy.xpath("//input[@id='contact_email']").type("jsmith@elpida.com")
        cy.xpath("//input[@id='contact_first_name']").type("John")
        cy.xpath("//input[@id='contact_last_name']").type("Smith")
        cy.xpath("//input[@id='contact_address_attributes_address1']").type("1000 main street")
        cy.xpath("//input[@id='contact_address_attributes_city']").type("San Francisco")
        cy.xpath("//input[@id='contact_address_attributes_state']").type("CA")
        cy.xpath("//input[@id='contact_address_attributes_postal']").type("94109")
        cy.xpath("//input[@id='payee_fiscal_vendor_number']").type("12345")
    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickGrantManagement(){
        cy.xpath("//a[@name='Grants Management']").click();
    }
    clickManagePayments(){
        cy.xpath("//a[text()='Manage Payments']").click();
    }
    selectInstitution(){
        cy.xpath("//select[@id='filter_institution_id']").select("Calibr")
    }
    clickApplyFilter(){
        cy.xpath("//button[@type='submit']").click()
    }
    selectFirstApplicationPayment(){
        cy.xpath("(//input[@type='checkbox'])[last()-1]").click()
    }
    clickCreatePaymentMemos(){
        cy.xpath("//button[@name='mk_memos']").click()
    }
    clickCreateClaimSchedule(){
        cy.xpath("//button[@name='new_claim_sched']").click();
    }
    GetClaimNumber(){
        cy.xpath("(//a[contains(text(),'C0000')])[last()]").invoke('text').then(($Txt) =>{
        cy.wrap($Txt).as('Claim')
        })
    }
    selectCliamSchedule(){
        cy.xpath("(//a[@name='Claim Schedules'])[1]").click()
    }
    selectResponsibleDepartment(){
        cy.xpath("//select[@name='filter[owner_dept]']").select("Grants Management")
    }
    typeClaimScheduleNumber(){
        cy.get('@Claim').then(($Clm) => {
        cy.xpath("//input[@name='filter[claim_schedule_number]']").type($Clm)
        })
    }
    clickSendNow(){
        cy.xpath("//button[@type='submit'][text()='Save Claim Schedule']").click();
    }
}

export default Payee;
