# Beskrivelse

Roy håndterer alle forhold omkring generering og forsendelse av dokumenter.

Modulen er en samlemodul som er tenkt plassert etter selve saksbehandlingen.

Modulen skal takle både å innhente nye opplysninger fra ulike kilder og ta i bruk opplysninger derso disse allerede er hentet tidligere i kjeden.

## Prosess

- Roy mottar en henvendelse
- Roy genererer nødvendige dokumenter
- Roy finner adressen til mottakeren
    - dersom mottakeren er under 18 år og dokumentet skal til foresatte hentes foresatte
        - den foresatte som har samme adresse som mottager brukes som kopi
- Roy sjekker om mottager har hemmelig adresse
    - Hvis hemmelig settes status til manuell behandling og Roy avslutter
