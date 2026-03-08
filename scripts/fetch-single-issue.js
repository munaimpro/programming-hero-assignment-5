// Function to fetch single issues

const singleIssue = (issueId) => {
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`)
        .then(response => response.json())
        .then(data => {
            displaySingleIssue(data.data)
        })
}

// Function to display single issue
const displaySingleIssue = (issue) => {
    // issue status
    let issueStatus = ''

    if (issue.status == "open") {
        issueStatus = `<span class="badge badge-success rounded-full text-white bg-[#00A96E]">Opened</span>`;
    } else {
        issueStatus = `<span class="badge badge-success rounded-full text-white bg-purple-600 border-purple-500">Closed</span>`;
    }

    // issue priority
    let issuePriority = ''

    if (issue.priority == "low") {
        issuePriority = "Low";
    } if (issue.priority == "high") {
        issuePriority = "High";
    } else {
        issuePriority = "Medium";
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

    // issue assignee
    const issueAssignee = issue.assignee == '' ? 'N/A' : issue.assignee

    // Load data to modal
    const loadData = `<div class="modal-box">
                    <!-- issue title -->
                    <h3 class="text-2xl font-bold mb-2">${issue.title}</h3>
    
                    <!-- issue meta -->
                    <div class="flex items-center gap-2 mb-6">
                        ${issueStatus}
                        <span class="text-xl text-[#64748B]">&bull;</span>
                        <span class="text-[#64748B] text-xs">Opened by ${issue.author}</span>
                        <span class="text-xl text-[#64748B]">&bull;</span>
                        <span class="text-[#64748B] text-xs">${formattedDate}</span>
                    </div>
    
                    <!-- issue tags -->
                    <div class="flex gap-2 mb-6">
                        ${issueLabel}
                    </div>
    
                    <!-- issue description -->
                    <p class="text-[#64748B] text-[16px] mb-6">${issue.description}</p>
    
                    <!-- issue assignee + priority -->
                    <div class="bg-[#F8FAFC] rounded-lg flex align-middle p-4">
                        <div class="assignee w-1/2">
                            <p class="text-[#64748B] text-[16px]">Assignee:</p>
                            <h6 class="font-semibold text-[16px] text-[#1F2937]">${issueAssignee}</h6>
                        </div>
                        <div class="priority w-1/2">
                            <p class="text-[#64748B] text-[16px]">Priority:</p>
                            <span class="badge badge-error rounded-full text-white bg-[#EF4444]">${issuePriority}</span>
                        </div>
                    </div>
    
                    <div class="modal-action">
                        <form method="dialog">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn btn-primary">Close</button>
                        </form>
                    </div>
                </div>`
    
    // Load data to modal
    document.getElementById('issue_modal').innerHTML = '';
    document.getElementById('issue_modal').innerHTML += loadData;

    // Show modal
    document.getElementById('issue_modal').showModal()
}