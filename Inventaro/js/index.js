const main = querySelector("#indexMain");

function addProfile() {
    // alert("Digite o nome do perfil!");
  let profileName = window.prompt("Digite o nome do perfil:");

  if (profileName == null) {
    alert("Digite o nome do perfil!");
  } else {
    let profile = document.createElement("div");
    profile.classList.add("profile");
    profile.innerHTML = `<div class="profileLeftWrapper">
        <img src="imgs/do-utilizador.png" height="45px" alt="Imagem e usuário padrão">
    </div>
    <div class="profileRightWrapper">
        <h1>` + profileName + `</h1>
    </div>`;
    main.appendChild(profile);
  }
}

//TODO - Revisar a função de adicionar perfil, expecificamente document.createElement("div");