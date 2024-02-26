class Keywords {

    checkOptions = { check: true };

    completeSection() {
        cy.xpath("//a[text()='Keywords']").click();
        cy.withSelected([
            { get: "input[type=checkbox][id^=stem_cell_focus_][id*=_stem_cell_focus_][id$=_pluripotent]", options: this.checkOptions},
            { get: "input[type=checkbox][id^=outcome_][id*=_outcome_][id$=_investigating_stem_cells_as_tools]", options: this.checkOptions},
            { get: "input[type=checkbox][id^=outcome_][id*=_omics_outcome_][id$=_metabolomics_outcomes]", options: this.checkOptions},
            { get: "input[type=checkbox][id^=area_of_impact_][id$=_covid_19]", options: this.checkOptions},
            { get: "input[type=checkbox][id^=bottlenecks_][id$=_imaging_tools]", options: this.checkOptions},
         ]);
        cy.xpath('//button[@name="commit"]').click();
    }

}

export default Keywords;
