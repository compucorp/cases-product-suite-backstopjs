const cvApi = require('./cv-api.js');

module.exports = getActiveProspectingId;

/**
 * Returns the ID of a application that is active and has an activity for the current
 * calendar month.
 *
 * @returns {number} case id of an active case
 */
function getActiveProspectingId () {
  var activity = cvApi('Activity', 'get', {
    sequential: 1,
    'case_id.is_deleted': 0,
    case_filter: { 'case_type_id.case_type_category': 'prospecting' },
    return: ['case_id'],
    options: { limit: 1 }
  });

  if (!activity.count) {
    throw new Error('Please add an activity for a prospecting');
  }

  return activity.count && activity.values[0].case_id[0];
}
