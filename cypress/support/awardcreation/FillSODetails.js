import {lorem} from '../lorem';
class FillSODetails{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };
    completeSection(){
        this.clickFindbutton();
        this.clickUsers();
        cy.fixture('GMSLogin.json').then((fixtureData) => {
            cy.get("input[id='search_email']").type(fixtureData.SOMail);
        })
        this.clickFindUser();
        this.clickUserGlyph();
    }
    completeSODetails(){
        this.clickProjectObjective();
        cy.withSelected([
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickScientificOverlap();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_scientific_overlap_'][id$='_approved']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickIACUCAssurances();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_iacuc_approval_'][id$='_approved']", options: this.checkOptions },
            { get: "input[type='radio'][id^='checklist_'][id*='_iacuc_required_'][id$='__required']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickIRB();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_irb_approval_'][id$='_approved']", options: this.checkOptions },
            { get: "input[type='radio'][id^='checklist_'][id*='_irb_required_'][id$='__required']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickSCRO();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_scro_approval_'][id$='_approved']", options: this.checkOptions },
            { get: "input[type='radio'][id^='checklist_'][id*='_scro_required_'][id$='__required']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickConditionsAward();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_conditions_on_award_approval_'][id$='_approved']", options: this.checkOptions },
            { get: "input[type='radio'][id^='checklist_'][id*='_conditions_on_award_required_'][id$='__required']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickTarget();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='checklist_'][id*='_target_technology_approval_'][id$='_approved']", options: this.checkOptions },
            { get: "input[type='radio'][id^='checklist_'][id*='_target_technology_required_'][id$='__required']", options: this.checkOptions },
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickScientificCoding();
        this.clickViewScientificCoding();
        this.clickShowCategories();
        this.clickSave();
        this.clickBacktoChecklist();
        cy.withSelected([
            { get: "textarea[class='width-of-parent']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickSubmit();

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
    clickProjectObjective(){
        cy.xpath("//a[text()='Project Objective']").click();
    }
    clickScientificOverlap(){
        cy.xpath("//a[text()='Scientific Overlap']").click();
    }
    clickIACUCAssurances(){
        cy.xpath("//a[text()='IACUC Assurances']").click();
    }
    clickIRB(){
        cy.xpath("//a[text()='IRB']").click();
    }
    clickSCRO(){
        cy.xpath("//a[text()='SCRO']").click();
    }
    clickConditionsAward(){
        cy.xpath("//a[text()='Conditions On Award']").click();
    }
    clickTarget(){
        cy.xpath("//a[text()='Target CIRM-Funded Technology']").click();
    }
    clickScientificCoding(){
        cy.xpath("//a[text()='Scientific Coding']").click();
    }
    clickViewScientificCoding(){
        cy.xpath("//a[text()='View/Edit Scientific Coding']").click();
    }
    clickShowCategories(){
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("//span[text()='Fundamental']").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("//span[text()='Clinical Trial, Phase 1']").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("//span[text()='Development Candidate']").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("//span[text()='Brain Tumor']").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("//span[text()='Allogeneic']").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("//span[text()='Preclinical Development Plan']").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("//span[text()='Model System']").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("//span[text()='Germ Cells']").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("(//span[text()='Age Specific'])[1]").click({force:true});
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("(//span[text()='Apoptosis'])[1]").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("(//span[text()='Prepared under GMP'])[2]").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("(//span[text()='3D Culture'])[1]").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("(//span[text()='IPEX Syndrome'])[1]").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("(//span[text()='iPS Cell'])[1]").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("(//span[text()='Cancer Stem Cell'])[2]").click();
        cy.xpath("(//a[text()='Show Categories'])[1]").click();
        cy.xpath("(//span[text()='Tissue engineering'])[1]").click();
    }
    clickSubmit(){
        cy.xpath("//button[@type='submit'][text()='Submit']").click();
    }
    clickBacktoChecklist(){
        cy.xpath("//a[text()='Back to Checklist']").click();
    }
    clickSave(){
        cy.get("button[value='Save']").click();
    }

}

export default FillSODetails;
