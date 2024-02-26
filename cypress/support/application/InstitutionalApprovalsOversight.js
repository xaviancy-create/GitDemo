class InstitutionalApprovalsOversight {

    checkOptions = { check: true };

    completeSection() {
        this.clickInstitutionalApprovalsOversightLink();
        cy.withSelected([
            { get: "input[type='radio'][id^=stem_cell_research_oversight_][id*=_use_human_oocyte_][id$=__yes]", options: this.checkOptions },
            { get: "input[type='radio'][id^=stem_cell_research_oversight_][id*=_use_human_invitro_embryo_][id$=__yes]", options: this.checkOptions },
            { get: "input[type='radio'][id^=stem_cell_research_oversight_][id*=_introduce_covered_stem_cell_line_into_an_animal_][id$=__yes]", options: this.checkOptions },
            { get: "input[type='radio'][id^=human_subject_use_section_][id*=_use_human_subject_][id$=__yes]", options: this.checkOptions },
            { get: "input[type='radio'][id^=vertebrate_animals_section_][id*=_uses_vertebrate_animal_][id$=__yes]", options: this.checkOptions },
            { get: "input[type='checkbox'][id^=regulatory_assurances_certification_][id*=_certification]", options: this.checkOptions },

        ]);
        this.clickSaveBtn();
    }

    clickInstitutionalApprovalsOversightLink(){

        cy.xpath("//a[text()='Institutional Approvals and Oversight']").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@name='commit']").click();
    }
}

export default InstitutionalApprovalsOversight;
