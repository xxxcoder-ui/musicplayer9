const moesifMiddleware = moesif({
  applicationId: 'eyJhcHAiOiI0OTM6MTU2NyIsInZlciI6IjIuMSIsIm9yZyI6IjQyMDo2MDQiLCJpYXQiOjE3Mjc3NDA4MDB9.94zk0OR0dc3a9dRCjXJJGIN6_PQVTUIBiNknU3R7V2M',

  // New code to add to link API calls to companies.
  identifyCompany: function (req, res) {
    // your code here, must return a string. The code below is an example.
    return req.headers['X-Organization-Id'];
  },
});
