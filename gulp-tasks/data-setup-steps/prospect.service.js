const createUniqueRecordFactory = require('../utils/create-unique-record-factory.js');
const createUniqueProspect = createUniqueRecordFactory('CaseType', ['name']);

const service = {
  setupData,
  prospect: null,
  prospectName: 'backstop_prospect',
  prospectTitle: 'Backstop Prospect'
};

/**
 * Create Prospect
 */
function setupData () {
  service.prospect = createUniqueProspect({
    name: service.prospectName,
    case_type_category: 'Prospecting',
    title: service.prospectTitle,
    definition: {
      activityTypes: [{
        name: 'Phone Call'
      }, {
        name: 'Meeting'
      }],
      activitySets: [{
        timeline: true,
        name: 'standard_timeline',
        label: 'Standard Timeline'
      }],
      caseRoles: [
        {
          name: 'Prospect Owner',
          manager: '1'
        }
      ],
      statuses: ['enquiry', 'qualified', 'in_progress', 'submitted', 'won', 'lost'],
      timelineActivityTypes: []
    }
  });

  console.log('Prospect data setup successful.');
}

module.exports = service;
