module.exports = {
  v1: {
    // May return a pagination value that includes a nextToken --> this pagination will be added to the returned payload
    getInventorySummaries: (req_params) => {
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/fba/inventory/v1/summaries',
        restore_rate: 0.5
      });
    }
  }
};
