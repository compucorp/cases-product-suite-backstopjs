const cvApi = require('./cv-api.js');

module.exports = getCaseTypeCategoryValue;

/**
 * Returns the case type category value for the given name.
 *
 * @param {string} caseTypeCategoryName  case type category name.
 * @returns {number} case id of an active case
 */
function getCaseTypeCategoryValue (caseTypeCategoryName) {
  var caseTypeCategory = cvApi('OptionValue', 'get', {
    sequential: 1,
    option_group_id: 'case_type_categories',
    name: caseTypeCategoryName
  });

  return caseTypeCategory.values[0].value;
}
