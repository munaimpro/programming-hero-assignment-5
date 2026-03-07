// Function to fetch single issues

const singleIssue = (issueId) => {
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displaySingleIssue(data.data)
        })
}