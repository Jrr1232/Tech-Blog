
const accordionButton = document.querySelector('.accordion');

const commentBox = () => {
    // Create a div element
    if (!document.querySelector('.comment-box')) {
        const div = document.createElement('div');
        div.className = 'comment-box'; // Add a CSS class (optional)

        // Create a textarea element
        const textarea = document.createElement('textarea');
        textarea.placeholder = 'Leave a comment'; // Add a placeholder text (optional)

        // Create a button element
        const button = document.createElement('button');
        button.textContent = 'Submit'; // Set the button text
        button.setAttribute('id', 'submit-button')

        // Append the elements to the document body
        document.body.appendChild(div);
        div.appendChild(textarea);
        div.appendChild(button);

    }
};

const postNewComment = async (event) => {
    event.preventDefault();
    const comment = "";
    if (textarea) {
        // Get the value of the textarea
        comment = textarea.value;
    }

    console.log(comment)
    try {
        {
            const response = await fetch(`/api/comments`, {
                method: "POST",
                body: JSON.stringify({
                    comment,
                }),
                headers: { "Content-Type": "application/json" }
            });

            if (response.ok) {
                document.location.replace("/");
                alert("Succesfully posted comment !")
            } else {
                alert("Failed to post new Shout");
            }
        }
    } catch (err) {
        console.log(err)
    }

};
const submitBtn = document.getElementById('submit-button')
if (submitBtn) {
    submitBtn.addEventListener('click', postNewComment)
}
accordionButton.addEventListener('click', commentBox)