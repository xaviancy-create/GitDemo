class CritiqueAssignment{
    checkOptions = { check: true };
    completeSection(){
        this.clickCritiqueAssignment();
        cy.get('[id^="review_reviewable_team_membership_assignments_"]:even').check();
        cy.get("#critiques_published").check();

        this.clickSave();
    }
    clickCritiqueAssignment(){
        cy.xpath("(//a[text()='Critique Assignments'])[2]").click();
    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click();
    }
}

export default CritiqueAssignment;
