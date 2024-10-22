document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

/* Function to open the sidebar */
function openNav() {
    document.getElementById("sidebar").style.width = "300px"; // Set sidebar width
    document.querySelector(".content").style.marginLeft = "300px"; // Push content to the right
}

/* Function to close the sidebar */
function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Set sidebar width to 0 (hide it)
    document.querySelector(".content").style.marginLeft = "0"; // Reset content margin
}

function searchFunction() {
    // Get the search query
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    
    // Get all elements you want to search within
    let panels = document.getElementsByClassName('accordion'); // Example: searching accordion titles
    
    // Loop through all the elements
    for (let i = 0; i < panels.length; i++) {
        let panelText = panels[i].textContent || panels[i].innerText;
        
        // If text matches the query, display the element, else hide it
        if (panelText.toLowerCase().indexOf(filter) > -1) {
            panels[i].style.display = "";
        } else {
            panels[i].style.display = "none";
        }
    }
}


var accordions = document.querySelectorAll(".accordion");

accordions.forEach(function(accordion) {
    accordion.addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;

        // Check if panel is already open by looking at maxHeight value
        if (panel.style.maxHeight) {
            // Collapse the panel
            panel.style.maxHeight = null;
        } else {
            // Resetting any previous height to ensure a fresh calculation
            panel.style.maxHeight = "0px";
            
            // Use scrollHeight to calculate the required height for expansion
            panel.style.maxHeight = panel.scrollHeight + "500px";
        }
    });
});




