'use strict';

const Utility = require('./../utility.js');

module.exports = async (page, scenario, vp) => {
  const utility = new Utility(page, scenario, vp);

  await require('./action-dropdown')(page, scenario, vp);
  await page.evaluate(() => {
    CRM.$('.civicase__case-header__action-menu .btn-group:last-child .dropdown-menu li a:contains("Change Case Status")').click();
  });
  await utility.waitForUIModalLoad();
};
