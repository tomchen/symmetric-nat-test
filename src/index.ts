import { isNormalNat } from "./isNormalNat";

(async () => {
  const isNN = await isNormalNat();
  const el = document.querySelector(".nat");
  if (el instanceof HTMLElement) {
    el.innerText = isNN ? "Normal NAT" : "Symmetric NAT";
  }
})();
