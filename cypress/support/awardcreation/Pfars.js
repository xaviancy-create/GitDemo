class Pfars{

    completeSection(){
        this.clickGrantManagementbutton();
        this.selectPFAR();
        cy.fixture('GMSLogin.json').then((fixtureData) => {
            cy.xpath("//select[@name='pfar_grant_search_criteria[gmo_user_id]']").select(fixtureData.GMO);
            cy.xpath("//select[@name='pfar_grant_search_criteria[so_user_id]']").select(fixtureData.SO);
        })
        this.selectAwardStatus();
        this.clickListAwards();
    }

    clickGrantManagementbutton(){
        cy.xpath("//a[@name='Grants Management']").click();
    }
    selectPFAR(){
        cy.xpath("//div[@class='dropdown-menu show']//a[text()='PFAR']").click();
    }
    selectGMO(){
        cy.xpath("//select[@name='pfar_grant_search_criteria[gmo_user_id]']").select("Alexandra Caraballo");
    }
    selectSO(){
        cy.xpath("//select[@name='pfar_grant_search_criteria[so_user_id]']").select("Abla Creasey");
    }
    selectAwardStatus(){
        cy.xpath("//select[@name='pfar_grant_search_criteria[status]']").select("Pre-Active");
    }
    clickListAwards(){
        cy.xpath("//input[@type='submit']").click();
    }
}

export default Pfars;
