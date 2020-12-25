# TechTest

J’ai travaillé avec angular et nodejs et j’ai utilisé mysql comme sgbd.
Pour préparer l’environnement
il faut installer Node et npm pour tester s’ils sont installés il faut exécuter ces 2 commandes :
# node --version
# npm --version
installer angular avec la commande
# npm install - g @angular/cli
copier le dossier TechTest et accéder vers lui en tapant
# cd TechTest
exécuter cette commande pour lancer le serveur d’angular
# ng serve
entrez dans le dossier backend
tester si npm il est installé, puis lancer le serveur Nodejs avec la commande
# node ScriptNodejs
il se lancera dans le port 3007
pour moi j’ai créé un tunnel vers mon localhost :3007 avec ngrok
pour changer le lien d’api, accéder au src/app/data.service.ts puis changer la variable apiUrl
pour la base de donnes j’ai utilisé le sgbd mysql
vous trouverez la base de données dans le dossier bdd . vous la nommez techtest
pour les accès de la base de données, vous pouvez les changer dans le serveur nodejs (backend/ScriptNodeJS) dans la ligne 30.
pour moi la config c’était :
host     : 'localhost',
user     : 'root',
password : '',
database:'techtest',
port: 3308
