# Dokku Static Site

This is a reusable Docker image that allows to deploy static sites to Dokku with Dockerfile (and without using buildbacks). Runs an nginx web worker to serve your index.html site.

based on [dokku-static-site](https://github.com/shrmnk/dokku-static-site)

## Instructions

1. Clone this repo

```
git clone https://gitlab.mediacube.at/mediacube/dokku-static-site
cd dokku-static-site
```

2. Make changes to your site (by default, we have index.html and 404.html) and commit them

```
git add .
git commit -m "<Commit message>"
```

3. Add dokku host as a git remote

```
git remote add dokku dokku@<dokku.host>:<app-name>
```

4. Push to dokku

```
git push dokku master
```

