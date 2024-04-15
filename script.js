document.addEventListener('DOMContentLoaded', function() {
    // Function to handle hover event on the cat image
    var catImage = document.getElementById('catImage');
    catImage.addEventListener('mouseover', function() {
        document.getElementById('changeText').textContent = 'Magic happened!';
    });
    
    // Function to handle form submission
    var textInputForm = document.getElementById('textInputForm');
    textInputForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var userInput = document.getElementById('userInput').value;
        document.getElementById('userText').textContent = userInput;
    });

    // Function to handle button click for changing background color
    var colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', function() {
        var randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });

    // Helper function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
