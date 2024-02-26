

class COIList{

    completeSection(){
        this.clickCOIList();
        this.clickPublishthelist();
    }

    clickCOIList(){
        cy.xpath("//a[text()='COI List (create)']").click();
    }
    clickPublishthelist(){
        cy.xpath("//button[text()='Publish this COI List']").click();
    }

}

export default COIList;
