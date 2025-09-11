let issueRequest = [
    {
        requestId: "1",
        userId: "sit22ec084",
        username: "Sathish",
        bookId: "1",
        bookName: "DSA",
        author: "Mounish",
        requestDays: 15,
        requestDate: "2012/12/12",
    },
    {
        requestId: "2",
        userId: "sit22ec064",
        username: "Mounish",
        bookId: "2",
        bookName: "OOPS",
        author: "Sathish",
        requestDays: 15,
        requestDate: "2020/12/12",
    },
    {
        requestId: "3",
        userId: "sit22ec062",
        username: "Jeevesh",
        bookId: "3",
        bookName: "Python",
        author: "Sathish",
        requestDays: 15,
        requestDate: "2025/1/12",
    },
    {
        requestId: "4",
        userId: "sit22ec002",
        username: "Danush Kumar",
        bookId: "4",
        bookName: "C",
        author: "Sathish",
        requestDays: 15,
        requestDate: "2022/7/4",
    },
    {
        requestId: "5",
        userId: "sit22ec052",
        username: "Ravikumar",
        bookId: "5",
        bookName: "C++",
        author: "Sathish",
        requestDays: 15,
        requestDate: "2021/3/14",
    },
    {
        requestId: "6",
        userId: "sit22ec056",
        username: "Naveen Prasad",
        bookId: "6",
        bookName: "C#",
        author: "Sathish",
        requestDays: 15,
        requestDate: "2026/5/31",
    },
    {
        requestId: "7",
        userId: "sit22ec065",
        username: "Jai Ganesh",
        bookId: "7",
        bookName: "Java",
        author: "Sathish",
        requestDays: 15,
        requestDate: "2027/5/2",
    },
    {
        requestId: "8",
        userId: "sit22ec080",
        username: "Siva",
        bookId: "8",
        bookName: "Django",
        author: "Sathish",
        requestDays: 15,
        requestDate: "2005/2/24",
    },
]

let availableBooks = [
    {
        bookId: "1",
        bookName: "DSA",
        author: "Mounish",
        publisher: "Sura",
        year: "2023",
        edition: "4th",
        category: "novels",
        language: "English"
    },
    {
        bookId: "2",
        bookName: "OOPS",
        author: "Sathish",
        publisher: "Sura",
        year: "2023",
        edition: "4th",
        category: "novels",
        language: "English"
    },
    {
        bookId: "3",
        bookName: "Python",
        author: "Sathish",
        publisher: "Sura",
        year: "2023",
        edition: "4th",
        category: "novels",
        language: "English"
    },
    {
        bookId: "4",
        bookName: "C",
        author: "Sathish",
        publisher: "Sura",
        year: "2023",
        edition: "4th",
        category: "novels",
        language: "English"
    },
    {
        bookId: "5",
        bookName: "C++",
        author: "Sathish",
        publisher: "Sura",
        year: "2023",
        edition: "4th",
        category: "novels",
        language: "English"
    },
    {
        bookId: "6",
        bookName: "C#",
        author: "Sathish",
        publisher: "Sura",
        year: "2023",
        edition: "4th",
        category: "novels",
        language: "English"
    },
    {
        bookId: "7",
        bookName: "Java",
        author: "Sathish",
        publisher: "Sura",
        year: "2023",
        edition: "4th",
        category: "novels",
        language: "English"
    },
    {
        bookId: "8",
        bookName: "Django",
        author: "Sathish",
        publisher: "Sura",
        year: "2023",
        edition: "4th",
        category: "novels",
        language: "English"
    }
];

let availableUsers = [
    {
        userId: "sit22ec064",
        username: "Mounish",
        email: "mounish@gmail.com",
        gender: "male",
        contact: "1234567890",
    },
    {
        userId: "sit22ec084",
        username: "Sathish",
        email: "sathish@gmail.com",
        gender: "male",
        contact: "1234567890",
    },
    {
        userId: "sit22ec080",
        username: "Siva",
        email: "siva@gmail.com",
        gender: "male",
        contact: "1234567890",
    },
    {
        userId: "sit22ec056",
        username: "Naveen Prasad",
        email: "naveen@gmail.com",
        gender: "male",
        contact: "1234567890",
    },
    {
        userId: "sit22ec052",
        username: "Ravikumar",
        email: "ravi@gmail.com",
        gender: "male",
        contact: "1234567890",
    },
    {
        userId: "sit22ec062",
        username: "Jeevesh",
        email: "jeevesh@gmail.com",
        gender: "male",
        contact: "1234567890",
    },
    {
        userId: "sit22ec065",
        username: "Jai Ganesh",
        email: "jai@gmail.com",
        gender: "male",
        contact: "1234567890",
    },
    {
        userId: "sit22ec002",
        username: "Danush Kumar",
        email: "danush@gmail.com",
        gender: "male",
        contact: "1234567890",
    },
    {
        userId: "sit22ec004",
        username: "Gowrishankar",
        email: "gowrishankar@gmail.com",
        gender: "male",
        contact: "1234567890",
    }
];

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
const dialogListener = document.getElementById('createDialog');
createBtn.addEventListener('click', ()=>{
    dialogListener.showModal();
});

