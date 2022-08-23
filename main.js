/**
* Example
* const [releaseDate, birthDate] = ["24.11.2015", "11.11.2001"];
*/
const [releaseDate, birthDate] = ["", ""];

/**
* Execute code after all requests
*/
setTimeout(() => {
  /**
  * Running code after rendering
  * Max rate = 200ms
  */
  setTimeout(() => {
    if (window.location.href === "https://esia.gosuslugi.ru/profile/user/personal") {
      /**
      * Work with dom nodes
      */
      Array.from(document.querySelectorAll(".dd")).map((e, _) => {
        if (_ === 2) e.innerText = birthDate;

        if (_ === 5) {
          e.innerText = `${e.textContent.substring(0, e.textContent.trim().lastIndexOf(" "))}и ${releaseDate}`;
        }
      });
    }
    /**
    * Coming soon
    */
  }, 200);
}, 0);
