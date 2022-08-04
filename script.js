const gendericon = document.querySelector("#span-gender-icon");
const name = document.querySelector("#p-name");
const div1 = document.querySelector("#div-user-card");
const pic = document.querySelector("#img-profile");
const email = document.querySelector("#p-email");
const load = document.querySelector("#div-loading-card");
const btnrandom = document.querySelector("#btn-random");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  const gender = resp.data.results[0].gender;
  if (gender == "male") gendericon.innerText = "👨";
  else if (gender == "female") gendericon.innerText = "👩";
  name.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  pic.src = resp.data.results[0].picture.large;
  email.innerText = resp.data.results[0].email;
}

callApi();
load.disabled = true;

btnrandom.onclick = async () => {
  callApi();
};

