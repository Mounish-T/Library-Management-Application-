let mode = 'add';

var dialogForm = document.getElementById('memInfo');
dialogForm.addEventListener('keydown', (event)=>{
    // console.log(event);
    if(event.key == 'Enter'){
        event.preventDefault();
        addOrUpdateMember(mode);
    }
    else if(event.key == 'Escape'){
        event.preventDefault();
        cancelAddMem();
        editOrDeleteBack();
    }
});

window.addEventListener('keydown', (event)=>{
    if(event.key == 'Escape'){
        cancelAddMem();
        editOrDeleteBack();
    }
})

var addOrUpdateButton = document.getElementById('addOrUpdateMemButton');
addOrUpdateButton.addEventListener('click', ()=>{
    addOrUpdateMember(mode);
});

function cancelAddMem(){
    let formcontent = document.getElementsByClassName('form-input');
    for(let content of formcontent){
        content.classList.remove('error-input');
        if(content.name == 'gender'){
            content.checked = false;
        }   
        else if(content.name != 'pass'){
            content.value = "";
        }     
        else if(content.name == 'pass'){
            content.value = 'Welcome@123';
        }   
        var name = document.getElementById(content.name);
        name.style.display = 'none';
    }
    let smallTag = document.getElementsByTagName('small');
    for(let tag of smallTag){
        tag.style.display = 'none';
    }
    document.getElementById('addOrUpdateMemButton').innerText = 'Add Members';
    mode = 'add';
    let dialogForm = document.getElementsByClassName('form')[0];
    dialogForm.close();
    let deleteDialog = document.getElementById('delMem');
    deleteDialog.close();
    editOrDeleteBack();
}

function addOrUpdateMember(task){    
    let formcontent = document.getElementsByClassName('form-input');
    let click = false;
    let isSecond = false;
    let isValid = true;
    for(let content of formcontent){    
        if(content.name == 'gender'){
            if(content.checked){
                click = true;
            }
            if(!click && isSecond){
                isValid = false;
                var name = document.getElementById(content.name);
                name.style.display = 'block';
            }
            else{
                var name = document.getElementById(content.name);
                name.style.display = 'none';
            }
            isSecond = true;
        }
        else if(content.value.trim() == ""){
            isValid = false;
            content.value = "";
            content.classList.add('error-input');
            var name = document.getElementById(content.name);
            name.style.display = 'block';
        }

        // Add logic for checking the existing user and email
        else if(content.name == 'username'){
            if(content.value == '<Existing user>'){
                isValid = false;
                content.classList.add('error-input');
                var name = document.getElementById(content.name);
                name.innerHTML = 'User is already registered';
                name.style.display = 'block';
            }
            else{
                content.classList.remove('error-input');
                var name = document.getElementById(content.name);
                name.style.display = 'none';
            }
        }
        else if(content.name == 'email'){
            if(content.value == '<Existing email>'){
                isValid = false
                content.classList.add('error-input');
                var name = document.getElementById(content.name);
                name.innerHTML = 'Email is already registered';
                name.style.display = 'block';
            }
            else if(!/^\S+@\S+\.\S+$/.test(content.value)){
                isValid = false;
                content.classList.add('error-input');
                var name = document.getElementById(content.name);
                name.innerHTML = 'Invalid email';
                name.style.display = 'block';
            }
            else{
                content.classList.remove('error-input');
                var name = document.getElementById(content.name);
                name.style.display = 'none';
            }
        }
        else if(content.name == 'contact'){
            let isNaN = false;
            for(let ch of content.value){
                if(!(ch >= '0' && ch <= '9')){
                    isNaN = true;
                    break;
                }
            }
            if(content.value.length == 10 && !isNaN){
                content.classList.remove('error-input');
                var name = document.getElementById(content.name);
                name.style.display = 'none';
            }
            else{
                isValid = false;
                content.classList.add('error-input');
                var name = document.getElementById(content.name);
                name.innerHTML = 'Invalid contact number';
                name.style.display = 'block';
            }
        }
        else{
            content.classList.remove('error-input');
            var name = document.getElementById(content.name);
            name.style.display = 'none';
        }
    }
    
    // console.log(isValid);
    
    if(!isValid) return;
    let res = new Map();
    for(let content of formcontent){
        if(content.name == 'gender'){
            if(content.checked){
                res.set(content.name, content.value);
            }
        }
        else{
            res.set(content.name, content.value);
        }
    }
    // console.log(res);
    // console.log(task);      
    if(task == 'add'){
        // Logic for adding data in db
    }
    else if(task == 'update'){
        // Logic for update data in db
    }
    cancelAddMem();
    editOrDeleteBack();
}

