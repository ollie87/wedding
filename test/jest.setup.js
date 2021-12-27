import '@testing-library/jest-dom/extend-expect'

// Mock t function
export const t = (key, params) => {
  if (key === 'key.with.params') {
    return `key.with.params.${params.param}`
  }

  return key
}

// Mock your i18n
jest.mock('next-i18next', () => {
  return {
    useTranslation: () => {
      return {
        t,
        i18n: {
          language: 'es',
          changeLanguage: jest
            .fn()
            .mockImplementation((lang) => console.log(lang))
        }
      }
    },
    withTranslation: () => (Component) => {
      Component.defaultProps = { ...Component.defaultProps, t }
      return Component
    }
  }
})