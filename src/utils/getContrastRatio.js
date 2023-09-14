/* eslint-disable no-mixed-operators */
const getContrastRatio = (color1, color2) => {
  const luminance = (color) => {
    let c = color / 255.0
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }

  const [r1, g1, b1] = color1.match(/\w\w/g).map((c) => parseInt(c, 16))
  const [r2, g2, b2] = color2.match(/\w\w/g).map((c) => parseInt(c, 16))

  const lum1 =
    luminance(r1) * 0.2126 + luminance(g1) * 0.7152 + luminance(b1) * 0.0722
  const lum2 =
    luminance(r2) * 0.2126 + luminance(g2) * 0.7152 + luminance(b2) * 0.0722

  const contrastRatio =
    (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05)
  return contrastRatio
}

export default getContrastRatio
