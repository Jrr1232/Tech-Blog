const postNewBlog = async (event) => {
    const form = document.getElementById('new-blog-form');

    // Check if the form is currently visible (display is 'block')
    if (form.style.display === 'block') {
        // If it's visible, hide it
        form.style.display = 'none';
    } else {
        // If it's hidden, show it
        form.style.display = 'block';
    }
};

document.getElementById('new-post-btn').addEventListener('click', postNewBlog);

