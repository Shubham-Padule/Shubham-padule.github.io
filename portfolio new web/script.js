
// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
	(function () {
		function refreshCSS() {
			var sheets = [].slice.call(document.getElementsByTagName("link"));
			var head = document.getElementsByTagName("head")[0];
			for (var i = 0; i < sheets.length; ++i) {
				var elem = sheets[i];
				var parent = elem.parentElement || head;
				parent.removeChild(elem);
				var rel = elem.rel;
				if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
					var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
					elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
				}
				parent.appendChild(elem);
			}
		}
		var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
		var address = protocol + window.location.host + window.location.pathname + '/ws';
		var socket = new WebSocket(address);
		socket.onmessage = function (msg) {
			if (msg.data == 'reload') window.location.reload();
			else if (msg.data == 'refreshcss') refreshCSS();
		};
		if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
			console.log('Live reload enabled.');
			sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
		}
	})();
}
else {
	console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}

// ]]>


// sticky navbar
var nav = document.querySelector('nav');
window.onscroll = () => {

	if (window.pageYOffset > 0) {
		nav.classList.add("sticky")
	}
	else {
		nav.classList.remove("sticky");
	}
}

let menuBars = document.querySelector('.menu');

menuBars.onclick = () => {
	menuBars.classList.toggle('active');
	nav.classList.toggle("active");
}






//   conatct us form 

  document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form and its elements
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
      // Prevent the form from submitting by default
      event.preventDefault();

      // Perform form validation
      if (validateForm()) {
        // If the form is valid, you can submit it using AJAX or simply allow it to be submitted
        // For this example, we'll just alert a success message
        alert("Form is valid. Submitting...");
        form.submit(); // You can replace this with your own submission logic.
      }
    });

    function validateForm() {
      let valid = true;

      // Check if the name field is not empty
      if (nameInput.value.trim() === "") {
        valid = false;
        alert("Please enter your name.");
        nameInput.focus();
      }

      // Check if the email is in a valid format using a regular expression
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!emailRegex.test(emailInput.value)) {
        valid = false;
        alert("Please enter a valid email address.");
        emailInput.focus();
      }

      // Check if the message field is not empty
      if (messageInput.value.trim() === "") {
        valid = false;
        alert("Please enter a message.");
        messageInput.focus();
      }

      return valid;
    }
  });





// 
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("back-to-top");

    // Function to toggle the button's visibility based on scroll position
    function toggleBackToTopButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }

    // Initially hide the button
    button.style.display = "none";

    // Show the button when scrolling
    window.addEventListener("scroll", toggleBackToTopButton);

    // Scroll back to the top of the page smoothly when the button is clicked
    button.addEventListener("click", function (e) {
        e.preventDefault();

        // Scroll to the top of the page with smooth behavior
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });
});

