
document.addEventListener("DOMContentLoaded", () => {

  console.log("JS OK");
 function updateAccess() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const videos = document.querySelector(".videos-section");
  const music = document.querySelector(".music-section");

  if (isAdmin) {
    videos?.classList.remove("locked");
    music?.classList.remove("locked");
  } else {
    videos?.classList.add("locked");
    music?.classList.add("locked");
  }
}
  // =======================
  // 🍔 BURGER MENU
  // =======================
  const burger = document.getElementById("burger");
  const navbar = document.getElementById("navbar");

  if (burger && navbar) {
    burger.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

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

  // =======================
  // 🎯 MODAL USER
  // =======================
  const modal = document.getElementById("modal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");

  if (modal && openModal && closeModal) {

    openModal.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // =======================
  // 🔁 SWITCH LOGIN / REGISTER
  // =======================
  const registerContainer = document.getElementById("registerContainer");
  const loginContainer = document.getElementById("loginContainer");

  const showLogin = document.getElementById("showLogin");
  const showRegister = document.getElementById("showRegister");

  if (registerContainer && loginContainer && showLogin && showRegister) {

    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      registerContainer.classList.add("hidden");
      loginContainer.classList.remove("hidden");
    });

    showRegister.addEventListener("click", (e) => {
      e.preventDefault();
      loginContainer.classList.add("hidden");
      registerContainer.classList.remove("hidden");
    });
  }

  // =======================
  // 🔓 DEBLOQUER CONTENU
  // =======================
  function unlockContent() {
    document.querySelector(".videos-section")?.classList.remove("locked");
    document.querySelector(".music-section")?.classList.remove("locked");
  }

  // =======================
  // 🔐 FORMULAIRES USER
  // =======================
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Inscription réussie !");
      unlockContent();
      modal.style.display = "none";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Connexion réussie !");
      unlockContent();
      modal.style.display = "none";
    });
  }

  // =======================
// =======================
// 🔐 ADMIN SYSTEM FIX
// =======================

const adminLink = document.getElementById("adminLink");
const adminLoginBtn = document.getElementById("adminLoginBtn");

function updateAdminUI() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (isAdmin) {
    adminLink.style.display = "inline-block";
    adminLoginBtn.style.display = "none";
  } else {
    adminLink.style.display = "none";
    adminLoginBtn.style.display = "inline-block";
  }
}

updateAdminUI();

const adminModal = document.getElementById("adminModal");
const closeAdminModal = document.getElementById("closeAdminModal");
const adminLoginSubmit = document.getElementById("adminLoginSubmit");
const adminPassword = document.getElementById("adminPassword");

const ADMIN_PASSWORD = "1234";

// ouvrir modal
adminLoginBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  adminModal.style.display = "flex";
});

// fermer modal
closeAdminModal?.addEventListener("click", () => {
  adminModal.style.display = "none";
});

// login admin
adminLoginSubmit?.addEventListener("click", () => {
  if (adminPassword.value === ADMIN_PASSWORD) {

    localStorage.setItem("isAdmin", "true");

    updateAdminUI();

    alert("Connexion admin réussie !");
    window.location.href = "admin.html";

  } else {
    alert("Mot de passe incorrect !");
  }
});

// clic dehors modal
window.addEventListener("click", (e) => {
  if (e.target === adminModal) {
    adminModal.style.display = "none";
  }
}); 

  // =======================
  // 🚪 LOGOUT ADMIN
  // =======================
  const logoutAdmin = document.getElementById("logoutAdmin");

  logoutAdmin?.addEventListener("click", () => {
    localStorage.removeItem("isAdmin");
    updateAdminUI();
    location.reload();
  });

});