const tripForm = document.getElementById("tripForm");
const tripList = document.getElementById("tripList");

tripForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;

  const li = document.createElement("li");
  li.textContent = `📍 ${destination} on ${date}${notes ? " — " + notes : ""}`;
  tripList.appendChild(li);

  tripForm.reset();
});
