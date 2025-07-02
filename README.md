# Jungian Cognitive Function Assessment - Modularized

This project has been restructured from a single large HTML file into multiple organized files for better maintainability and development.

## File Structure

```
Jung8_software/
├── index.html              # Main HTML structure
├── styles.css              # All CSS styles and animations
├── app.js                  # Main application JavaScript
├── translations.js         # Translation dictionary for multilingual support
├── type-descriptions.js    # Jungian type descriptions in multiple languages
├── questions-en.js         # English questions (if available)
├── questions-zh.js         # Chinese questions (if available)
├── questions.js            # Original questions file (if available)
└── web-interview.html      # Original single-file version (backup)
```

## What Was Changed

### 1. **HTML Structure** (`index.html`)
- Clean HTML5 structure
- External CSS and JavaScript file references
- Semantic markup for better accessibility
- All inline styles removed

### 2. **CSS Styles** (`styles.css`)
- All styles extracted from the original HTML
- Organized with clear sections:
  - Base styles and layout
  - Component styles
  - Responsive design
  - Animations and transitions
  - Radar chart styles
  - Function visualization styles

### 3. **JavaScript Application** (`app.js`)
- Main `WebJungianAssessment` class
- Complete assessment logic
- Firebase integration
- Results generation and display
- Visualization methods
- Event handling

### 4. **Translations** (`translations.js`)
- Separated multilingual content
- English and Chinese translations
- Easy to extend for additional languages
- Helper function for dynamic translations

### 5. **Type Descriptions** (`type-descriptions.js`)
- Comprehensive Jungian type descriptions
- Bilingual support (English/Chinese)
- Structured data for all 16 types
- Helper function to get descriptions by language

## Benefits of This Structure

1. **Maintainability**: Each file has a single responsibility
2. **Scalability**: Easy to add new features, languages, or styles
3. **Collaboration**: Multiple developers can work on different files
4. **Performance**: Browser can cache individual files
5. **Debugging**: Easier to isolate and fix issues
6. **Version Control**: Better change tracking in Git

## How to Use

1. **Development**: Open `index.html` in a web browser
2. **Production**: Deploy all files to a web server
3. **Customization**: 
   - Modify styles in `styles.css`
   - Add translations in `translations.js`
   - Update type descriptions in `type-descriptions.js`
   - Extend functionality in `app.js`

## Dependencies

- Firebase SDK (loaded from CDN)
- Modern web browser with ES6 support
- Local web server for development (recommended)

## File Loading Order

The files are loaded in this order:
1. CSS: `styles.css`
2. Firebase SDKs
3. `translations.js`
4. `type-descriptions.js`
5. `questions-en.js` (if available)
6. `questions-zh.js` (if available)
7. `app.js`

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Notes

- The original `web-interview.html` file is preserved as a backup
- All functionality from the original file is maintained
- The modular structure makes it easier to add features like:
  - Additional languages
  - New visualization types
  - Extended question sets
  - Custom themes
  - Export options
