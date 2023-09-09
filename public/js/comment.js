const postNewComment = async (event) => {
    event.preventDefault();

    // Access the clicked button
    const clickedButton = event.target;

    // Access the corresponding textarea using the data-blogid attribute
    const blogId = clickedButton.getAttribute('data-blogid');
    const textarea = document.querySelector(`textarea[data-blogid="${blogId}"]`);

    // Access the textarea value directly using the textarea variable
    const textareaValue = textarea.value;
    console.log('Textarea Value:', textareaValue);

    // Clear the textarea
    textarea.value = '';

    try {
        const response = await fetch(`/api/comment`, {
            method: "POST",
            body: JSON.stringify({
                commentText: textareaValue,
                blogId
            }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            document.location.replace("/");
            alert("Successfully posted comment!");
        } else {
            alert("Failed to post new comment.");
        }
    } catch (err) {
        console.error(err);
        alert("An error occurred while posting the comment.");
    }
};

document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('add-comment-btn')) {
        postNewComment(event);
    }
});
