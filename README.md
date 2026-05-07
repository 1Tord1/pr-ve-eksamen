først så har jeg laget en ny repo i GitHub og det er i denne repoen jeg skal lagre alt jeg gjør 

jeg startet med å ta micro sd kortet ut av rasberry pi-en min og puttet den in i skole laptopen etter det så instalerte jeg rassberry pi imager fra denne linken https://www.raspberrypi.com/software/
når jeg var inne på imager valgte jeg dette os-et <img width="797" height="144" alt="image" src="https://github.com/user-attachments/assets/12bab75c-9ef8-499c-a7eb-ff3cecf7103b" />
Etter det gikk jeg igjennom setupen og installerte os-et på microSD-kortet.

Når det var ferdig, satte jeg SD-kortet i Pi-en, så åpnet jeg Command Prompt (cmd) på laptopen min som administrator og ssh-et inn til Raspberry Pi-en ved å skrive ssh tordpi@TordPi til pi-en 
Og jeg passet på at de var på samme nettverk. og jeg instalerte ufw på pi-en ved å skrive i terminalen: (sudo apt install ufw) og (sudo ufw allow ssh)
men jeg fikk et problem og jeg fikk denne feilmedlingen:

(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ED25519 key sent by the remote host is
SHA256:nb+MAWS5M3mR8C/brgTyuYrjaTNU1TWeKxSyIFSC40I.
Please contact your system administrator.
Add correct host key in C:\\Users\\TORD/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in C:\\Users\\TORD/.ssh/known_hosts:3
Host key for tordpi has changed and you have requested strict checking.
Host key verification failed.)

og jeg viste ikke hvordan man fikset det så jeg søkte opp:
how to fix 
(@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ED25519 key sent by the remote host is
SHA256:nb+MAWS5M3mR8C/brgTyuYrjaTNU1TWeKxSyIFSC40I.
Please contact your system administrator.
Add correct host key in C:\\Users\\TORD/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in C:\\Users\\TORD/.ssh/known_hosts:3
Host key for tordpi has changed and you have requested strict checking.
Host key verification failed.)

så brukte jeg google AI oversikt og den ga meg denne scripten som fikset det: (ssh-keygen -R tordpi)
Og jeg forsto det sånn at når jeg reinstallerte oss, så ble SSH-nøkkelen forandret, og skriptet resatte nøkkelen.

etter dette så brukte jeg url fra git hub på browser og copierte det på search baren i vs code og lagde en mappe som het prøve eksamen å valgte den for å putte in repo fra github, grunnen til at jeg har det på puttet det in i vs code er sån at jeg kan ha koden min og dokumentasjon i samme plass.

så gjorde jeg klar py, js, html og css i mappa.













