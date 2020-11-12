const testid = id => `[data-testid="${id}"]`;

describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
    it('フォームからTodoの追加', () => {
      const addTodo = 'JavaScript'
      cy.get(testid('todo-add-input'))
        .type(addTodo).should('have.value', addTodo)

      cy.get(testid('todo-add-btn'))
        .click()
      
      const todoId = 0;

      cy.get(testid(`todo-row-${todoId}`)).should('have.text', addTodo)
    })

    it('フォームからTodoの追加, 完了', () => {
      const addTodoArr = ['JavaScript', 'TypeScript', 'PHP']
      addTodoArr.forEach((todo, i) => {
        cy.get(testid('todo-add-input'))
          .type(todo).should('have.value', todo)

        cy.get(testid('todo-add-btn'))
          .click()
        
        cy.get(testid(`todo-row-${i}`)).should('have.text', todo)
      })
      //先頭の要素を完了にする
      cy.get(testid('todo-check-0')).click()
      cy.get(testid('todo-row-0')).should('have.class', 'done')
    })

    it('フォームからTodoの追加, 削除', () => {
      const addTodoArr = ['JavaScript', 'TypeScript', 'PHP']
      addTodoArr.forEach((todo, i) => {
        cy.get(testid('todo-add-input'))
          .type(todo).should('have.value', todo)

        cy.get(testid('todo-add-btn'))
          .click()
        
        cy.get(testid(`todo-row-${i}`)).should('have.text', todo)
      })
      //先頭の要素を削除する
      cy.get(testid('remove-btn-0')).click()
      cy.get(testid('todolist-wrap')).should('not.have.text', 'JavaScript')
    })
})