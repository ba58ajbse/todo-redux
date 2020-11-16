// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('addTodos', (...todoList) => {
    const testid = id => `[data-testid="${id}"]`;
    todoList.forEach((todo, i) => {
    cy.get(testid('todo-add-input'))
      .type(todo).should('have.value', todo)

    cy.get(testid('todo-add-btn'))
      .click()
    
    cy.get(testid(`todo-row-${i}`)).should('have.text', todo)
  })
})