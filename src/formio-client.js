angular.module('formioClient', [
    'formio',
    'pascalprecht.translate'
]).config(function ($translateProvider) {
        $translateProvider.translations('pl', {
  'Form': 'Formularz',
  'must be a valid email':'musi być poprawnym adresem email',
  'is required':'jest wymagany',
  'must be a number':'musi być liczbą',
  'must be shorter than':'musi być krótszy niż',
  'characters':'znaki',
  'must be longer than':'musi być dłuższy niż',
  'must be greater than or equal to':'musi być równe lub większe niż',
  'must be less than or equal to':'musi być równe lub mnniejsze niż',
  'does not match the pattern':'nie pasuje do wzorca',
  'must be a valid date':'musi być poprawną datą',
  'does not match the mask':'nie pasuje do maski',
  'Day':'Dzień',
  'Month':'Miesiąc',
  'Year':'Rok',
  'Please save all rows before proceeding':'Zapisz wszystkie dane aby kontunuować.',
  'Please correct rows before proceeding':'Popraw wszystkie dane aby kontynuować.',
  'Add Another':'Dodaj kolejny',
  'Yes':'Tak',
  'No':'Nie',
  'Please fix the following errors before submitting.':'Popraw błędy przed wysłaniem formularza.',
  'Please fix the following errors before proceeding.':'Popraw błędy aby kontunuować.',
  'Submission Complete!':'Wysyłanie zgłoszenia zakończone sukcesem!',
  'Submission was updated.':'Zgłoszenie zostało uaktualnione',
  'Submission was created':'Zgłoszenie zostało stworzone',
  'Submit': 'Zapisz',
  'Full Name': 'Imię i nazwisko',
  'Message': 'Wiadomość'
        })
        .useSanitizeValueStrategy('escape')
        .registerAvailableLanguageKeys(['en', 'pl'])
        .fallbackLanguage('en')
        .determinePreferredLanguage();
  });
