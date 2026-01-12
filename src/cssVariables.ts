// CSS Variables and breakpoints for the application
// These match Bootstrap 5 default breakpoints

export const cssVariables = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
}

export type Breakpoint = keyof typeof cssVariables.breakpoints
