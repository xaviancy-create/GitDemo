class Financial{


    completeSection(program){

        this.clickStartandView();
        this.clickQuartelyFinancialSummary();
        this.typeProjectExpenditure();
        this.clickonSave();
        this.clickSufficientFunds();
        this.typeDate();
        this.clickonSave();
        cy.xpath(`//a[contains(text(),'Grant: ${program}-')]`).click();
        this.clickDetails();
        this.clickFAOO();
        this.clickFinancialAOO();

    }


    clickreportSchedule(){
        cy.xpath("//a[text()='Reports Schedule']").click()
    }
    clickAddScheduleItems(){
        cy.xpath("//a[text()='Add Schedule Item']").click();
    }
    selectReportType(){
        cy.xpath("//select[@name='grant_requirement_spec[def_type_name]']").select("Clinical Quarterly Progress Report");
    }
    selectReportTypeFinancial(){
        cy.xpath("//select[@name='grant_requirement_spec[def_type_name]']").select("Clinical Quarterly Financial Report");
    }
    selectReviewCheckList(){
        cy.xpath("//select[@name='grant_requirement_spec[assessment_type_name]']").select("CIRM 2.0 Final Full Progress Report Checklist");
    }
    reportingPeriodName(){
        cy.xpath("//input[@name='grant_schedule_item[period_name]']").type("Year1");
    }
    reportingPeriodStart(){
        cy.xpath("//input[@name='grant_schedule_item[start_date]']").type("03/01/2023");
        cy.xpath("//label[text()='Reporting Period Name']").click();
    }
    reportingPeriodEnd(){
        cy.xpath("//input[@name='grant_schedule_item[end_date]']").type("10/12/2023");
        cy.xpath("//label[text()='Reporting Period Name']").click();
    }
    clickonSave(){
        cy.xpath("//button[@type='submit']").click();
    }
    ClickBacktoGrant(){
        cy.xpath("//a[contains(text(),'Back to Grant')]").click();
    }
    clickStartandView(){
            cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").each(($el,index) => {
                const storetext = $el.text();
                if(storetext.includes("Start")){
                    cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("Start").click();
                    cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("View").click();
                }
        })
    }
    clickQuartelyFinancialSummary(){
        cy.xpath("//a[text()='Quarterly Financial Summary']").click();
    }
    typeProjectExpenditure(){
        cy.xpath("//input[@id='1_cirm_cumulative_total_expenditure']").type("200000")
        cy.xpath("//input[@id='1_grantee_cofunding_total_expenditure']").type("160000")
        cy.xpath("//input[@id='1_grantee_contingency_total_expenditure']").type("140000")
    }
    clickSufficientFunds(){
        cy.xpath("//a[text()='Sufficient Funds']").click()
    }
    typeDate(){
        cy.xpath("//input[@class='date-entry hasDatepicker']").type("12/31/2023")
    }
    clickGrant(){
        cy.xpath("//a[contains(text(),'Grant: CLIN1-')]").click()
    }
    clickDetails(){
        cy.xpath("//a[text()='Details']").click()
    }
    clickFAOO(){
        cy.xpath("(//a[@id='become_user_glyph'])[3]").click({force:true});
    }
    clickFinancialAOO(){
        cy.xpath("//a[text()='Financial AOO']").click();
    }

}

export default Financial;
