

js: function updateDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  document.getElementById('datetime').textContent = dateTimeString;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();



(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {

        form.addEventListener('submit', event => {

            if (!form.checkValidity()) {

                event.preventDefault();
                event.stopPropagation();

            }

            form.classList.add('was-validated');

        }, false);

    });

})();

