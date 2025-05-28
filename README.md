# unix_trail
Jeu de piste pour l'apprentissage des commandes Unix

## CLI entry
C'est ce qui est exécuté quand on utilise `npx unix_trail` ; son emplacement est dans `package.json`, entrée `bin`

## Update
run `npm publish`

## Fonctionnement
L'application créé un répertoire caché .unix_trail qui contient les fichiers suivants :
- `cwd` : root directory
- `code` : le code fourni à l'initialisation, pour créer un parcours différent pour chaque code
- `hash` : une version hashée de ce code sur 256 bits, d'où seront extraits des champs de bits qui seront utilisés comme valeurs pseudo-aléatoires
- `current` : contient le numéro du niveau en cours


stage : créer une hiérarchie de buildings, floors, rooms

stage : trouver le fichier caché dans la hiérarchie des buildings et le réplacer à la racine en le renommant secret.txt

stage: modifier les permissions de secret.txt pour que seul le user puisse lire et écrire

stage : copier le gist python dans un fichier httpserver.py : https://gist.github.com/jcbuisson/f0cd0f29636618fa05d5faecdbd5a44c

stage : lui ajouter le shebang python et lui donner le droit en exécution



stage : créer un lien symbolique depuis /usr/local/bin

stage : lancer le programme en arrière plan (vérifier que la requète http / renvoie 'Hello world', comment vérifier qu'il est détaché ?)

stage : tuer le processus (vérifier que la requète http / ne renvoie pas 'Hello world')

stage : download ciqual.csv avec wget

stage : extraire les colonnes 1 (nom) et X (nutriment variable selon code)

stage : remplacer les virgules par des ., seulement dans les nombres
