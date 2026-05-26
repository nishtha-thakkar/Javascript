async function login() {
const form = document.getElementById("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let isAuth = false;
    try {
      if (!email || !password) {
        throw "All Fileds Are Required";
      }
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        throw new Error("login failed");
      } else {
        isAuth = true;
      }

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error", error);
    }
  });

}
login();
