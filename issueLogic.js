document.getElementById("issue-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    var issueTitle = document.getElementById("issue-title").value;
    var issueDescription = document.getElementById("issue-description").value;

    // Perform further actions, such as sending the data to a server or displaying a success message
    alert("Issue Title: " + issueTitle + "\nIssue Description: " + issueDescription);

    // Reset the form
    this.reset();
});
  