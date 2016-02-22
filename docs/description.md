# Beskrivelse

Roy er ment å skulle håndtere alle forhold omkring forsendelse av dokumenter.

Modulen vil typisk være plassert etter selve saksbehandlingen i en arbeidsprosess.

Modulen skal fungere uavhengig av hvorvidt opplysninger om adresse o.l. er innhentet tidligere

## Prosess
- Sjekker i en gitt mappe om det er jobber som venter
    - Hvis ikke avluttes prosessen
- Slår opp mot dsf og p360 på bakgrunn av fødselsnummer
- Sjekker om mottager er satt opp med hemmelig adresse
    - Hvis hemmelig opprettes det et notat i p360 for manuell distribusjon
- Dersom mottakeren er under 18 år og dokumentet skal sende som kopi til foresatte
    - Den forelder som har samme adresse som mottager brukes som kopi
    - Finnes ingen opprettes det et notat i p360 for manuell distribusjon
- Sender til SvarUt
    - Hvis kopi til foreldre sendes de til de også
- Setter opp jobb for arkivering
- Encoder dokumenter for arkivering
- Lagrer jobb i arkivets jobbmappe
- Lagrer jobb i egen utførtmappe
- Lagrer jobb i feilmappe hvis feil
- Sletter jobb hvis ikke feil
- Sletter dokumenter hvis ikke feil
- Sender statusmelding hvis callbackurl
- Avslutter

## Pipeline
- start
    - Init
- getNextJob
    - Sjekker etter .json-filer i mappen som er oppgitt i JOB_DIRECTORY_PATH
- setupItem
    - Grunnleggende oppsett med array for feil osv
- lookupDsf
    - Sjekker om dsfData finnes
        - Hvis ikke: Slår opp mot dsf på bakgrunn av fødselsnummer. Lagrer resultat i dsfData
        - Ellers: fortsetter
- lookup360
    - Sjekker om p360Data finnes
        - Hvis ikke: Slår opp mot p360 på bakgrunn av fødselsnummer.. Lagrer resultat i p360Data
        - Ellers: fortsetter
- unwrapContactInformation,
- unwrapParentsInformation,
- filterParentsInformation,
- lookupGuardianInformation,
- lookupRestrictedAddress,
- setupSvarut,
- sendDocumentsToSvarUt,
- setupArchive,
- encodeDocumentsToArchive,
- saveJobArchive,
- saveJobDone,
- saveJobError,
- cleanupJob,
- cleanupDocuments,
- sendStatusMessage,
- finished


    