class FinalScore{

    completeSection(){
    this.clickFinalScore();
    this.clickLockthefinalscore();
    this.clickSave();
    }
    clickFinalScore(){
        cy.xpath("//div[@id='left_nav_manage_section']//div//a[text()='Final Scores']").click();
    }
    clickLockthefinalscore(){
        cy.xpath("//tbody[@class='sortable ui-sortable']//tr[1]//td//input[@type='checkbox']").click();
    }
    clickSave(){
        cy.xpath("//p//button[@class='btn btn-primary btn-sm'][@value='Save']").click();
    }
}

export default FinalScore;
