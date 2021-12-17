document.getElementById("authbtn").addEventListener("click", (event) => {
  if (isAutherized) {
    alert("User is authorized.");
  } else {
    alert("Not autherized!");
  }
});

let isAutherized = function (event) {
  const result = fetch("/checkAuth/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("token"),
    }),
  }).then((res) => res.json());

  if ((result.status = "ok")) {
    return true;
  } else {
    console.log(result.error);
    return false;
  }
};

export default isAutherized;
