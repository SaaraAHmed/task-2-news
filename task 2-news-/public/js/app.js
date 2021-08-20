var form = document.getElementById('myform')
form.addEventListener('submit',function (event){
event.preventDefault()
// console.log(document.getElementById('address').value)
FormData()
})


let carddata =function async(){
    const res= await fetch('http://localhost:3000/news')
    if(data.error){
        document.getElementById('error'). textContent = data.error
        document.getElementById('cardimage').textContent=''
        document.getElementById('title').textContent=''
        document.getElementById('description').textContent = ''

    }else{
        document.getElementById('title'). textContent = data.title
        document.getElementById('cardimage').textContent=data.cardimage
        document.getElementById('description').textContent=description
        document.getElementById('error').textContent=''
    }

}


