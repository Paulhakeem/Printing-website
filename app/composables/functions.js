export default function () {
  const useLinks = ref([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/Services" },
    { name: "Videos & Images", path: "/Videos" },
    { name: "Contact", path: "/contacts" },
  ]);

  const menu = ref(false);

  const toggleMenu = () => {
    menu.value = !menu.value;
  };

  return { useLinks, menu, toggleMenu };
}
