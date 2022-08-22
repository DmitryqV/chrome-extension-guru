const age = prompt("Enter your age");
Array.from(document.querySelectorAll(".dd")).map((e, _) => _ === 2 || _ === 5 && (e.innerText = age));