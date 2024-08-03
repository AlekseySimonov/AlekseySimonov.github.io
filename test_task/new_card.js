var container = document.querySelector('.container')

function getData(){
    fetch('./info.json')
    .then((response) => {
        return response.json()
    })
    .then((jsonData) => {
        createCard(jsonData)
    })
}

function createCard (jsonData){
    let html = ''
    jsonData.forEach(element => {
        html += cardHtml(element)
        container.innerHTML = html
    })
}


function cardHtml(element){

    return(
        `<div class="card" style="background-color: ${element.hexcolor};">
            <p class="name">${element.name}</p>
            <div class="data">
                        <div class="nameData">
                            <img src="./img/phone.svg" alt="#">
                            ТЕЛЕФОН
                        </div>
                        <p class="phone">${element.phoneNumber}</p>
                    </div>

            <div class="data">
                <div class="nameData">
                    <img src="./img/email.svg" alt="#">
                    EMAIL
                </div>
                <p class="email">${element.email}</p>
            </div>

            <div class="data">
                <div class="nameData">
                    <img src="./img/adress.svg" alt="#">
                    АДРЕС
                </div>
                <p class="adress">${element.address}</p>
            </div>
        </div>`
    )
}


getData()



