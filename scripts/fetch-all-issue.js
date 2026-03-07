// Function to fetch all issues

const allIssueLink = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

const allIssue = (activeTab = 'all-tab') => {
    fetch(allIssueLink)
        .then(response => response.json())
        .then(data => {
            showLoader();
            if (activeTab == 'open-tab') {
                displayOpenIssue(data.data);
            } else if (activeTab == 'closed-tab') {
                displayClosedIssue(data.data);
            } else {
                displayAllIssue(data.data);
            }
            hideLoader()
        })
}

allIssue('all-tab');