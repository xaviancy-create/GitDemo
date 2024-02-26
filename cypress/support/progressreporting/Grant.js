const startdate='2/01/2024';
const enddate='7/25/2024';

class Grant{

    completeSection(program){
        this.clickGrantManagementbutton();
        this.selectManageGrants();
        cy.get("input[id='search_grant_number']").type(program+"-167");
        cy.fixture('GMSLogin.json').then((fixtureData) => {
            cy.get("select[id='grant_search_criteria_gmo_user_id']").select(fixtureData.GMO);
            cy.get("select[id='grant_search_criteria_so_user_id']").select(fixtureData.SO);
        })
        cy.get("select[id='grant_search_criteria_status']").select("Active");
        this.clickFindGrants();
        this.selecttheapplication();
        this.selectBudgetYears();
        this.changeEndDate();
        this.changeStartDate();
        this.clickSave();

cy.xpath("//a[text()='Reports Schedule']").click();
cy.get("table[id='progress_reports_tbl']").find('tr').then((rows) => {
    if (rows.length === 1) {
        cy.xpath("//a[text()='Add Schedule Item']").click();
    } else {
        cy.xpath("//table[@id='progress_reports_tbl']//tr//td[7]").each(($el,index,$list)=>{
            const storetext = $el.text();
            if(storetext.includes("Delete")){
                cy.xpath("//table[@id='progress_reports_tbl']//tr//td[7]").contains("Delete").click();
                cy.wait(1000);
            }
        }).then(() => {
            cy.xpath("//a[text()='Reports Schedule']").click();
            cy.xpath("//a[text()='Add Schedule Item']").click();
        });
    }
});

    }
    clickGrantManagementbutton(){
        cy.xpath("//a[@name='Grants Management']").click();
    }
    selectManageGrants(){
        cy.xpath("(//a[@name='Manage Grants'])[1]").click();
    }
    clickFindGrants(){
        cy.xpath("//button[@type='submit']").click();
    }
    selectBudgetYears(){
        cy.xpath("//select[@name='grant[num_budget_years]']").select("2")

    }
    changeStartDate(){
        cy.xpath("//input[@name='grant[start_date]']").clear().wait(100).type(startdate);
        cy.xpath("//label[text()='Grant Manager']").click();
    }
    changeEndDate(){
        cy.xpath("//input[@name='grant[end_date]']").clear().wait(100).type(enddate);
        cy.xpath("//label[text()='Grant Manager']").click();
    }
    clickSave(){
        cy.get("input[type='submit'][value='Save']").click();
    }
    selecttheapplication(){
        cy.xpath("//table[@id='found_grants_tbl']//tbody//tr//td[1]").then(($rows) => {
            const randomIndex = Cypress._.random(0, $rows.length - 1);
            const selectedTitle = $rows.eq(randomIndex).text();
            cy.wrap(selectedTitle).as('AppTitle');
            cy.get($rows).eq(randomIndex).closest('tr').within(() => {
                cy.contains('a', 'Edit').click();
            })
        })
    }
    clickChecklistEDUC(username,Report){
        cy.visit("/users?bc_level=menu")
        cy.get("#search_email").type(username);
        cy.get("button[type='submit']").click();
        cy.get("#become_user_glyph").click({force:true});
        cy.get('@AppTitle').then(($Tit)=> {
        const ls =cy.xpath("(//div[@class='table'])[2]//div//div[1]").contains($Tit + Report).closest('.typicalrow').within(()=>{
            cy.contains('a', 'Checklist').click();
        })

        })
    }
clickGrantApplication(){
    cy.get('@AppTitle').then(($Tit)=> {
        cy.xpath("//div[@id='awards_as_pi']//table//tbody//tr//td[1]").contains($Tit.trim()).closest('tr').within(() => {
            cy.contains("Complete but not Submitted".trim()).contains("Edit").click();
        })
    })
    cy.xpath("//input[@type='submit']").click();
}
clickDelete(){

    const ele=cy.xpath("//table[@id='progress_reports_tbl']//tr//td[7]")
    ele.each(($el, index, $list) => {
        $el.invoke('text').then((storetext) => {
            if (storetext.includes("Delete")) {
                $el.click();
            }
        });
    });
    cy.xpath("//a[text()='Reports Schedule']").click();
}
clickApplicationFinancial(){
    cy.get('@AppTitle').then(($Tit)=> {
        cy.xpath("//div[@id='awards_as_faoo']//table//tbody//tr//td[1]").contains($Tit.trim()).closest('tr').within(() => {
            cy.contains("Complete but not Submitted".trim()).contains("Edit").click()
        })
    })
    cy.xpath("//input[@type='submit']").click();
}
clickGrantApplicationAOO(){
    cy.get('@AppTitle').then(($Tit)=> {
        cy.xpath("(//div[@id='awards_as_aoo'])[1]//table//tbody//tr//td[1]").contains($Tit.trim()).closest('tr').within(() => {
            cy.contains("Complete but not Submitted".trim()).contains("Edit").click()
        })
    })
    cy.xpath("//input[@type='submit'][@class='btn btn-success btn-sm']").click();
}
checkChecklist(){
    cy.xpath("//a[@name='Grants Management']").click();
    cy.xpath("(//a[@name='Manage Grants'])[1]").click();
    cy.get('@AppTitle').then(($Tit)=> {
    cy.xpath("//input[@id='search_grant_number']").type($Tit);
})
cy.xpath("//button[@type='submit']").click();
cy.xpath("//a[text()='Reports Schedule']").click();
}
}

export default Grant;
