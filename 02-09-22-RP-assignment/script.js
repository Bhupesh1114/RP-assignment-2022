// Getting tags
const main = document.querySelector("main");
const card = document.querySelector("#card");
const details = document.querySelector(".details");
const loading = document.createElement("img");

// Creating tags
const h2 = document.createElement("h2");
const img = document.createElement("img");
const p = document.createElement("p");
const a = document.createElement("a");
const errorHandleing = document.createElement("h2");

// Adding css class and loadong src and button innerText
loading.src =
  "https://thumbs.gfycat.com/AlarmedFrigidHusky-size_restricted.gif";
loading.classList.add("loading");
a.innerText = "Follow";

// Appending tags to their respective parent tags
details.append(img, h2, p, a);
card.append(loading, details);
main.append(errorHandleing);

const userData = async () => {
  try {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();
    console.log(data);
    const { first_name, last_name, avatar } = data;
    h2.innerText = `${first_name} ${last_name}`;
    img.src = avatar;
    a.setAttribute("href", avatar);
    loading.src = "";
  } catch (error) {
    console.log(error);
    if (error) {
      errorHandleing.innerText = "Something went wrong";
      loading.src = "";
      card.innerHTML = "";
    }
  }
};
userData();
