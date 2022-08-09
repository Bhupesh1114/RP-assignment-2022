const container = document.querySelector("#form");
const form = document.querySelector("#form>form");

let details = JSON.parse(localStorage.getItem("details")) || [];
console.log(details)

form.addEventListener("submit", signup);


function signup(event){
    event.preventDefault();
    const firstName = document.querySelector("#form>form>input[name = firstName]").value;
    const lastName = document.querySelector("#form>form>input[name = lastName]").value;
    const password = document.querySelector("#form>form>input[name = password]").value;

    const obj = {
        firstName,
        lastName,
        password
    }
    details.push(obj);
 console.log(details)
 localStorage.setItem("details", JSON.stringify(details));
 document.querySelector("table>tbody").innerHTML = "";
  mapData();
}

function mapData(){
    details.map((item,index) => {
        const tbody = document.querySelector("table>tbody");
    
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText = index +1;
        const td2 = document.createElement("td");
        td2.innerText = item.firstName;
        const td3 = document.createElement("td");
        td3.innerText = item.lastName;
        const td4 = document.createElement("td");
        td4.innerText = item.password;
        const td5 = document.createElement("td");
        const button = document.createElement("button");
        button.addEventListener("click",() => deleteItem(index))
        button.innerText = "Delete";
        td5.append(button)
    
        tr.append(td1,td2,td3,td4,td5);
       tbody.append(tr);
       document.querySelector("#form>form>input[name = firstName]").value = "";
       document.querySelector("#form>form>input[name = lastName]").value = "";
       document.querySelector("#form>form>input[name = password]").value = "";
    }) 
}

mapData();

function deleteItem(num){
    const filteredItems = details.filter((_,index) => {
        return index !== num;
    })
    
    console.log("FilterDetails:", filteredItems)
   
    localStorage.setItem("details", JSON.stringify(filteredItems));
    document.querySelector("table>tbody").innerHTML = null;
    details = filteredItems;
    mapData();
}



