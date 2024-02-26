class Checklist{
    completeSection(username){
        cy.visit("/users?bc_level=menu")
        cy.get("#search_email").type(username);
        cy.get("button[type='submit']").click();
        cy.get("#become_user_glyph").click({force:true});

    }
}
export default Checklist;
