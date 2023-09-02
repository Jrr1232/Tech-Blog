
const postNewComment = async (event) => {
    event.preventDefault();
    let comment = "";
    const textarea = document.querySelector('#new-comment');
    console.log(textarea)
    if (textarea) {
        comment = textarea.value;
    }

    try {
        const response = await fetch(`/api/comment`, {
            method: "POST",
            body: JSON.stringify({
                comment,
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
const commentBtn = document.querySelector(".add-comment-btn")
if (commentBtn) {
    commentBtn.addEventListener('click', postNewComment)
}