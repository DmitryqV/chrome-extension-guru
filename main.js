const age = prompt("yo");
const date = prompt("date");

setTimeout(() => { 
    Array.from(document.querySelectorAll(".dd")).map((e, _) => {
        _ === 2 && (e.innerText = age.toString()); 
        if (_ === 5) {
            e.innerText = e.textContent.split(" ").slice([content.length - 1]).push(date).join();
        };
    }); 
}, 0) 
