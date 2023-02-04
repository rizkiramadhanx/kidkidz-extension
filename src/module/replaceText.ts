// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const replaceText: any = (element: HTMLElement) => {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Node.TEXT_NODE) {
    const arrayList = ["Final", "semester", "Rizki"];

    // Ini nantinya dari chrome storage

    arrayList.map((e) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      element.textContent = element.textContent!.replace(new RegExp(e, "i"), "*".repeat(e.length));
    });
  }
};
