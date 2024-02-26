    let typeTargetDateOptions = "01/30/2024";
    let typeAmount = "100000";
class AwardGrants{
    checkOptions = { check: true };

    completeSection(program){
    this.clickGrantManagementbutton();
    this.selectAwardGrants();
    this.selectRFACLIN(program);
    this.clickListApplication();

}

clickGrantManagementbutton(){
    cy.xpath("//a[@name='Grants Management']").click();
}
selectAwardGrants(){
    cy.xpath("//a[@name='Award Grants']").click();
}
selectRFACLIN(program){
    cy.xpath("//select[@name='jit_program_id']").select(program);
}
clickListApplication(){
    cy.xpath("//input[@type='submit']").click();
}

}
export default AwardGrants;
