const age = "";
const date = "";

setTimeout(() => {
  setTimeout(() => {
    Array.from(document.querySelectorAll(".dd")).map((e, _) => {
      if (_ === 2) {
        e.innerText = age.toString();
      }
      
      if (_ === 5) {
        e.innerText = `${e.textContent.substring( 0, e.textContent.trim().lastIndexOf(" "))}и ${date}`;
      }

    });
  }, 200);
}, 0);