dialogListener.addEventListener('keydown', (event) =>{
    if(event.key === 'Escape'){
        clearDialogValues();
        dialogListener.close();
    }
});

let bookId = document.getElementById('input-bookId');
let bookName = document.getElementById('input-bookName');
let userId = document.getElementById('input-userId');
let username = document.getElementById('input-username');
let issueDate = document.getElementById('input-issueDate');
let duedays = document.getElementById('input-dueDays');
let dueDate = document.getElementById('input-dueDate');

bookId.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){
        let isValidBookId = validation(bookId);
        if(isValidBookId){
            let matchBook;
            availableBooks.forEach((book)=>{
                if(book.bookId === bookId.value){
                    matchBook = book;
                }
            });
            console.log(matchBook);
            
            if(!matchBook){
                bookId.value = '';
                bookName.value = 'Enter ISBN ID';
                alert("ISBN Id not found");
                return;
            }
            bookName.value = matchBook.bookName;
        }
    }
});

userId.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){
        let isValiidUserId = validation(userId);
        if(isValiidUserId){
            let matchUser;
            availableUsers.forEach((user)=>{
                if(user.userId === userId.value.trim().toLowerCase()){
                    matchUser = user;
                }
            })
            console.log(matchUser);
            if(!matchUser){
                userId.value = '';
                username.value = 'Enter User ID';
                alert("User not found");
                return;
            }
            username.value = matchUser.username;
        }
    }
});

duedays.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){

        let isValidIssueDate = validation(issueDate);
        let isValidDueDays = validation(duedays);

        if(isValidIssueDate && isValidDueDays){
            let currentDateString = issueDate.value.split("-");
            let currentDate = StringToDate(currentDateString);

            let days = parseInt(duedays.value);
            currentDate.setDate(currentDate.getDate() + days);
            
            const formattedDate = dateToString(currentDate);
            dueDate.value = formattedDate;
            validation(dueDate);

        }
    }
});

function validation(content){
    
    if(content.value.trim() === ''){
        content.value = '';
        content.classList.add('error-input');
        let errorTag = document.getElementById(content.name);
        errorTag.style.display = 'block';
        return false;
    }
    else{
        content.classList.remove('error-input');
        let errorTag = document.getElementById(content.name);
        errorTag.style.display = 'none';
        return true;
    }
}

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

const cancelListener = document.getElementById('requestCancel');
cancelListener.addEventListener('click', ()=>{
    clearDialogValues();
    dialogListener.close();
});

const issueListener = document.getElementById('issue');
issueListener.addEventListener('click', ()=>{  
    let formcontent = document.getElementsByClassName('form-input');
    // validation
    let isValid = true;
    for(let content of formcontent){
        if(content.value.trim() === ''){
            isValid = false;
            content.value = '';
            content.classList.add('error-input');
            let errorTag = document.getElementById(content.name);
            errorTag.style.display = 'block';
        }
        else{
            content.classList.remove('error-input');
            let errorTag = document.getElementById(content.name);
            errorTag.style.display = 'none';
        }
    }

    if(!isValid) return;

    let issuedBookToUsers = new Map();
    let bookDetails = new Map();
    const reqId = issueListener.getAttribute('data-requestid');
    let userId;
    bookDetails.set('requestId', reqId);
    
    for(let content of formcontent){
        if(content.name == 'userId'){
            userId = content.value;
        }
        else{
            bookDetails.set(content.name, content.value.trim());
        }
    }
    
    issuedBookToUsers.set(userId, bookDetails);
    
    console.log(issuedBookToUsers);
    // Logic for issuing book to update
    clearDialogValues();
    dialogListener.close();
    
});

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
        alert("Request not found");
        // console.log("Request not found");
        return;
    }
    document.getElementById('issue').setAttribute("data-requestId", reqId);
    // console.log(document.getElementById('issue'));
    
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
        else if(content.name == 'username'){
            content.value = matchRequest.username;
        }
        else if(content.name == 'issueDate'){
            // const today = new Date();
            let dateSplit = matchRequest.requestDate.split("/");
            const date = StringToDate(dateSplit);
            let formattedDate =  dateToString(date);
            content.value = formattedDate;
        }
        else if(content.name == 'duedays'){
            content.value = matchRequest.requestDays;
        }
    }
    
}

function StringToDate(dateString){
    let dateNumber = parseInt(dateString[2]);
    let month = parseInt(dateString[1])-1;
    let year = parseInt(dateString[0]);
    let date = new Date(year, month, dateNumber);
    return date;
}

function dateToString(date){
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const yyyy = date.getFullYear();
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    return formattedDate;
}

function clearDialogValues(){
    document.getElementById('createDialog').showModal();
    let formcontent = document.getElementsByClassName('form-input');
    for(let content of formcontent){
        
        content.classList.remove('error-input');
        let errorTag = document.getElementById(content.name);
        errorTag.style.display = 'none';

        if(content.name == 'bookName'){
            content.value = 'Enter ISBN';
        }
        else if(content.name == 'username'){
            content.value = 'Enter User ID';
        }
        else{
            content.value = '';
        }
    }
}