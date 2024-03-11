En addition a GET et HEAD, on a essayé d'implementer une version simplifiée de POST (qui crée un fichier et le remplit avec le contenu du message body, et puis renvoie sa localisation)

Un exemple serait :

echo -e "POST /index.test HTTP/1.0\r\nHost: 127.0.0.1\r\nContent-Type: text/plain\r\n\r\nyolo"

qui aura comme reponse :

HTTP/1.0 201 Created
Location: 127.0.0.1:8080/index.test
Date: Sat Apr 30 13:30:21 2022
Content-Length: 4
Content-Type: text/plain
Connection: close


Pour le content-type, on avait essayé d'utiliser la libmagic pour récupérer le type MIME, mais on a remarqué que ca donne souvent le mauvais type quand le fichier est trop petit ou trop grand, et qu'elle ne distingue pas entre text/css et text/html (elle les groupe tous les deux en text/plain), donc on a fait l'attribution du content-type selon les extensions des fichiers (en espérant que l'extension correspond bien au type MIME)

Pour le connection-header, notre serveur essaie d'accomoder le client (on utilise le meme type de connection que celui envoyé en requete), et utilise keep-alive et close par defaut pour http/1.1 et http/1.0 respectivement

Par defaut, GET récupere la page web de l'ESISAR et POST écrit dans le fichier "new"



echo -e "GET /index.test HTTP/1.0\r\nHost: 127.0.0.1\r\nContent-Type: text/plain\r\nConnection: close\r\n\r\nyolo" | nc 127.0.0.1 8080

