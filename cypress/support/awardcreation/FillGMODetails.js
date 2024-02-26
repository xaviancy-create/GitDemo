import {lorem} from '../lorem';
class FillGMODetails{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };
    completeSection(){
        this.clickFindbutton();
        this.clickUsers();
        cy.fixture('GMSLogin.json').then((fixtureData) => {
            cy.get("input[id='search_email']").type(fixtureData.GMOMail);
        })
        this.clickFindUser();
        this.clickUserGlyph();
    }
    completeGMODetails(){
        this.selectStartDate();
        this.selectEndDate();
        this.clickSave();
        this.clickInstitutionEligibility();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_institution_eligibility_'][id$='_approved']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickPIEligibility();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_pi_eligilibility_'][id$='_approved']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickBudget();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_budget_'][id$='_approved']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickFacilitiesCost();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_facilities_cost_'][id$='_approved']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickConditionsOnAward();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_conditions_on_award_approval_'][id$='_approved']", options: this.checkOptions },
            { get: "input[type='radio'][id^='checklist_'][id*='_conditions_on_award_required_'][id$='__required']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickSubmit();
    }


    clickAOO(){
        cy.xpath("(//a[@id='become_user_glyph'])[2]").click({force:true})
    }

    clickFindbutton(){
        cy.xpath("//a[@name='Find']").click();
    }
    clickUsers(){
        cy.xpath("//a[@name='Users']").click();
    }
    clickFindUser(){
        cy.get("button[type='submit']").click();
    }
    clickUserGlyph(){
        cy.xpath("//a[@id='become_user_glyph']").click({force:true});
    }
    selectStartDate(){
        cy.xpath("//select[@name='grant_dates[start_date(2i)]']").select("Mar");
        cy.xpath("//select[@name='grant_dates[start_date(3i)]']").select("31");
        cy.xpath("//select[@name='grant_dates[start_date(1i)]']").select("2024");
    }
    selectEndDate(){
        cy.xpath("//select[@name='grant_dates[end_date(2i)]']").select("Dec");
        cy.xpath("//select[@name='grant_dates[end_date(3i)]']").select("31");
        cy.xpath("//select[@name='grant_dates[end_date(1i)]']").select("2024");
    }
    clickSave(){
        cy.get("button[value='Save']").click();
    }
    clickInstitutionEligibility(){
        cy.xpath("//a[text()='Institution Eligibility']").click();
    }
    clickPIEligibility(){
        cy.xpath("//a[text()='PI Eligibility']").click();
    }
    clickBudget(){
        cy.xpath("//a[text()='Budget']").click();
    }
    clickFacilitiesCost(){
        cy.xpath("//a[text()='Facilities Cost']").click();
    }
    clickConditionsOnAward(){
        cy.xpath("//a[text()='Conditions On Award']").click();
    }
    clickSubmit(){
        cy.get("button[type='Submit'][id='submit_button']").click();
    }
}

export default FillGMODetails;
