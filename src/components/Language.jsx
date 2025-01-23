export default function Language(language) {
  const languageName = new Intl.DisplayNames(["en"], { type: "language" });
  return languageName.of(language);
}
