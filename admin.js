if (localStorage.getItem("isAdmin") !== "true") {
  window.location.href = "index.html";
}
console.log("ADMIN OK");

let videos = JSON.parse(localStorage.getItem("videos")) || [];

function getYoutubeId(url) {
  const regExp = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function addVideo() {
  const title = document.getElementById("title").value;
  const url = document.getElementById("youtubeUrl").value;

  const id = getYoutubeId(url);

  if (!id) {
    alert("Lien YouTube invalide");
    return;
  }

  const video = {
    title: title,
    id: id,
  };

  videos.push(video);
  localStorage.setItem("videos", JSON.stringify(videos));

  renderVideos();
}

function renderVideos() {
  const list = document.getElementById("videoList");
  list.innerHTML = "";

  videos.forEach(v => {
    list.innerHTML += `
      <div style="margin:20px; padding:10px; background:#222; color:white;">
        <h3>${v.title}</h3>

        <img width="300"
        src="https://img.youtube.com/vi/${v.id}/maxresdefault.jpg">

        <br>

       <a class="download-btn" href="https://www.youtube.com/watch?v=${v.id}" target="_blank">
  ▶ Regarder
</a>
      </div>
    `;
  });
}

renderVideos();
// =======================
  // 🌙 MODE CLAIR / SOMBRE
  // =======================
  const themeBtn = document.getElementById("themeToggle");

  if (themeBtn) {

    themeBtn.addEventListener("click", () => {

      document.body.classList.toggle("light");

      if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☀️";
      } else {
        themeBtn.textContent = "🌙";
      }

    });

  }
