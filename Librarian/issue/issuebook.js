let issueRequest=[
    {
        requestId: "1",
        userId: "99999",
        username: "Sathish",
        bookId: "1234",
        bookName: "DSA",
        author: "Mounish",
        requestDate: "12/12/12",
    },
    {
        requestId: "1",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDate: "12/12/12",
    },
    {
        requestId: "1",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDate: "12/12/12",
    },
    {
        requestId: "1",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDate: "12/12/12",
    },
    {
        requestId: "1",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDate: "12/12/12",
    },
    {
        requestId: "1",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDate: "12/12/12",
    },
    {
        requestId: "1",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDate: "12/12/12",
    },
    {
        requestId: "1",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDate: "12/12/12",
    },
]

const reqList=document.querySelector('.availableRequest');

issueRequest.forEach((request)=>{
    reqList.innerHTML += `
        <div class="request">
            <h3><span>UserId: </span>${request.userId}</h3>
            <h3><span>UserName: </span>${request.username}</h3>
            <h3><span>BookName: </span>${request.bookName}</h3>
            <h3><span>Author: </span>${request.author}</h3>
            <div class="view">
                <button id="viewBook">View Book</button>
                <button id="viewUser">View User</button>
                <button id="proceed">Proceed</button>
            </div>
        </div>
    `
});

let createBtn = document.getElementById('createReq');
createBtn.addEventListener('click', ()=>{
    document.getElementById('createDialog').showModal();
});

let bookEye = document.getElementById('book-eye');
bookEye.addEventListener('mouseover', ()=>{
    view = document.getElementById('book-hint');
    view.style.visibility = 'visible';
});

bookEye.addEventListener('mouseout', ()=>{
    view = document.getElementById('book-hint');
    view.style.visibility = 'hidden';
});

let userEye = document.getElementById('user-eye');
userEye.addEventListener('mouseover', ()=>{
    view = document.getElementById('user-hint');
    view.style.visibility = 'visible';
});

userEye.addEventListener('mouseout', ()=>{
    view = document.getElementById('user-hint');
    view.style.visibility = 'hidden';
});