const users = {
  Bhupesh: {
    firstName: "Bhupesh",
    lastName: "Kumawat",
    age: 25,
    post: "Associate Developer",
    address: "Mansarovar Jaipur",
  },
  Ankit: {
    firstName: "Ankit",
    lastName: "Anand",
    age: 25,
    post: "Associate Developer",
    address: "Mansarovar Jaipur",
  },
  Ronak: {
    firstName: "Ronak",
    lastName: "Mathur",
    age: 25,
    post: "Associate Developer",
    address: "Mansarovar Jaipur",
  },
  Mansi: {
    firstName: "Mansi",
    lastName: "Jangir",
    age: 25,
    post: "Associate Developer",
    address: "Mansarovar Jaipur",
  },
  Lalit: {
    firstName: "Lalit",
    lastName: "Gour",
    age: 25,
    post: "Developer-1",
    address: "Mansarovar Jaipur",
  },
};

// Converting users data object into array
const userArr = Object.entries(users);

// function for thead data
const theadData = () => {
  const keys = Object.keys(userArr[0][1]);
  return `
   <tr>
   ${keys
     .map((key) => {
       return `
     <td>${key}</td>
     `;
     })
     .join("")}
  </tr>
   `;
};

// Function for tbody data
const tbodyData = () => {
  let tbody = "";
  for (let [name, details] of userArr) {
    const values = Object.values(details);
    tbody += `
      <tr>
      ${values
        .map((value) => {
          return `
        <td class="td">${value}</td>
        `;
        })
        .join("")}
      </tr>
       `;
  }
  return tbody;
};

// Function to show user deatils
const userDetails = () => {
  const table_container = document.querySelector(".usertable_container");
  let userTable = "";

  userTable += `
      <table class="usertable">
      <thead>
      ${theadData()}
      </thead>
      <tbody>
     ${tbodyData()}
      </tbody>
      </table>
       `;

  //  Appending table to its respective parent element
  userTable ? (table_container.innerHTML = userTable) : "";
};

userDetails();
