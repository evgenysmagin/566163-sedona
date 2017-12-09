var bookingSearch = document.querySelector('.booking-search');
var modal = document.querySelector('.booking-form');
    
bookingSearch.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.toggle('hide');
});