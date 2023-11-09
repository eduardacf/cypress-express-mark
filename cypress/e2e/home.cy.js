describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('http://192.168.2.112:8080')
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  })
})