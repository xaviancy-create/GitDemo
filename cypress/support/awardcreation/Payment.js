class Payment{

    checkOptions = { check: true };
    typeDate = { type: function(options, index) { return "08/31/2024" } };
    typeDate2 = { type: function(options, index) { return "09/31/2024" } };
    typeCost = { type: function(options, index) { return "50000" } };
    typeYear = { type: function(options, index) { return "2024" } };
completeSection(){

    this.clickPayments();
    this.clickAddSchedulePayment();
    cy.withSelected([
        { get: "#scheduled_payment_on_hold", options: this.checkOptions },
        { get: "input[id='project_milestone_nga_target_completion']", options: this.typeDate },
    ])
    this.clickDate();
    cy.withSelected([
        { get: "#scheduled_payment_amount", options: this.typeCost },
        { get: "#scheduled_payment_budget_year", options: this.typeYear },
    ])
    this.selectFundingSource();
    this.selectoperationalMilestone();
    this.clickSave();
    this.clickAddSchedulePayment();
    cy.withSelected([
        { get: "#scheduled_payment_on_hold", options: this.checkOptions },
        { get: "input[id='project_milestone_nga_target_completion']", options: this.typeDate2 },
    ])
    this.clickDate();
    cy.withSelected([
        { get: "#scheduled_payment_amount", options: this.typeCost },
        { get: "#scheduled_payment_budget_year", options: this.typeYear },
    ])
    this.selectFundingSource();
    this.selectoperationalMilestone2();
    this.clickSave();
}

    clickPayments(){
        cy.xpath("//a[text()='Payments']").click();
    }
    clickAddSchedulePayment(){
        cy.xpath("//a[text()='Add A Scheduled Payment']").click();
    }
    clickDate(){
        cy.get("input[id='project_milestone_nga_target_completion']").click();
    }
    selectFundingSource(){
        cy.xpath("//select[@name='scheduled_payment[funding_source_id]']").select("6091304-6445-1987-506-11-T");
    }
    selectoperationalMilestone(){
        cy.xpath("//select[@name='scheduled_payment[project_milestone_id]']").select("OM#1")
    }
    selectoperationalMilestone2(){
        cy.xpath("//select[@name='scheduled_payment[project_milestone_id]']").select("OM#2")
    }
    clickSave(){
        cy.get("button[value='Save']").click();
    }
}

export default Payment;
