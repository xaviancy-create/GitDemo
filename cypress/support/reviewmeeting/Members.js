

class Members{
    checkOptions = { check: true };
    completeSection(){
        this.clickMembers();
        this.clickSearchfornewmembers();
        cy.withSelected([
            { get: "input[name='team_member_search_criteria[show_active_roles_last_60_days]']:visible", options: this.checkOptions },
            { get: "input[id='team_member_search_criteria_review_prior_roles_gwg']:visible", options: this.checkOptions },
            { get: "input[id='team_member_search_criteria_review_prior_roles_specialist']:visible", options: this.checkOptions },
            { get: "input[id='team_member_search_criteria_review_prior_roles_gwg_board']:visible", options: this.checkOptions },
        ])

        this.clickFinduser();
        this.selectMembers();
        this.clickAddTeammembers();
    }
    clickMembers(){
        cy.xpath("//a[text()='Members']").click();
    }
    clickSearchfornewmembers(){
        cy.xpath("//a[text()='Search for New Members']").click();
    }
    clickFinduser(){
        cy.xpath("//button[text()='Find Users']").click();
    }
    clickAddTeammembers(){
        cy.xpath("(//button[@value='Add Team Members'])[2]").click();
    }
    selectMembers(){
        cy.xpath("//input[@class='user_role_checkboxes'][following-sibling::text()[contains(., 'SMRFWG Member')]]").filter(':visible').eq(0).check();
        cy.xpath("//input[@class='user_role_checkboxes'][following-sibling::text()[contains(., 'SMRFWG Member')]]").filter(':visible').eq(1).check();
        cy.xpath("//input[@class='user_role_checkboxes'][2][following-sibling::text()[contains(.,'Specialist')]]").filter(':visible').eq(2).check();
        cy.xpath("//input[@class='user_role_checkboxes'][3][following-sibling::text()[contains(.,'GWG Board Member')]]").filter(':visible').eq(3).check();
        cy.xpath("//input[@class='user_role_checkboxes'][3][following-sibling::text()[contains(.,'GWG Board Member')]]").filter(':visible').eq(4).check();
    }


}

export default Members;
