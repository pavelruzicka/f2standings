export const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
}

export const getRule = (mode: "min" | "max", viewport: keyof typeof sizes) => {
  return `(${mode}-width: ${sizes[viewport] + (mode === "max" ? 0 : 1)}px)`
}
