
Cypress.Commands.add('createTask', (taskName) => {

    cy.visit('http://192.168.2.112:8080')
    cy.get('input[placeholder="Add a new Task"]').type(taskName)
  
    cy.contains('button', 'Create').click()
  })
  
  Cypress.Commands.add('removeTaskByName', (taskName) => {
    cy.request({
      url: 'http://localhost:3333/helper/tasks/',
      method: 'DELETE',
      body: {
        name: taskName
      }
    }).then(response => {
      expect(response.status).to.eq(204)
    })
  })
  
  Cypress.Commands.add('postTask', (task) => {
    cy.request({
      url: 'http://localhost:3333/tasks/',
      method: 'POST',
      body: {
        name: task.name,
        is_done: task.is_done
      }
    }).then(response => {
      expect(response.status).to.eq(201)
    })
  })