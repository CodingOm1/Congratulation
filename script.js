document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var studentName = document.getElementById('student-name').value;
    var newWindow = window.open('', '_blank', 'width=600,height=400');
    newWindow.document.write('<html><head><title>Congratulations!</title><link rel="stylesheet" href="styles.css"></head><body style="background-color: #111;"><div class="container"><h1 style="color: #f0f;">Congratulations Dear,</h1><h2 style="color: #f0f;" class="glow-text">' + studentName + '</h2></div></body></html>');
});
