const search = document.querySelector('.search_input')
const cards = document.querySelectorAll('.card')

search.oninput = function(){
    let val = this.value.trim()
    console.log(val)
    if (val != ''){
        cards.forEach(element => {
            var name = element.querySelector('.name')
            console.log(name)
            if (name.innerText.search(val) == -1){
                element.classList.add('hide')
            }
            else {
                element.classList.remove('hide')
            }
        })
    }
    else{
        cards.forEach(element => {
            element.classList.remove('hide')
        })
    }
}