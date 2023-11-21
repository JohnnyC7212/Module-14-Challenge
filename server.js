document.addEventListener("DOMContentLoaded", function () {
    var blogData = {
        posts: [
            {
                title: "Instruction to handlebars",
                content: "Learn about helpers",
                date: "2023-11-12"
            },
            {
                title : "Advanced handlebars techniques",
                content : "Learn about helpers, particals, and more...",
                date: "2023-11-12"
            },

        ]
        
    };
    // Register a helper for formatting dates
    Handlebars.registerHelper('formatDate', function (date) {
        return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month:'long', day: 'numeric'});
    });

    // Add a click event listner to the "Log In" button
    var loginButton = document.querySelector(".btn-login");
    loginButton.addEventListener("click", loadLoginForm);
    
});