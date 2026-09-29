import { toJpeg } from "html-to-image";
document.addEventListener("click", async (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const card = target.closest("[data-fighter-card]");
  if (!(card instanceof HTMLElement)) return;
  try {
    const image = await toJpeg(card, {
      quality: 0.95,
      pixelRatio: 2,
      backgroundColor: "#181918",
    });
    const fighterName = card.dataset.fighterName || "fighter-card";
    const link = document.createElement("a");
    link.download = `${fighterName}.jpg`;
    link.href = image;
    link.click();
  } catch (error) {
    console.error("Nepodařilo se vytvořit obrázek:", error);
  }
});
