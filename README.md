![example](./example.png)

# Dokku Static Site

This is a reusable Docker image that allows to deploy static sites to Dokku with Dockerfile (and without using buildbacks). Runs an nginx web worker to serve your index.html site.

Originally based on [IlyaSemenov/dokku-static-site](https://github.com/IlyaSemenov/dokku-static-site) and [pahaz/dokku-static-site](https://github.com/pahaz/dokku-static-site)

## Instructions

1. Clone this repo

```
# clone
git clone https://github.com/shrmnk/dokku-static-site.git my-static-site
cd my-static-site
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

5. Remember to set your domains up if needed

```
dokku domains:add <app-name> <domain>
```

6. (Optional) Change the origin

```
# change git origin
git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git
```

---

### Ignoring certain files

Add line to `.dockerignore` if you want to exclude certain files from getting exposed.

### Differences from [pahaz/dokku-static-site](https://github.com/pahaz/dokku-static-site)

- Removed css files and replaced with cdnjs resources where available
- Removed full-blown bootstrap theme
- Removed brand-specific text and example
