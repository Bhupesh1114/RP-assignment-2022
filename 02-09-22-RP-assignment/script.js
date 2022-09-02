// Getting tags
const main = document.querySelector("main");
const card = document.querySelector("#card");
const details = document.querySelector(".details");
const loading = document.createElement("img");

// Creating tags
const h2 = document.createElement("h2");
const img = document.createElement("img");
const p1 = document.createElement("p");
const dob = document.createElement("p");
const a = document.createElement("a");
const errorHandleing = document.createElement("h2");

// Adding css class and loadong src and button innerText
loading.src =
  "https://thumbs.gfycat.com/AlarmedFrigidHusky-size_restricted.gif";
loading.classList.add("loading");
a.innerText = "Follow";

// Appending tags to their respective parent tags
details.append(img, h2, p1, dob, a);
card.append(loading, details);
main.append(errorHandleing);

const datehandleing = (value) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const splitValue = value.split("-");
  const month = months.find((item, index) => {
    if (index + 1 == splitValue[1]) {
      return item;
    }
  });
  return `${month}, ${splitValue[2]} ${splitValue[0]}`;
};

const userData = async () => {
  try {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();
    console.log(data);
    const {
      first_name,
      last_name,
      avatar,
      employment: { title },
      date_of_birth,
    } = data;
    h2.innerText = `${first_name} ${last_name}`;
    img.src = avatar;
    p1.innerText = title;
    dob.innerHTML = `DOB:- ${datehandleing(date_of_birth)}`;
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
