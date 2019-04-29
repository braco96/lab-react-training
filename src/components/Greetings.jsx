import React from 'react';

// Component to greet the user in a selected language
// It receives the language code and children as the name
function Greetings({ lang, children }) {
  // Map of supported languages
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div className="greetings">
      {/* Use the language map to render the appropriate greeting */}
      {greetings[lang] || 'Hello'} {children}
    </div>
  );
}

export default Greetings;
