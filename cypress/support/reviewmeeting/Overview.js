class Overview{

    completeSection(){
        this.clickOverview();
        this.clickGWGStartDate();
        this.selectStartDate();
        this.clickSave();

    }

    clickOverview(){
        cy.xpath("//a[text()='Overview']").click();
    }
    clickGWGStartDate(){
        cy.get("#review_milestones_gwg_meeting_start").click();
    }
    selectStartDate(){
        cy.xpath("//a[@aria-current='true']//preceding::td[2]").click();
    }
    clickSave(){
        cy.xpath("//*[@type='submit']").click();
    }
}

export default Overview;
