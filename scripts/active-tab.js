// Function to display active tab
const displayActiveButton = (button) => {
    console.log(button)
    // Remove active class
    document.querySelectorAll('.active-tab-button').forEach(btn => {
        btn.classList.remove('bg-[#4A00FF]', 'text-white');
        btn.classList.add('bg-white', 'text-[#64748B]');
    })

    // Add active class to current active button
    document.getElementById(button).classList.add('bg-[#4A00FF]', 'text-white');
    document.getElementById(button).classList.remove('bg-white', 'text-[#64748B]');
}


// Function to set issue priority
const setIssuePriority = (issuPriority) => {
    if (issuPriority == "low") {
        return `<span class="badge badge-error bg-[#EEEFF2] rounded-full border-none  text-[#9CA3AF] py-[6px]">LOW</span>`;
    } if (issuPriority == "high") {
        return `<span class="badge badge-error bg-[#FEECEC] rounded-full border-none  text-[#EF4444] py-[6px] ">HIGH</span>`;
    } if (issuPriority == "medium") {
        return `<span class="badge badge-error bg-[#FFF6D1] rounded-full border-none  text-[#F59E0B] py-[6px]">MEDIUM</span>`;
    }
}


// Function to set issue label
const setIssueLabel = (issueLabels) => {
    return issueLabels.map((label) => {
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
}