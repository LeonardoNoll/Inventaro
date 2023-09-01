let main = document.querySelector("main");

function addProfile() {
    // alert("Digite o nome do perfil!");
  let profileName = window.prompt("Digite o nome do perfil:");

  if (profileName == null) {
    alert("Digite o nome do perfil!");
  } else {
    let profile = document.createElement("span");
    profile.classList.add("profile");
    let left = document.querySelector('#leftBase').cloneNode(true);
    let right = document.createElement("div");
    right.classList.add("profileRightWrapper");
    let name = document.createElement("h1");
    name.innerText = profileName;

    right.appendChild(name);
    profile.appendChild(left);
    profile.appendChild(right);
    main.appendChild(profile);
  }
}

//TODO - Revisar a função de adicionar perfil, expecificamente document.createElement("div");