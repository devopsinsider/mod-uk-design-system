import { Cypress, cy } from 'local-cypress'

function check() {
  let stub

  Cypress.on('window:before:load', (win) => {
    stub = cy.stub(win.console, 'error')
  })

  Cypress.on('command:end', () => {
    if (stub) {
      chai.expect(stub, 'There are console errors').to.have.callCount(0)
    }
  })
}

export default {
  check,
}
