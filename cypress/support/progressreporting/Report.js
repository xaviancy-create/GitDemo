const startdate='2/01/2024';
const enddate='7/25/2024';
const checklist='CIRM 2.0 Final Full Progress Report Checklist'
const period='Year1';

class Report{

    completeSection({report_type} = {}){


        this.clickReportSchedule();
        this.clickAddScheduleItems();
        cy.get("select").select(report_type, {force:true});
        cy.xpath("//select[@name='grant_requirement_spec[assessment_type_name]']").select(checklist);
        cy.xpath("//input[@name='grant_schedule_item[period_name]']").type(period);
        this.reportingPeriodStart();
        this.reportingPeriodEnd();
        this.clickonSave();
        this.ClickBacktoGrant();
        this.clickStartandView();
    }


    clickAimandmilestone(){
        cy.xpath("//a[text()='Aims/Milestones']").click();
    }
    clickAddAimandMilestone(){
        cy.xpath("//a[text()='Add a new Aim/Milestone']").click();
    }
    typeTitle(){
        cy.xpath("//div[@id='title_input_div']//div[@class='fr-element fr-view']//p").type("Test");
    }
    clickFirstEdit(){
        cy.xpath('//a[text()="Edit"]').eq(0).click();
    }
    selectontrack(){
        cy.xpath("//select[@id='project_milestone_details_status']").select("On Track");
    }
    clickonSave(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickreturn(){
        cy.xpath("//a[text()='Return to Aims/Milestones list']").click();
    }
    clickSecondEdit(){
        cy.xpath('//a[text()="Edit"]').eq(1).click();
    }
    clickReportSchedule(){
        cy.xpath("//a[text()='Reports Schedule']").click();
    }
    userClickDelete(){
        cy.xpath("//table[@id='progress_reports_tbl']//tr//td[7]").each(($el,index,$list)=>{
            const storetext = $el.text();
            if(storetext.includes("Delete")){
                cy.xpath("//table[@id='progress_reports_tbl']//tr//td[7]").eq(index).contains("Delete").click();
            }
        })

    }
    clickAddScheduleItems(){
        cy.xpath("//a[text()='Add Schedule Item']").click();
    }
    selectReportType(){
        cy.xpath("//select[@name='grant_requirement_spec[def_type_name]']").select("Clinical Quarterly Progress Report");
    }
    selectReviewCheckList(){
        cy.xpath("//select[@name='grant_requirement_spec[assessment_type_name]']").select("CIRM 2.0 Final Full Progress Report Checklist");
    }
    reportingPeriodName(){
        cy.xpath("//input[@name='grant_schedule_item[period_name]']").type("Year1");
    }
    reportingPeriodStart(){
        cy.xpath("//input[@name='grant_schedule_item[start_date]']").type(startdate);
        cy.xpath("//label[text()='Reporting Period Name']").click();
    }
    reportingPeriodEnd(){
        cy.xpath("//input[@name='grant_schedule_item[end_date]']").type(enddate);
        cy.xpath("//label[text()='Reporting Period Name']").click();
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
}

export default Report
