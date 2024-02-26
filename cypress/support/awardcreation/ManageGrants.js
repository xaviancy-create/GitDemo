class ManageGrants{


    completeSection(){
        this.clickGrantManagementbutton();
        this.selectManageGrants();
        cy.fixture('GMSLogin.json').then((fixtureData) => {
            cy.get("#grant_search_criteria_gmo_user_id").select(fixtureData.GMO);
            cy.get("#grant_search_criteria_so_user_id").select(fixtureData.SO);
            cy.get("#search_pi_last_name").type(fixtureData.PI);
        })
        this.clickFindGrants();
    }



    clickGrantManagementbutton(){
        cy.xpath("//a[@name='Grants Management']").click();
    }
    selectManageGrants(){
        cy.xpath("(//a[@name='Manage Grants'])[1]").click();
    }
    clickFindGrants(){
        cy.xpath("//button[@type='submit']").click();
    }

}

export default ManageGrants;
