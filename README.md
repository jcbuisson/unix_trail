# unix_trail
Jeu de piste pour l'apprentissage des commandes Unix

## Utilisation
```
npx unix_trail`
```

## Update
run `npm publish`
Voir `package.json`, entrée `bin`

## Debug
Utiliser les configurations du debugger de VSCode

## Fonctionnement
L'application créé un répertoire caché .unix_trail qui contient les fichiers suivants :
- `cwd` : root directory
- `code` : le code fourni à l'initialisation, pour créer un parcours différent pour chaque code
- `hash` : une version hashée de ce code sur 256 bits, d'où seront extraits des champs de bits qui seront utilisés comme valeurs pseudo-aléatoires
- `current` : contient le numéro du niveau en cours


stage : créer une hiérarchie de buildings, floors, rooms

stage : trouver le fichier caché dans la hiérarchie des buildings et le déplacer à la racine en le renommant secret.txt

stage: modifier les permissions de secret.txt pour que seul le user puisse lire et écrire

stage : copier le gist python dans un fichier httpserver.py : https://gist.github.com/jcbuisson/f0cd0f29636618fa05d5faecdbd5a44c

stage : lui ajouter le shebang python et lui donner le droit en exécution

stage : créer un lien symbolique myhttpd depuis /usr/local/bin

stage: exécuter myhttpd en arrière plan
(check : vérifier qu'un process de nom 'myhttpd' existe, qu'il n'a aucun terminal attaché, que la requète http :8080/ renvoie 'Hello world')

stage : tuer le processus
(check : vérifier que la requète http :8080/ ne renvoie pas 'Hello world')


stage : download ciqual.csv situé dans https://ftp.jcbuisson.dev/misc/ciqual2020_FR_2020_07_07.csv

stage : extraire les colonnes 1 (nom) et X (nutriment variable selon code)

stage : remplacer les virgules par des ., seulement dans les nombres



stage: remove all files from --- of size > 1G

