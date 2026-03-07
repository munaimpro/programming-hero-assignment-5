// Function to show loader
const showLoader = () => {
    document.getElementById('loader').classList.remove('hidden')
    document.getElementById('loader').classList.add('flex')
}

// Function to hide loader
const hideLoader = () => {
    document.getElementById('loader').classList.add('hidden')
    document.getElementById('loader').classList.remove('flex')
}