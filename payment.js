
(function () {
  const obfuscatedData = "MHgwQmNkZWYxMjM0NTZhQkM="; // base64 → 0x0Bcdef123456aBC
  const wallet = atob(obfuscatedData);

  const uselessData = atob("U29tZSBub25zZW5zZSBkYXRh");

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("wallet-address").innerText = wallet;
  });
})();
