let addElement = document.getElementById('addLib');
addElement.addEventListener('keydown', (event)=>{
    console.log(event);
    if(event.key == 'Enter'){
        console.log("Dad");
        addLibrarian();
    }
})

function cancelAddLib(add){
    let cancel = document.getElementById('cancel');
    let formcontent = document.getElementsByClassName('form-input');
    for(let content of formcontent){
        content.classList.remove('error-input');
        if(content.name == 'gender'){
            content.checked = false;
        }   
        else if(content.name != 'pass'){
            content.value = "";
        }        
        var name = document.getElementById(content.name);
        name.style.display = 'none';
    }
    if(add) addLib.showModal();
    else addLib.close();
}

function addLibrarian(){
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
                console.log(content.classList);
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
            console.log(parseInt(content.value == NaN));
            if(content.value.length == 10 && !Number.isNaN(parseInt(content.value))){
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
    
    console.log(isValid);
    
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
    console.log(res);
    addLib.close();
}

function editLibrarian(){
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
    let disableCurrentOptions = document.getElementsByClassName('managelib1');
    disableCurrentOptions[0].style.display = 'none';
    
    let enableNewOptions = document.getElementsByClassName('managelib2');
    enableNewOptions[0].style.display = 'flex';

    let clickEdit = document.getElementById('editbtn');
    clickEdit.addEventListener('click', ()=>{
        addElement.showModal();
    });
}

function editBack(){
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
    let disableCurrentOptions = document.getElementsByClassName('managelib2');
    disableCurrentOptions[0].style.display = 'none';
    
    let enableNewOptions = document.getElementsByClassName('managelib1');
    enableNewOptions[0].style.display = 'flex';
}