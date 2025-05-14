# unix_trail
Jeu de piste pour l'apprentissage des commandes Unix

## CLI entry
C'est ce qui est exécuté quand on utilise `npx unix_trail` ; son emplacement est dans `package.json`, entrée `bin`

## Update
run `npm publish`

## Fonctionnement
L'application créé un répertoire caché .unix_trail qui contient les fichiers suivants :
- `code` : le code fourni à l'initialisation, pour créer un parcours différent pour chaque code
- `hash` : une version hashée de ce code sur 128 bits, d'où seront extraits des champs
- `current` : contient le numéro du niveau en cours
