
let data;

let korzinka = [

]

function API() {
    $.ajax({
        url:"https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du",
        success: (keldi) =>{
            console.log(keldi.results.books);
            data = keldi.results.books
            Ekran(data)
        },
        error: (err) =>{
            console.log(err);
        }
    })
}

API()




    function Ekran(masiv) {
        $("#map-card").html("")
        masiv.map((v,i)=>{
           let col = `
            <div class="col-lg-3 col-sm-12">
                <div class="map-card">
                    <p>${v.title.length>20 ? `${v.title.slice(0,15)}...` :v.title}</p>
                    <p>${v.contributor.length>15 ? `${v.contributor.slice(0,10)} ...`  :v.contributor}</p>
                    <img class="rasm-1" src="${v.book_image}" alt="">
                    <p class="mt-2">USD $${v.weeks_on_list}</p>
                    <button class="bt-korzin" onclick="Add(${i})">Korzina</button>
                    <button  onclick="Modal(${i})" type="button" class="bt-korzin" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Info
                    </button>
                </div>
            </div>
           `
           $("#map-card").append(col)
        })

        
    }



    function Search(a) {
        let yangi = data.filter(v=>{
            return v.title.toLowerCase().includes(a.toLowerCase())
        })
        Ekran(yangi)
    }




    function Order(masiv) {
        $("#row").html("")
        masiv.map((v,i)=>{
           let col = `
            <div class="col-lg-12 col-sm-6">
                <div class="map-card">
                    <p>${v.title}</p>
                    <p>I.E.Bowman</p>
                    <img class="rasm-1" src="${v.book_image}" alt="">
                    <p class="mt-2">USD $${v.weeks_on_list}</p>
                </div>
            </div>
           `
           $("#row").append(col)
        })
    }



    function Add(i) {
        korzinka.push(data[i])
        Order(korzinka)
    }



    function Modal(i) {
        $(".tik").html("")
        let div = `
        <div class="chap-10">
        <img src="${data[i].book_image}" alt="" class="modal-img">
    </div>
    <div class="ong-10">
        <p class="text-center">
            ${data[i].title}
        </p>
        <p class="text-center text-warning"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        <p class="text-center">${data[i].description}</p>
    </div>
        `
        $(".tik").append(div)
    }