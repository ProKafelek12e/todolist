var json = []
async function getData(){
    const data = await fetch(`${baseurl}/gettask`)
    json = await data.json()
    console.log("pobrane")
    console.log(json)
    tasks()
}
getData()
function tasks(){
    console.log("task")
    document.getElementById("content").innerHTML = ""
    for(var i=0; i<=json.length-1;i++){
        const div = document.createElement("div")
        div.classList.add("div")

        const h1 = document.createElement("h1")
        h1.innerHTML = json[i].msg

        //const bt = document.createElement("button")
        //bt.innerHTML = "❌"
        div.appendChild(h1)
        //div.appendChild(bt)
        document.getElementById("content").appendChild(div)
        console.log("for")
    }
}

async function addTask(){
    var input = document.getElementById("inp").value
    await fetch(`${baseurl}/addtask/${input}`)
    await getData()
    tasks()
}