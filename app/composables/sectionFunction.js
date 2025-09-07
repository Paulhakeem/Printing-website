import { ref, computed } from "vue";
export default function () {
  // Categories you offer
  const categories = [
    "Printing",
    "Branding & Design",
    "Merch & Apparel",
    "Signage",
    "Packaging",
    "Events",
  ];

  // Catalog data (sample). Replace images with your own in /public/images/services/*
  const catalog = [
    {
      title: "Business Cards",
      slug: "business-cards",
      category: "Printing",
      desc: "Premium cards with matte, gloss, or textured finishes.",
      priceFrom: "KSh 1,500",
      tags: ["Matte/Gloss", "Lamination", "Emboss"],
      image: "/images/services/cards.jpeg",
    },
    {
      title: "Flyers & Brochures",
      slug: "flyers-brochures",
      category: "Printing",
      desc: "Single & tri-fold, full-color marketing flyers.",
      priceFrom: "KSh 2,500",
      tags: ["A5/A4", "Tri-fold", "Full Color"],
      image: "/images/services/flyers.jpeg",
    },
    {
      title: "Large Format Banners",
      slug: "vinyl-banners",
      category: "Signage",
      desc: "Outdoor vinyl or mesh banners with eyelets.",
      priceFrom: "KSh 1,200 / m²",
      tags: ["Outdoor", "Roll-up", "Mesh"],
      image: "/images/services/large.jpeg",
    },
    {
      title: "Stickers & Labels",
      slug: "stickers-labels",
      category: "Printing",
      desc: "Die-cut stickers, product labels, waterproof options.",
      priceFrom: "KSh 800",
      tags: ["Die-cut", "Waterproof", "Packaging"],
      image: "/images/services/sticker.jpg",
    },
    {
      title: "T-Shirt Printing",
      slug: "tshirt-printing",
      category: "Merch & Apparel",
      desc: "DTF, screen print or embroidery for uniforms & promos.",
      priceFrom: "KSh 900",
      tags: ["DTF", "Embroidery", "Screen"],
      image: "/images/services/tshirt.jpeg",
    },
    {
      title: "Mugs & Drinkware",
      slug: "mugs-drinkware",
      category: "Merch & Apparel",
      desc: "Photo mugs, travel tumblers, branded bottles.",
      priceFrom: "KSh 700",
      tags: ["Sublimation", "Gift", "Corporate"],
      image: "/images/services/bottles.jpg",
    },
    {
      title: "Logo & Brand Identity",
      slug: "logo-brand-identity",
      category: "Branding & Design",
      desc: "Logo design, brand guide, typography & colors.",
      priceFrom: "KSh 15,000",
      tags: ["Logo", "Brand Guide", "Stationery"],
      image: "/images/services/logo.jpg",
    },
    {
      title: "Vehicle Branding",
      slug: "vehicle-branding",
      category: "Signage",
      desc: "Full/partial wraps, decals, and magnetic signs.",
      priceFrom: "KSh 25,000",
      tags: ["Wrap", "Decals", "Fleet"],
      image: "/images/services/car.png",
    },
    {
      title: "Custom Packaging",
      slug: "custom-packaging",
      category: "Packaging",
      desc: "Printed boxes, sleeves, and pouches for products.",
      priceFrom: "KSh 12,000",
      tags: ["Boxes", "Sleeves", "Food"],
      image: "/images/services/boxes.jpg",
    },
    {
      title: "Event Branding",
      slug: "event-branding",
      category: "Events",
      desc: "Stage backdrops, wristbands, lanyards, and passes.",
      priceFrom: "KSh 8,000",
      tags: ["Backdrop", "Badges", "Exhibitions"],
      image: "/images/services/event.jpg",
    },
  ];
  const q = ref("");
  const activeCategory = ref("All");
  const page = ref(1);
  const pageSize = 9;

  const filtered = computed(() => {
    const text = q.value.trim().toLowerCase();
    return catalog.filter((item) => {
      const matchesText =
        !text ||
        item.title.toLowerCase().includes(text) ||
        item.desc.toLowerCase().includes(text) ||
        item.tags.join(" ").toLowerCase().includes(text);

      const matchesCat =
        activeCategory.value === "All" ||
        item.category === activeCategory.value;

      return matchesText && matchesCat;
    });
  });

  const pages = computed(() =>
    Math.max(1, Math.ceil(filtered.value.length / pageSize))
  );

  const paginated = computed(() => {
    if (page.value > pages.value) page.value = pages.value;
    const start = (page.value - 1) * pageSize;
    return filtered.value.slice(start, start + pageSize);
  });

  function openQuote(item) {
    navigateTo({
      path: "/quote",
      query: { service: item.slug, name: item.title },
    });
  }

  return {
    categories,
    catalog,
    q,
    activeCategory,
    page,
    pageSize,
    filtered,
    pages,
    paginated,
    openQuote,
  };
}
