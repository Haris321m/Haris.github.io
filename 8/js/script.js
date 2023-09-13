var bargerIcon = document.getElementById('barger');
var list = document.querySelector('.nav .ul');

// Add a click event listener to the image
bargerIcon.addEventListener('click', toggleList);

function toggleList() {
    // Toggle the "hidden" class on the list to show/hide it
    list.classList.toggle('hidden');
}