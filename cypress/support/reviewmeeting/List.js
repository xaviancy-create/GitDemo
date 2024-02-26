class List{
    clickFirstGWG(){
        cy.xpath("//a[text()='List']").click();
        cy.xpath("(//a[@id='become_user_glyph'])[1]").click({force:true});
    }
    clickSecondGWG(){
        cy.xpath("//a[text()='List']").click();
        cy.xpath("(//a[@id='become_user_glyph'])[2]").click({force:true});
    }
    clickFirstGWGBoard(){
        cy.xpath("//a[text()='List']").click();
        cy.xpath("(//a[@id='become_user_glyph'])[3]").click({force:true});
    }
    clickSecondGWGBoard(){
        cy.xpath("//a[text()='List']").click();
        cy.xpath("(//a[@id='become_user_glyph'])[4]").click({force:true});
    }
    clickFirstspec(){
        cy.xpath("//a[text()='List']").click();
        cy.xpath("(//a[@id='become_user_glyph'])[5]").click({force:true});
    }


}

export default List;
