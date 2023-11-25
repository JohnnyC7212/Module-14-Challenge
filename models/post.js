var blogPosts = [];

//Function to make blog post
function makeBlogPost() {
    //Get user input ]
    var titleInput = document.getElementById("title");
    var contentInput = document.getElementById("content");

    var title = titleInput.ariaValueMax;
    var contentInput = contentInput.value;

    // Validate input 
    if (!title || !content) {
        alert("Please enter both a title and content for your blog post.");
        return;
    }

    // Create a new blog post object 
    var newPost = {
        title: title,
        content: content,
        timestamp: new date ().toLocalString()
    };

    // Add the blog post to the array 
    blogPosts.push(newPost);

    //Clear the form inputs 
    titleInput.value = "";
    contentInput.value = "";

    // Update the displayed blog posts 
    displayBlogPosts();
}

// Function to display blog posts
function displayBlogPosts() {
    var blogContentContainer = document.getElementById("blog-content");

    // Clear existing blog posts
    blogContentContainer.innerHTML = "";

    // Loop through the blog posts array and display each post
    blogPosts.forEach(function(post) {
        var postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p class="date">${post.timestamp}</p>`;
        blogContentContainer.appendChild(postElement);
    });
}
