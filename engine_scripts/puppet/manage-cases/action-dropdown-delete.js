'use strict';

module.exports = async (page, scenario, vp) => {
  await require('./action-dropdown')(page, scenario, vp);
  await page.evaluate(() => {
    CRM.$('.civicase__case-header__action-menu .btn-group:last-child .dropdown-menu li a:contains("Delete Case")').click();
  });
};
