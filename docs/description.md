# Beskrivelse

Roy er ment å skulle håndtere alle forhold omkring forsendelse av dokumenter.

Modulen vil typisk være plassert etter selve saksbehandlingen i en arbeidsprosess.

Modulen skal fungere uavhengig av hvorvidt opplysninger om adresse o.l. er innhentet tidligere

## Prosess

- Sjekker i en gitt mappe om det er jobber som venter
    - Hvis ikke avluttes prosessen
- Slår opp mot dsf på bakgrunn av fødselsnummer
    - dersom mottakeren er under 18 år og dokumentet skal til foresatte hentes foresatte
        - den foresatte som har samme adresse som mottager brukes som kopi

- Roy sjekker om mottager har hemmelig adresse
    - Hvis hemmelig settes status til manuell behandling og Roy avslutter
