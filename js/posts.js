function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}

loadPost();


function addAPost2(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'This is my posts',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}




function displayPosts(posts){
    const postConainer = document.getElementById('posts');
    for (const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3> ${post.title} </h3>
        <p> ${post.body} </p>
        `;
        postConainer.appendChild(div);
        console.log(post);
    }
}