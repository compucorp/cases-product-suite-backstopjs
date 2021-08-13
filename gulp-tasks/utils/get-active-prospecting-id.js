const cvApi = require('./cv-api.js');

module.exports = getActiveProspectingId;

/**
 * Returns the ID of one of the existent prospects.
 *
 * @returns {number} prospect id
 */
function getActiveProspectingId () {
  const prospectTypeId = cvApi('CaseType', 'get', {
    sequential: 1,
    is_active: 1,
    case_type_category: 'Prospecting',
    return: ['id'],
    options: { limit: 1 }
  });

  if (!prospectTypeId.count) {
    throw new Error('Please add a prospect type');
  }

  const prospecting = cvApi('Case', 'get', {
    sequential: 1,
    is_deleted: 0,
    case_type_id: prospectTypeId.values[0].id,
    return: ['id'],
    options: { limit: 1 }
  });

  if (!prospecting.count) {
    throw new Error('Please add a prospecting');
  }

  return prospecting.values[0].id;
}
