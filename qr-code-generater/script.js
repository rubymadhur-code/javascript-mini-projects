const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  const text = qrText.value.trim();
  if (text === "") {
    alert("Please enter some text or url first");
    return;
  }
  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    text
  )}`;
  qrImage.src = qrURL;
  qrImage.style.display = "block";
});
