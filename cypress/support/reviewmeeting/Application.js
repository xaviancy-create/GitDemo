

class Application{
    completeSection(){
        this.clickApplication();
        this.clickSearchfornewApplication();
        cy.get("#filter_criteria_withdrawn").select("not withdrawn");
        cy.get("#filter_criteria_review_status").select("unscreened");
        cy.get("#filter_criteria_superseded").select("not superseded");
        this.clickApplyfilter();
        this.selecttheapplication();
        this.clickAddselectedApplication();
    }
    clickApplication(){
        cy.xpath("//a[text()='Applications']").click();
    }
    clickSearchfornewApplication(){
        cy.xpath("//a[text()='Search for New Applications']").click();
    }
    clickApplyfilter(){
        cy.xpath("//button[text()='Apply Filter']").click();
    }
    selecttheapplication(){
        cy.get('input[type="checkbox"]').then(($checkboxes) => {
            const randomIndices = Cypress._.sampleSize(Cypress._.range($checkboxes.length), 2);
            randomIndices.forEach((index) => {
                cy.wrap($checkboxes[index]).check();
            });
        })

    }
    clickAddselectedApplication(){
        cy.xpath("(//button[@value='Add Selected Applications'])[2]").click();
    }
}


export default Application;
