describe('designsystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('visual-regression-root').should('exist');
  });
});