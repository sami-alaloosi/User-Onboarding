describe('Get the Name input and type a name in it', () =>{

it('can navigate to the site', ()=>{
    cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    cy.url().should('include', 'username' )
})

it('typing in the Name input and checking the input', ()=>{
    cy.get('input[name="username"]').type('sami alaloosi')
    .should('have.value', "sami alaloosi")
})
} )


describe('Get the Email input and type an email address in it', () =>{
    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    })

    it("typing in the Email input and checking the input", ()=>{
        cy.get('input[name="email"]').type("kingxsam@gmail.com")
        .should('have.value', 'kingxsam@gmail.com' )
    })
})


describe("Get the password input and type a password in it", () =>{
    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    })

    it("typing in the password input and checking the input", () =>{
        cy.get('input[id="password"]').type('12345678')
        .should('have.value', '12345678' )
    })
})