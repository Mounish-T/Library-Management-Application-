let issueRequest=[
    {
        requestId: "1",
        userId: "99999",
        username: "Sathish",
        bookId: "1234",
        bookName: "DSA",
        author: "Mounish",
        requestDays: 15,
        requestDate: "12/12/12",
    },
    {
        requestId: "2",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDays: 15,
        requestDate: "12/12/12",
    },
    {
        requestId: "3",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDays: 15,
        requestDate: "12/12/12",
    },
    {
        requestId: "4",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDays: 15,
        requestDate: "12/12/12",
    },
    {
        requestId: "5",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDays: 15,
        requestDate: "12/12/12",
    },
    {
        requestId: "6",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDays: 15,
        requestDate: "12/12/12",
    },
    {
        requestId: "7",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDays: 15,
        requestDate: "12/12/12",
    },
    {
        requestId: "8",
        userId: "99999",
        username: "Mounish",
        bookId: "1234",
        bookName: "DSA",
        author: "Sathish",
        requestDays: 15,
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
                <button id="proceed" data-id=${request.requestId}>Proceed</button>
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

const dialogListener = document.getElementById('createDialog');
dialogListener.addEventListener('keydown', (event) =>{
    if(event.key === 'Escape'){
        clearDialogValues();
        dialogListener.close();
    }

    const cancelListener = document.getElementById('requestCancel');
    cancelListener.addEventListener('click', ()=>{
        clearDialogValues();
        dialogListener.close();
    });

    const issueListener = document.getElementById('issue');
    issueListener.addEventListener('click', ()=>{
        let issuedBookToUsers = new Map();
        let bookDetails = new Map();
        let formcontent = document.getElementsByClassName('form-input');
        const reqId = element.getAttribute('data-id');
        for(let content of formcontent){

        }
    });
})

const proceedElement = document.querySelectorAll('#proceed');
console.log(proceedElement);
proceedElement.forEach((element) => {
    element.addEventListener('click', ()=>{
        const reqId = element.getAttribute('data-id');
        console.log(reqId);
        confirmRequest(reqId);
    })
});

function confirmRequest(reqId){
    // Find particular request
    let matchRequest;
    issueRequest.forEach((request) =>{
        if(request.requestId == reqId){
            matchRequest = request;
        }
    });
    if(!matchRequest){
        console.log("Request not found");
        return;
    }

    document.getElementById('createDialog').showModal();
    let formcontent = document.getElementsByClassName('form-input');
    for(let content of formcontent){
        if(content.name == 'bookId'){
            content.value = matchRequest.bookId;
        }
        else if(content.name == 'bookName'){
            content.value = matchRequest.bookName;
        }
        else if(content.name == 'userId'){
            content.value = matchRequest.userId;
        }
        else if(content.name == 'userName'){
            content.value = matchRequest.username;
        }
        else if(content.name == 'issueDate'){
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const yyyy = today.getFullYear();
            const formattedDate = `${yyyy}-${mm}-${dd}`;
            content.value = formattedDate;
        }
        else if(content.name == 'days'){
            content.value = matchRequest.requestDays;
        }
    }

}

function clearDialogValues(){
    document.getElementById('createDialog').showModal();
    let formcontent = document.getElementsByClassName('form-input');
    for(let content of formcontent){
        if(content.name == 'bookName'){
            content.value = 'Enter ISBN';
        }
        else if(content.name == 'userName'){
            content.value = 'Enter User ID';
        }
        else{
            content.value = '';
        }
    }
}