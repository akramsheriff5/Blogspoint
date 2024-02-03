


console.log("ss")
function login(){
    var username = document.getElementById('loginUsername').value
    var password = document.getElementById('loginPassword').value
    var csrf = document.getElementById('csrf').value
    
    let alertPoint = document.getElementById('alert-point')


    if(username == '' && password == ''){
        
        alertPoint.innerHTML = '<i class="fa fa-exclamation-triangle"></i>You must enter both'
    }

    var data = {
        'username' : username,
        'password' : password
    }

    fetch('/api/login/' , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken' : csrf,
        },
       
        body : JSON.stringify(data)
    }).then(result => result.json())
    .then(response => {
        
        if(response.status == 200){
            window.location.href = '/'
        }
        else{
            
        alertPoint.innerHTML = `<i class="fa fa-exclamation-triangle"></i>${response.message}`
        }

    })

}


function register(){
    var username = document.getElementById('loginUsername').value
    var password = document.getElementById('loginPassword').value
    var csrf = document.getElementById('csrf').value
    let alertPoint = document.getElementById('alert-point')

    if(username == '' && password == ''){
        
        alertPoint.innerHTML = '<i class="fa fa-exclamation-triangle"></i>You must enter both'
    }

    var data = {
        'username' : username,
        'password' : password
    }

    fetch('/api/register/' , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken' : csrf,
        },
       
        body : JSON.stringify(data)
    }).then(result => result.json())
    .then(response => {
        console.log(response)
        if(response.status == 200){
            window.location.href='/login'
          
        }
        else{
            alertPoint.innerHTML = `<i class="fa fa-exclamation-triangle"></i>${response.message}`
        }

    })

}