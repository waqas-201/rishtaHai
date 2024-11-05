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
// Animation variants
export const errorAnimation = {
  initial: { height: 0, opacity: 0, marginBottom: 0 },
  animate: { height: "auto", opacity: 1, marginBottom: 8 },
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

export const Communities = [
  { value: "UrduSpeaking", label: "Urdu Speaking" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Sindhi", label: "Sindhi" },
  { value: "Pashtun", label: "Pashtun" },
  { value: "Baloch", label: "Baloch" },
  { value: "Muhajir", label: "Muhajir" },
  { value: "Saraiki", label: "Saraiki" },
  { value: "Hindko", label: "Hindko" },
  { value: "Brahui", label: "Brahui" },
  { value: "EnglishSpeaking", label: "English Speaking" },
];
