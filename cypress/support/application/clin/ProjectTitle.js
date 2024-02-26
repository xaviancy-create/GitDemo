import {lorem} from "../../lorem";

class ProjectTitle {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

    completeSection() {
        cy.xpath("//a[text()='Project Title']").click();
        cy.withSelected([
            { xpath: "//textarea[@class='width-of-parent']", options: this.typeOptions },
        ]);
        cy.xpath("//button[@name='commit']").click();
    }

}

export default ProjectTitle;
