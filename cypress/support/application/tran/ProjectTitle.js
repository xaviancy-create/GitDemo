import {lorem} from "../../lorem";

class ProjectTitle {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeDurationOptions = { type: function(options, index) { return "20" } };

    completeSection() {
        cy.xpath("//a[text()='Title & Duration']").click();
        cy.withSelected([
            { xpath: "//textarea[@class='width-of-parent']", options: this.typeOptions },
            { xpath: "(//span[@class='end-user-text']//textarea)[2]", options: this.typeDurationOptions },
        ]);
        cy.xpath("//button[@name='commit']").click();
    }

}

export default ProjectTitle;