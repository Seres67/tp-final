# API Rest

## Prérequis

- Node.js
- npm
- Docker OU un serveur Postgresql fonctionnel

## Setup

Clonez ce projet:  
`git clone https://github.com/Seres67/tp-final.git && cd tp-final`

Installez les dépendances:  
`npm i`

Créez un fichier `.env` avec:

```
PORT=4000 #port par défaut
PASSWORD_SECRET=12345 #TODO: change me
JWT_SECRET=12345 #TODO: change me
POSTGRES_DEV_URL=postgres://postgres:12345@127.0.0.1/rest_dev #TODO: change me
POSTGRES_TEST_URL=postgres://postgres:12345@127.0.0.1/rest_test #TODO: change me
POSTGRES_PROD_URL=postgres://postgres:12345@127.0.0.1/rest_prod #TODO: change me
```

Changez évidemment en fonction de vos besoins.

Si vous utilisez Docker, vous pouvez lancer un serveur postgres temporaire avec cette commande:  
`docker run --rm -e POSTGRES_DB=rest_dev -e POSTGRES_PASSWORD=12345 -p 5432:5432 postgres:alpine`  
Ici aussi, changez selon vos besoins.

Lancez le serveur:  
`npm start`

## Notes

Format de `Movies.releaseDate`: `2025-03-04 12:36:35` par exemple