function selectToEditMember(){
    let container = document.getElementsByClassName('container');
    let selectRadio = document.getElementsByClassName('selectOne');
    for(let idx = 0; idx < container.length; idx++){
        let eachContainer = container[idx];
        eachContainer.style.cursor = 'pointer';
        eachContainer.style.transition = 'none';
        eachContainer.addEventListener('mouseover', ()=>{
            eachContainer.style.transform = 'scale(1.0)';
        });
        eachContainer.addEventListener('click', ()=>{
            selectRadio[idx].checked = true;
        })
    }
    
    for(let eachRadio of selectRadio){
        eachRadio.style.cursor = 'pointer';
        eachRadio.style.display = 'block';
    }
    let disableCurrentOptions1 = document.getElementsByClassName('managemem1');
    disableCurrentOptions1[0].style.display = 'none';
    let disableCurrentOptions2 = document.getElementsByClassName('managemem3');
    disableCurrentOptions2[0].style.display = 'none';
    
    let enableNewOptions = document.getElementsByClassName('managemem2');
    enableNewOptions[0].style.display = 'flex';
}

function editMember(){
    let formcontent = document.getElementsByClassName('form-input');
    document.getElementById('addOrUpdateMemButton').innerText = 'Update Member';
    mode = 'update';
    for(let content of formcontent){
        // Paste the clicked user data to form by getId 'form-content'
        content.value = 'Hi';
    }
    dialogForm.showModal();
}

function editOrDeleteBack(){
    let container = document.getElementsByClassName('container');
    let selectRadio = document.getElementsByClassName('selectOne');
    for(let eachContainer of container){
        eachContainer.style.cursor = '';
        eachContainer.style.transition = 'transform 0.3s ease';
        eachContainer.addEventListener('mouseover', ()=>{
            eachContainer.style.transform = 'scale(1.1)';
        });
        eachContainer.addEventListener('mouseout', ()=>{
            eachContainer.style.transform = 'scale(1.0)';
        });
    }
    for(let eachRadio of selectRadio){
        eachRadio.style.display = 'none';
        eachRadio.checked = false;
    }
    let disableCurrentOptions1 = document.getElementsByClassName('managemem2');
    disableCurrentOptions1[0].style.display = 'none';

    let disableCurrentOptions2 = document.getElementsByClassName('managemem3');
    disableCurrentOptions2[0].style.display = 'none';
    
    let enableNewOptions = document.getElementsByClassName('managemem1');
    enableNewOptions[0].style.display = 'flex';
}

function selectToDeleteMember(){
    let container = document.getElementsByClassName('container');
    let selectRadio = document.getElementsByClassName('selectOne');
    for(let idx = 0; idx < container.length; idx++){
        let eachContainer = container[idx];
        eachContainer.style.cursor = 'pointer';
        eachContainer.style.transition = 'none';
        eachContainer.addEventListener('mouseover', ()=>{
            eachContainer.style.transform = 'scale(1.0)';
        });
        eachContainer.addEventListener('click', ()=>{
            selectRadio[idx].checked = true;
        })
    }
    
    for(let eachRadio of selectRadio){
        eachRadio.style.cursor = 'pointer';
        eachRadio.style.display = 'block';
    }
    let disableCurrentOptions1 = document.getElementsByClassName('managemem1');
    disableCurrentOptions1[0].style.display = 'none';

    let disableCurrentOptions2 = document.getElementsByClassName('managemem2');
    disableCurrentOptions2[0].style.display = 'none';
    
    let enableNewOptions = document.getElementsByClassName('managemem3');
    enableNewOptions[0].style.display = 'flex';
}

function deleteMember(){
    let deleteDialog = document.getElementById('delMem');
    deleteDialog.showModal();
}

function submitDeleteMember(){
    // Logic for delete the member to db
    cancelAddMem();
    editOrDeleteBack();
}