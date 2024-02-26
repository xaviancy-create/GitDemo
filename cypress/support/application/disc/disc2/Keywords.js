import {lorem} from '../../../lorem';
class Keywords {
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
        cy.xpath("//a[text()='Keywords']").click();
        cy.withSelected([
            { get: "input[type='radio'][value='pluripotent']", options: this.checkOptions},
            { get: "input[type=radio][value='tool']", options: this.checkOptions},
            { get: "input[type=checkbox][id^=area_of_impact_][id*=_blood_cells_disorders]", options: this.checkOptions},
            { get: "input[type=checkbox][id^=bottlenecks_][id$=_bioinformatics]", options: this.checkOptions},
            { xpath: "//span[@class='end-user-text']//textarea", options: this.typeOptions},
         ]);
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default Keywords;
