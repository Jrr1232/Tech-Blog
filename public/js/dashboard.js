const postNewBlogForm = async (event) => {
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
const createNewBlog = async (event) => {


    let title = document.querySelector('#new-title');

    title = title.value
    console.log(title)
    let text = document.querySelector('#new-content');
    text = text.value
    console.log(text)
    try {
        const response = await fetch('/api/dashboard', {
            method: 'POST',
            body: JSON.stringify({
                text: text,
                title: title
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // Request was successful, you can handle the response here
            const responseData = await response.json();
            alert('created post')
            console.log('Response data:', responseData);
        } else {
            // Handle error response (e.g., server error or invalid input)
            console.error('Request failed with status:', response.status);
        }
    } catch (err) {
        console.error('Fetch error:', err);
    }

}
console.log

const editBlogForm = async (event) => {
    const form = document.getElementById('update-blog-form');
    const clickedButton = event.target;
    const blogId = clickedButton.getAttribute('data-blogid');

    alert(blogId)
    // Check if the form is currently visible (display is 'block')
    if (form.style.display === 'block') {
        // If it's visible, hide it
        form.style.display = 'none';
    } else {
        // If it's hidden, show it
        form.style.display = 'block';
    }
    return blogId

};



const deleteBlog = async event => {
    const clickedButton = event.target;
    const blogId = clickedButton.getAttribute('data-blogid');

    try {
        const response = await fetch(`/api/dashboard/${blogId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Blog post deleted successfully, you can handle the response here
            alert('Deleted post');
        } else {
            // Handle error response (e.g., server error)
            console.error('Request failed with status:', response.status);
        }
    } catch (err) {
        console.error('Fetch error:', err);
    }
}


const updateButton = async (event) => {
    const clickedButton = event.target;
    const blogId = clickedButton.getAttribute('data-blogid');
    const title = document.getElementById('updated-title');
    const text = document.getElementById('updated-content');
    alert(blogId)
    // You need to check if 'textarea' is defined before using it
    if (text) {
        alert(text.value);
    }

    try {
        const response = await fetch(`/api/dashboard/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify({
                text: text.value,
                title: title.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // Blog post updated successfully, you can handle the response here
            const responseData = await response.json();
            alert('Updated post');
            console.log('Response data:', responseData);
        } else {
            // Handle error response (e.g., server error or invalid input)
            console.error('Request failed with status:', response.status);
        }
    } catch (err) {
        console.error('Fetch error:', err);
    }
}


// document.querySelector('.dashboard-blogs').addEventListener('click', editBlog)
document.getElementById('new-post-btn').addEventListener('click', postNewBlogForm);
document.getElementById('create-post').addEventListener('click', createNewBlog);
document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('dashboard-blogs')) {
        editBlogForm(event);
    }
});
document.getElementById('update-post').addEventListener('click', updateButton)

