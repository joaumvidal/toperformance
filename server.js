const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const data = [
  {
    certificationName: 'Salesforce Administrator',
    domain: 'Salesforce',
    rewardValue: '30€'
  },
  {
    certificationName: 'Salesforce Developer',
    domain: 'Salesforce',
    rewardValue: '100€'
  },
  {
    certificationName: 'AWS Programmer',
    domain: 'AWS',
    rewardValue: '74€'
  },
  {
    certificationName: 'MS Certified Admin',
    domain: 'MS Dynamics',
    rewardValue: '47€'
  },
  {
    certificationName: 'Azure DevOps',
    domain: 'Azure',
    rewardValue:'205€'
  }
  // Add more data as needed
];
// Define a route that sends a JSON response
app.get('/api/certifications', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
