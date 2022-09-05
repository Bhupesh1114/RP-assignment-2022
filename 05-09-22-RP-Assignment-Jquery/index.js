// Getting UserData from the localStorage
const userdata = JSON.parse(localStorage.getItem("userData")) || [];

// Code for getting the from data
$("document").ready(function () {
  $("h3").hide();
  $("form").on("submit", function (event) {
    event.preventDefault();
    const firstName = $('[name = "firstname"]').val();
    const lastName = $('[name = "lastname"]').val();
    const password = $('[name = "password"]').val();
    const country = $("select option:selected").text();
    const formData = {
      firstName,
      lastName,
      password,
      country,
    };
    if (firstName && lastName && password && country !== "Choose Country") {
      userdata.push(formData);
      $('[name = "firstname"]').val("")
      $('[name = "lastname"]').val("")
      $('[name = "password"]').val("")
      $("h3").hide();
    } else {
      $("h3").show();
    }

    localStorage.setItem("userData", JSON.stringify(userdata));
    mapData();
  });
});

// Created Function for mapping the data
function mapData() {
  $("tbody").empty();
  userdata.map(({ firstName, lastName, country, password }, ind) => {
    $("tbody").append(`
        <tr>
        <td>${ind + 1}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${country}</td>
        <td>${password}</td>
        </tr>
        `);
  });
  $("table>thead>tr>td").addClass("border");
  $("table>tbody>tr>td").addClass("border");
}
mapData();
