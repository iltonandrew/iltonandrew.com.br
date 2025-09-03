# Internationalization (i18n) Setup

This portfolio site has been updated with full internationalization support for Portuguese (pt-BR) and English (en).

## Features

- **Language Switcher**: A button in the header that allows users to switch between Portuguese and English
- **Complete Translation Coverage**: All text content is translated, including navigation, work experience, and blog
- **Default Language**: Portuguese (pt-BR) is the default language
- **SEO Support**: Meta descriptions and titles are localized

## File Structure

```
locales/
├── pt-BR/
│   └── common.json          # Portuguese translations
└── en/
    └── common.json          # English translations
```

## Configuration

The internationalization is configured in:

- `next.config.js` - Next.js i18n configuration
- `i18n.json` - next-translate configuration

## Components Updated

### Header Component
- Navigation items are now translated
- Language switcher button added
- Blog/Home button text is localized

### Hero Component
- Typewriter text is localized
- Description and button text are translated

### Companies Component
- Work experience titles and descriptions are translated
- Company information is localized
- Side projects section added with translations

### Blog Components
- Blog titles and navigation are translated
- Back button text is localized

## Adding New Translations

To add new text that needs translation:

1. Add the translation key to both `locales/pt-BR/common.json` and `locales/en/common.json`
2. Use the translation in your component with `const { t } = useTranslation("common")`
3. Reference the translation with `t("your.translation.key")`

## Work Experience Updates

The work experience section has been updated with:

- **Media Hero** - Head of Software Engineering (February 2023)
- **XP Inc.** - Treasury Software Engineer (August 2022 - February 2023)
- **Pipefy** - Jr. Software Engineer (January 2021 - July 2022)
- **XP Inc.** - Summer Intern (December 2019 - February 2020)
- **Amigos da Poli** - Tech Volunteer (September 2019 - December 2020)
- **Poli Júnior** - Software Engineer (November 2018 - January 2021)

## Side Projects

Added the **Converter.gege.codes** project as a side project with:
- Link to the live project
- Technology stack information
- Localized descriptions

## Company Logos

All company logos are stored in `public/images/companies/` and are automatically displayed with the work experience entries.

## Running the Project

```bash
# Install dependencies
yarn install

# Development mode
yarn dev

# Build for production
yarn build
```

The site will be available at:
- Portuguese: `http://localhost:3000/pt-BR`
- English: `http://localhost:3000/en`
- Default (Portuguese): `http://localhost:3000`