// Function to display open issues
const displayOpenIssue = (issues) => {
    // Find the closed issues
    const openIssue = issues.filter(issue => issue.status == 'open');
    console.log(openIssue);
    
    // Display active button
    displayActiveButton('closed-tab');

    // Display total issue number
    document.getElementById('totalIssue').innerText = openIssue.length + ' Issues';

    // Find the issue container
    const issueContainer = document.getElementById('issue-container');
    issueContainer.innerHTML = '';

    openIssue.forEach(issue => {
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
        let issuePriority = ''

        if (issue.priority == "low") {
            issuePriority = `<span class="badge badge-error bg-[#EEEFF2] rounded-full border-none  text-[#9CA3AF] py-[6px]">LOW</span>`;
        } if (issue.priority == "high") {
            issuePriority = `<span class="badge badge-error bg-[#FEECEC] rounded-full border-none  text-[#EF4444] py-[6px] ">HIGH</span>`;
        } else {
            issuePriority = `<span class="badge badge-error bg-[#FFF6D1] rounded-full border-none  text-[#F59E0B] py-[6px]">MEDIUM</span>`;
        }

        // issue label
        let issueLabel = issue.labels.map((label) => {
            if (label == "bug") {
                return `<span class="badge badge-error bg-[#FEECEC] rounded-full text-[#EF4444] py-[6px] border-[#FECACA]"><img src="./assets/Bug-Icon.png" alt="bug"> BUG</span>`;
            }

            if (label == "help wanted") {
                return `<span class="min-w-fit badge badge-warning bg-[#FFF8DB] rounded-full text-[#D97706] py-[6px] border-[#FDE68A]"><img src="./assets/Help-Icon.png" alt="help"> HELP WANTED</span>`;
            }

            if (label == "enhancement") {
                return `<span class="badge bg-[#BBF7D0] rounded-full text-[#00A96E] py-[6px] border-[#DEFCE8]">
                ENHANCEMENT
                </span>`;
            }

            if (label == "documentation") {
                return `<span class="badge bg-[#BBF7D0] rounded-full text-[#00A96E] py-[6px] border-[#DEFCE8]">
                DOCUMENTATION
                </span>`;
            }

            if (label == "good first issue") {
                return `<span class="badge bg-[#BBF7D0] rounded-full text-[#00A96E] py-[6px] border-[#DEFCE8]">
                GOOD FIRST ISSUE
                </span>`;
            }
        }).join(' ');

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
                <div class="flex gap-2 mt-2 px-5">
                    ${issueLabel}
                </div>

                <!-- footer -->
                <div class="text-xs px-5 pb-5">
                    <p class="text-[#64748B] mb-2 text-[12px]">#1 by ${issue.author}</p>
                    <p class="text-[#64748B] text-[12px]">${formattedDate}</p>
                </div>
            </div>
        </div>`

        issueContainer.innerHTML += issueItem;
    })
}

