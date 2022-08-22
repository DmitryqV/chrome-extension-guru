const age = '';
const date = '';

setTimeout(() => { 
   setTimeout(() => {
    Array.from(document.querySelectorAll(".dd")).map((e, _) => {
        _ === 2 && (e.innerText = age.toString()); 
        if (_ === 5) {
            e.textContent = `${e.textContent.substring(0, e.textContent.trim().lastIndexOf(" "))}и ${date}`
        };
    });
   }, 200) 
}, 0) 
