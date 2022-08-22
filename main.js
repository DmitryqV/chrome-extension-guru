const age = prompt("yo");
const date = prompt("date");

setTimeout(() => { 
    Array.from(document.querySelectorAll(".dd")).map((e, _) => {
        _ === 2 && (e.innerText = age.toString()); 
        if (_ === 5) {
            e.textContent = `${e.textContent.substring(0, e.textContent.trim().lastIndexOf(" "))}и ${date}`
        };
    }); 
}, 0) 
