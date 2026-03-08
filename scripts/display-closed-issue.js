// Function to display closed issues
const displayClosedIssue = (issues) => {
    // Find the closed issues
    const closedIssue = issues.filter(issue => issue.status == 'closed');
    console.log(closedIssue);
    
    // Display active button
    displayActiveButton('closed-tab');

    // Display total issue number
    document.getElementById('totalIssue').innerText = closedIssue.length + ' Issues';

    // Find the issue container
    const issueContainer = document.getElementById('issue-container');
    issueContainer.innerHTML = '';

    if (closedIssue.length > 0) {
        closedIssue.forEach(issue => {
            // issue status
            let issueStatus = ''
            let issueBorder = ''

            if (issue.status == "open") {
                issueBorder = 'border-green-500'
                issueStatus = `<img src="./assets/Open-Status.png" alt="closed-status">`;
            } else {
                issueBorder = 'border-purple-500'
                issueStatus = `<img src="./assets/Closed- Status .png" alt="closed-status">`;
            }

            // issue priority
            let issuePriority = setIssuePriority(issue.priority)

            // issue label
            let issueLabel = setIssueLabel(issue.labels);

            // issue formatted date
            const formattedDate = new Date(issue.createdAt).toLocaleDateString('en-US');

            const issueItem = `
            <div class="card rounded bg-base-100 shadow-sm border-t-4 ${issueBorder} cursor-pointer"
            onclick="singleIssue(${issue.id})">
                <div class="card-body p-0">
                    <!-- header -->
                    <div class="flex items-center justify-between pt-5 px-5">
                        <div class="flex items-center gap-2">
                            ${issueStatus}
                        </div>
                        ${issuePriority}
                    </div>

                    <!-- issue title -->
                    <h2 class="font-semibold text-base px-5">
                        ${issue.title}
                    </h2>

                    <!-- issue description -->
                    <p class="px-5 text-sm text-[#64748B]">${issue.description}</p>

                    <!-- issue tags -->
                    <div class="flex flex-wrap gap-2 pb-5 px-5">
                        ${issueLabel}
                    </div>

                    <!-- footer -->
                    <div class="text-xs p-5 border-t-2 border-t-[#E4E4E7]">
                        <p class="text-[#64748B] mb-2 text-[12px]">#1 by ${issue.author}</p>
                        <p class="text-[#64748B] text-[12px]">${formattedDate}</p>
                    </div>
                </div>
            </div>`

            issueContainer.classList.add('lg:grid-cols-4', 'md:grid-cols-2')
            issueContainer.innerHTML += issueItem;
        })
    } else {
        issueContainer.classList.remove('lg:grid-cols-4', 'md:grid-cols-2')
        const userMessage = `<h2 class='text-primary font-bold text-2xl border-3 min-h-fit p-20 bg-base-100 text-center rounded-lg borlder flex justify-center align-middle'>No Issue Available!</h2>`
        issueContainer.innerHTML += userMessage;
    }
}

