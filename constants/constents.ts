import { Country } from "country-state-city";

export const topReligions2 = [
  { value: "Islam", label: "Islam" },
  { value: "Christianity", label: "Christianity" },
  { value: "Hinduism", label: "Hinduism" },
  { value: "Buddhism", label: "Buddhism" },
  { value: "Sikhism", label: "Sikhism" },
  { value: "Judaism", label: "Judaism" },
  { value: "Baha'i", label: "Baha'i" },
  { value: "Jainism", label: "Jainism" },
  { value: "Shinto", label: "Shinto" },
  { value: "Taoism", label: "Taoism" },
];

export const topReligions = [
  "Islam",
  "Christianity",
  "Hinduism",
  "Buddhism",
  "Sikhism",
  "Judaism",
  "Baha'i",
  "Jainism",
  "Shinto",
  "Taoism",
];

export const numbersAsStrings = Array.from({ length: 55 }, (_, i) =>
  (i + 18).toString()
);
export const topCountries = Country.getAllCountries().map(
  (country) => country.name
);

// Correct way ✅
export const profileOptions = [
  { value: "Myself", label: "My self" },
  { value: "MySon", label: "My Son" },
  { value: "MyDaughter", label: "My Daughter" },
  { value: "MyBrother", label: "My Brother" },
  { value: "MySister", label: "My Sister" },
  { value: "MyFriend", label: "My Friend" },
  { value: "MyRelative", label: "My Relative" },
];

export const maritalStatusOptions = [
  { value: "UNMARRIED", label: "Unmarried" },
  { value: "WIDOW", label: "Widow" },
  { value: "DIVORCED", label: "Divorced" },
];

export const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

export const hasChildrenOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];
export const LiveWithYou = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

export const Communities = [
  { value: "UrduSpeaking", label: "Urdu" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Sindhi", label: "Sindhi" },
  { value: "Pashtun", label: "Pashtun" },
  { value: "Baloch", label: "Baloch" },
  { value: "EnglishSpeaking", label: "English" },
  { value: "Gilgiti", label: "Gilgiti" },
  { value: "Kashmiri", label: "Kashmiri" },
];

export const familyStatusOptions = [
  { value: "MIDDLE_CLASS", label: "Middle class" },
  { value: "UPPER_MIDDLE_CLASS", label: "Upper middle class" },
  { value: "UPPER_CLASS", label: "Upper class" },
];

// Animation variants
export const errorAnimation = {
  initial: { height: 0, opacity: 0, marginBottom: 0 },
  animate: { height: "auto", opacity: 1, marginBottom: 4 },
  exit: { height: 0, opacity: 0, marginBottom: 0 },
};

export const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const selectAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};
export const inputAnimation = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring", stiffness: 300, damping: 30 },
};

export const testimonialData = [
  {
    id: 1,
    name: "Jack Danial",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1727081235232-51caa0c3f79e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 2,
    name: "Emma Wilson",
    location: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1727081235232-51caa0c3f79e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 3,
    name: "Michael Brown",
    location: "Chicago",
    image:
      "https://images.unsplash.com/photo-1727081235232-51caa0c3f79e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 4,
    name: "Michael Brown",
    location: "Chicago",
    image:
      "https://images.unsplash.com/photo-1727081235232-51caa0c3f79e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 5,
    name: "Michael Brown",
    location: "Chicago",
    image:
      "https://images.unsplash.com/photo-1727081235232-51caa0c3f79e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 6,
    name: "Michael Brown",
    location: "Chicago",
    image:
      "https://images.unsplash.com/photo-1727081235232-51caa0c3f79e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  // Add more testimonials as needed
];

export const exploreLinks = [
  "Home",
  "About Us",
  "Login",
  "Register",
  "Sitemap",
  "Contact Us",
];
export const supportLinks = [
  "Blog",
  "Support",
  "Terms and Conditions",
  "Privacy Policy",
  "Abaya Online",
];