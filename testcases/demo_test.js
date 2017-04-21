
Feature('Demo');

Scenario('test something DUI', (I) => {
  I.amOnPage('https://www.google.nl');
  I.seeElement('//*[@id="hplogo"]');
});
