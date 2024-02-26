import {lorem} from "../../lorem";

class ProjectTitle {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

    completeSection() {
        cy.xpath("//a[text()='Title and Summary']").click();
        cy.withSelected([
            { xpath: "//textarea", options: this.typeOptions },
        ]);
        cy.xpath("//button[@name='commit']").click();
    }

}

export default ProjectTitle;