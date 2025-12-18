function calculate() {
  const startInput = document.getElementById("last_start");
  const lengthInput = document.getElementById("period_length");
  const result = document.getElementById("result");

  const lastStart = startInput.value;
  const periodLength = parseInt(lengthInput.value, 10);

  // Kontroll
  if (!lastStart || isNaN(periodLength) || periodLength <= 0) {
    result.style.color = "#e53935";
    result.innerText = "❗ Palun sisesta korrektne kuupäev ja kestus";
    return;
  }

  // API päring
  fetch("/api/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      last_period_start: lastStart,
      period_length: periodLength
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("API error");
      }
      return response.json();
    })
    .then(data => {
      const startDate = new Date(data.next_start);
      const endDate = new Date(data.next_end);

      const formatDate = date =>
        date.toLocaleDateString("et-EE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        });

      result.style.color = "#2e7d32";
      result.innerHTML = `
        🌸 <strong>Järgmised päevad:</strong><br>
        ${formatDate(startDate)} – ${formatDate(endDate)}<br>
        <small>(${data.period_length} päeva)</small>
      `;
    })
    .catch(() => {
      result.style.color = "#e53935";
      result.innerText = "⚠️ Viga arvutamisel";
    });
}
