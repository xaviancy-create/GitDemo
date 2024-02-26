import {lorem} from "../lorem";

class PublicInformation {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

    completeSection() {
        cy.xpath("//a[text()='Public Information']").click();
        cy.withSelected([
            { xpath: "//textarea", options: this.typeOptions },
        ]);
        cy.xpath('//button[@name="commit"]').click();
    }

}

export default PublicInformation;
