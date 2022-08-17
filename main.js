
let data;

function API() {
    $.ajax({
        url:"",
        success: (keldi) =>{
            console.log(keldi);
            data = keldi
        },
        error: (err) =>{
            console.log(err);
        }
    })
}

API()