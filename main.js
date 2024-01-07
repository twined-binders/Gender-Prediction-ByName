async function prediksi(event) {
  if (event.key == "Enter") {
    const namaDepan = event.target.value;
    const queryUrl = `https://api.genderize.io/?name=${namaDepan}`;
    const response = await fetch(queryUrl);
    const result = await response.json();
    showHasil(result.name, result.gender, result.probability);
  }
}

function showHasil(name, gender, probability) {
  const textHasil = document.getElementById("hasil");
  const percentProb = probability * 100;
  let genderTranslate;

  if (gender == "male") {
    genderTranslate = "Laki-laki";
  } else {
    genderTranslate = "Perempuan";
  }
  textHasil.textContent = `Nama ${name}, Kemungkinan ${percentProb}% adalah ${genderTranslate}`;
}
