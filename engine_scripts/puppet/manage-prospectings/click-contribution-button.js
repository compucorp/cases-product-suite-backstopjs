'use strict';

const Utility = require('../utility.js');

module.exports = async (page, scenario, vp) => {
  const utility = new Utility(page, scenario, vp);
  await utility.waitForAngular();
  await utility.waitForLoadingComplete();

  await page.click('.civicase__case-header__action-icon.btn.btn-primary');

  await page.evaluate(() => {
    CRM.$('.civicase__case-header__action-menu .btn-group:last-child .dropdown-menu li a:contains("Convert to Contribution")').click();
  });
  await utility.waitForUIModalLoad();
};