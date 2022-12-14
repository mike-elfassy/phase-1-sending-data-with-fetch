function submitData(userName, userEmail) {
    return (
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail
            })
        })
        .then(response => response.json())
        .then(object => addStringToDom(object.id))
        .catch(error => addStringToDom(error.message))
    )
}

function addStringToDom(string) {
    let item = document.createElement('p')
    item.textContent = string
    document.querySelector('body').appendChild(item)
}