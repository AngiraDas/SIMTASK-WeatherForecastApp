document.addEventListener("DOMContentLoaded", function () {
    const loc = document.getElementById("loc");
    const sb = document.getElementById("sb");
    
    const wi = document.getElementById("wi");

  const apiKey = "f14708a59dc289576e27dee8f06dbd3f";
  
  sb.addEventListener("click", () => {
    const pl = loc.value.trim();

    if (pl !== "") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${pl}&appid=${apiKey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          const temp = data.main.temp;
          const description = data.weather[0].description;
          wi.innerHTML = `<p>Temperature: ${temp}°C</p><p>Description: ${description}</p>`;
        })
        .catch((error) => {
          console.error("Error ", error);
          wi.innerHTML = "Error ";
        });
    }
  });
});
