var test = "hello";
class HomePage{


    btnFind="//a[@name='Find']";
    userOption="//a[@name='Users']";
    txtLastName ="#search_last_name";
    txtEmail ="#search_email";
    btnFindUser="button[type='submit']";
    btnArrow="(//a[@id='become_user_glyph'])[1]";
    openProgramms="//a[@href='/guests/rfas']";
    selectopenApplication2='//*[@id="apply_EDUC1"]/td[2]/a';
    selectopenApplication='//*[@id="apply_CLIN1"]/td[2]/a';
    selectpicon='//input[@name="commit"]';
    btnArrow2="(//a[@id='become_user_glyph'])[2]";
    btnArrowEDUC10="(//a[@id='become_user_glyph'])[1]"

startApplication(program_code)
{
    this.clickOpenProgram();
    return cy.get('body').then(($body)=>{
        if ($body.text().includes(`Start a ${program_code} Grant Application`)){
            this.selectApplication(program_code);
        }
        else {
            this.userClickAbandon(program_code);
            this.selectApplication(program_code);
        }
        this.SaveTitle();
    })
}
clickOpenProgram() {
    cy.xpath("//a[@href='/guests/rfas']").click();
}
selectApplication(program_code){
    cy.xpath(`//a[contains(text(),'Start a ${program_code} Grant Application')]`).click();
}
userClickAbandon(program_code){
    cy.xpath("(//table[@class='table']//tbody)[1]//tr//td").each(($el,index,$list)=>{
        const storetext = $el.text();
        if(storetext.includes(program_code)){
            cy.get("td").eq(index).next().next().contains("Abandon").click();
        }
    })

}
SaveTitle(){
    return cy.xpath("(//div[@class='title'])[1]").invoke('text').then(($title) =>{
        cy.wrap($title.trim()).as('AppTitle')
    })
}
}

export default HomePage;
