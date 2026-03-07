// Function to display active tab
function displayActiveButton(button) {
    console.log(button)
    // Remove active class
    document.querySelectorAll('.active-tab-button').forEach(btn => {
        btn.classList.remove('bg-[#4A00FF]', 'text-white');
        btn.classList.add('bg-white', 'text-[#64748B]');
    })

    // Add active class to current active button
    document.getElementById(button).classList.add('bg-[#4A00FF]', 'text-white');
    document.getElementById(button).classList.remove('bg-[#4A00FF]', 'text-white');
    document.getElementById(button).classList.add('bg-white', 'text-[#64748B]');
}