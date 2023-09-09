let main = document.querySelector("main");

function addProfile() {
    // alert("Digite o nome do perfil!");
  let profileName = window.prompt("Digite o nome do perfil:");

  if (profileName.length == 0) {
    alert("Digite o nome do perfil!");
  } else {
    let profile = document.createElement("span");
    profile.classList.add("profile");
    profile.addEventListener("click", function () {location.href = "categoria.html";});
    let left = document.querySelector('#leftBase').cloneNode(true);
    let right = document.createElement("div");
    right.classList.add("profileRightWrapper");
    let name = document.createElement("h1");
    name.innerText = profileName;

    right.appendChild(name);
    profile.appendChild(left);
    profile.appendChild(right);
    main.insertBefore(profile,document.querySelector("#addProfile"));
  }
}

