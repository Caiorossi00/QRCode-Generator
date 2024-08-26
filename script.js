const generateBtn = document.getElementById("generate-btn");
const qrCodeContainer = document.getElementById("qrcode");
const downloadBtn = document.getElementById("download-btn");

generateBtn.addEventListener("click", () => {
  const text = document.getElementById("text-input").value;

  qrCodeContainer.innerHTML = "";

  const qr = qrcode(0, "L");
  qr.addData(text);
  qr.make();

  const imgTag = qr.createImgTag(10);
  qrCodeContainer.innerHTML = imgTag;

  qrCodeContainer.style.display = "flex";
});

downloadBtn.addEventListener("click", (event) => {
  if (!downloadBtn.href) {
    event.preventDefault();
  }
});
