/* export const baseColors = {
  white: 'white',
  failure: '#ED4B9E',
  failure33: '#ED4B9E33',
  primary: '#1FC7D4',
  primary0f: '#1FC7D40f',
  primary3D: '#1FC7D43D',
  primaryBright: '#53DEE9',
  primaryDark: '#0098A1',
  success: '#31D0AA',
  success19: '#31D0AA19',
  warning: '#FFB237',
  warning2D: '#ED4B9E2D',
  warning33: '#ED4B9E33',
}

export const additionalColors = {
  binance: '#F0B90B',
  overlay: '#452a7a',
  gold: '#FFC700',
  silver: '#B2B2B2',
  bronze: '#E7974D',
}

export const lightColors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#7645D9',
  secondary80: '#7645D980',
  background: '#FAF9FA',
  backgroundDisabled: '#E9EAEB',
  backgroundAlt: '#FFFFFF',
  backgroundAlt2: 'rgba(255, 255, 255, 0.7)',
  cardBorder: '#E7E3EB',
  contrast: '#191326',
  dropdown: '#F6F6F6',
  dropdownDeep: '#EEEEEE',
  invertedContrast: '#FFFFFF',
  input: '#eeeaf4',
  inputSecondary: '#d7caec',
  tertiary: '#EFF4F5',
  text: '#280D5F',
  text99: '#280D5F99',
  textDisabled: '#BDC2C4',
  textSubtle: '#7A6EAA',
  disabled: '#E9EAEB',
  gradientBubblegum: 'linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)',
  gradientInverseBubblegum: 'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)',
  gradientCardHeader: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
  gradientBlue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
  gradientViolet: 'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
  gradientVioletAlt: 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)',
  gradientGold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
}

export const darkColors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#9A6AFF',
  secondary80: '#9A6AFF80',
  background: '#08060B',
  backgroundDisabled: '#3c3742',
  backgroundAlt: '#27262c',
  backgroundAlt2: 'rgba(39, 38, 44, 0.7)',
  cardBorder: '#383241',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#191326',
  input: '#372F47',
  inputSecondary: '#262130',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#F4EEFF',
  text99: '#F4EEFF99',
  textDisabled: '#666171',
  textSubtle: '#B8ADD2',
  disabled: '#524B63',
  gradientBubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
  gradientInverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
  gradientCardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
  gradientBlue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
  gradientViolet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
  gradientVioletAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
  gradientGold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
}
 */
export const baseColors = {
  white: 'white',
  black: 'black',
  failure: '#ED4B9E',
  failure33: '#ED4B9E33',
  primary: '#3a8a37', // Darker sustainability green for light theme
  primary0f: '#3a8a370f',
  primary3D: '#3a8a373D',
  primaryBright: '#75cfcf', // Teal accent
  primaryDark: '#2d8a2a', // Darker green
  success: '#3a8a37', // Use darker sustainability green for success
  success19: '#3a8a3719',
  warning: '#FFB237',
  warning2D: '#ED4B9E2D',
  warning33: '#ED4B9E33',
}

export const additionalColors = {
  binance: '#F0B90B',
  overlay: '#a4cbf9', // Light blue overlay
  gold: '#FFC700',
  silver: '#B2B2B2',
  bronze: '#E7974D',
}

export const lightColors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#75cfcf', // Teal as secondary
  secondary80: '#75cfcf80',
  background: '#f8fdf8', // Very light green tint
  backgroundDisabled: '#E9EAEB',
  backgroundAlt: '#FFFFFF',
  backgroundAlt2: 'rgba(255, 255, 255, 0.7)',
  cardBorder: '#e8f5e8', // Light green border
  contrast: '#1a1a1a', // Dark text for light theme
  dropdown: '#F6F6F6',
  dropdownDeep: '#EEEEEE',
  invertedContrast: '#FFFFFF',
  input: '#f0f8f0', // Light green input background
  inputSecondary: '#e8f5e8',
  tertiary: '#f5fbf5', // Very light green tertiary
  text: '#1a1a1a', // Dark text
  text99: '#1a1a1a99',
  textDisabled: '#BDC2C4',
  textSubtle: '#3a8a37', // Darker green for subtle text
  disabled: '#E9EAEB',
  // Sustainability-focused gradients with darker green
  gradientBubblegum: 'linear-gradient(139.73deg, #e8f5e8 0%, #f0f8f0 100%)',
  gradientInverseBubblegum: 'linear-gradient(139.73deg, #f0f8f0 0%, #e8f5e8 100%)',
  gradientCardHeader: 'linear-gradient(111.68deg, #e8f5e8 0%, #f0f8f0 100%)',
  gradientBlue: 'linear-gradient(180deg, #a4cbf9 0%, #75cfcf 100%)', // Light blue to teal
  gradientViolet: 'linear-gradient(180deg, #75cfcf 0%, #3a8a37 100%)', // Teal to darker green
  gradientVioletAlt: 'linear-gradient(180deg, #a4cbf9 0%, #75cfcf 100%)', // Light blue to teal
  gradientGold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  gradientBold: 'linear-gradient(#3a8a37, #75cfcf)', // Darker green to teal
  gradientSustainability: 'linear-gradient(135deg, #3a8a37 0%, #75cfcf 50%, #a4cbf9 100%)', // Full sustainability gradient with darker green
}

export const darkColors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#75cfcf', // Teal as secondary
  secondary80: '#75cfcf80',
  background: '#0a0f0a', // Very dark green tint
  backgroundDisabled: '#2a2a2a',
  backgroundAlt: '#1a1f1a', // Dark green alt background
  backgroundAlt2: 'rgba(26, 31, 26, 0.7)',
  cardBorder: '#6bc063', // Lighter green border for dark theme
  contrast: '#FFFFFF',
  dropdown: '#1a1f1a',
  dropdownDeep: '#0a0f0a',
  invertedContrast: '#1a1a1a',
  input: '#2a2f2a', // Dark green input
  inputSecondary: '#1a1f1a',
  primaryDark: '#6bc063', // Lighter green for dark theme
  tertiary: '#2a2f2a', // Dark green tertiary
  text: '#FFFFFF',
  text99: '#FFFFFF99',
  textDisabled: '#666171',
  textSubtle: '#75cfcf', // Teal for subtle text in dark mode
  disabled: '#524B63',
  // Dark sustainability gradients with lighter greens
  gradientBubblegum: 'linear-gradient(139.73deg, #1a1f1a 0%, #2a2f2a 100%)',
  gradientInverseBubblegum: 'linear-gradient(139.73deg, #2a2f2a 0%, #1a1f1a 100%)',
  gradientCardHeader: 'linear-gradient(166.77deg, #1a1f1a 0%, #2a2f2a 100%)',
  gradientBlue: 'linear-gradient(180deg, #6bc063 0%, #75cfcf 100%)', // Lighter green to teal
  gradientViolet: 'linear-gradient(180deg, #75cfcf 0%, #a4cbf9 100%)', // Teal to light blue
  gradientVioletAlt: 'linear-gradient(180deg, #6bc063 0%, #a4cbf9 100%)', // Lighter green to light blue
  gradientGold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  gradientBold: 'linear-gradient(#6bc063, #75cfcf)', // Lighter green to teal
  gradientSustainability: 'linear-gradient(135deg, #6bc063 0%, #75cfcf 50%, #a4cbf9 100%)', // Full sustainability gradient with lighter green
}
