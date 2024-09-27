const search = document.querySelector('.search_input')
const cards = document.getElementsByClassName('card')

search.oninput = function(){
    let val = this.value.trim().toLowerCase()
    if (val !== ''){
        Array.from(cards).forEach(element => {
            var name = element.querySelector('.name').textContent.toLowerCase()

            if (name.search(val) == -1){
                element.classList.add('hide')
            }
            else {
                element.classList.remove('hide')
            }
        })
    }
    else{
        Array.from(cards).forEach(element => {
            element.classList.remove('hide')
        })
    }
}


