var json = []
async function getData(){
    const data = await fetch(`${baseurl}/gettask`)
    json = await data.json()
    tasks()
}
getData()
function tasks(){
    document.getElementById("content").innerHTML = ""
    for(var i=0; i<=json.length-1;i++){
        const div = document.createElement("div")
        div.classList.add("div")

        const h1 = document.createElement("h1")
        h1.innerHTML = json[i].msg

        div.appendChild(h1)
        document.getElementById("content").appendChild(div)
    }
}

async function addTask(){
    var input = document.getElementById("inp").value
    await fetch(`${baseurl}/addtask/${input}`)
    await getData()
    tasks()
}