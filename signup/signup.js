const user =  document.getElementById("username").value;
const pass = document.getElementById("password").value;

function Check() {
    const inFo = [
        {
            'userName' : 'Kelvin',
           ' passWord' : '0000000000'
        },
        {
            'userName' : 'Emake',
            'passWord' : '0000000001'
        },
        {
            'userName' : 'William',
            'passWord' : '0000000002'
        },
    ];

    }

    if (user == inFo['userName'] || pass == inFo['passWord']) {
    alert("Welcome:)")
    } else {
    alert("Try again!!!")
    }
  ;