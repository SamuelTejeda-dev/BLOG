export const postgresErrorMessages: Record<string, string> = {
  // Classe 22 - Data Exception
  "22001": "Dati troppo lunghi per il campo specificato.",
  "22003": "Numero fuori dall'intervallo supportato.",
  "22007": "Formato data/ora non valido.",
  "22008": "Valore di data/ora non valido.",
  "22P02": "Formato del valore non valido per il tipo di dato richiesto.",

  // Classe 23 - Integrity Constraint Violation
  "23000": "Violazione di vincolo di integrità.",
  "23502": "Un campo obbligatorio è mancante.",
  "23503": "Violazione del vincolo di chiave esterna.",
  "23505": "Valore duplicato per un campo che richiede unicità.",
  "23514": "Violazione di un vincolo CHECK.",

  // Classe 42 - Syntax & Access
  "42601": "Errore di sintassi nella query SQL.",
  "42703": "Colonna specificata non esiste.",
  "42P01": "Tabella specificata non esiste.",
  "42P02": "Parametro non specificato nella query.",
  "42883": "Funzione SQL non trovata con i parametri forniti.",
  "42P10": "Errore nella definizione della vista o regola.",
  "42P07": "Tentativo di creare una tabella già esistente.",

  // Classe 40 - Transaction Errors
  "40001":
    "Errore di concorrenza: riprovare l’operazione (serialization failure).",
  "40003": "Stato della transazione sconosciuto.",
  "40P01": "Deadlock rilevato: l'operazione è stata annullata.",

  // Classe 28 - Authentication / Authorization
  "28000": "Autenticazione fallita: nome utente o password non validi.",
  "28P01": "Password non corretta.",
  "42501": "Permessi insufficienti per eseguire l’operazione.",

  // Altri errori utili
  "0A000": "Funzionalità non supportata dal database.",
  XX000: "Errore interno del database.",
};
