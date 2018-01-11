![example](./example.png)

# Dokku Static Site

This is a reusable Docker image that allows to deploy static sites to Dokku with Dockerfile (and without using buildbacks). Runs an nginx web worker to serve your index.html site.

Originally based on [IlyaSemenov/dokku-static-site](https://github.com/IlyaSemenov/dokku-static-site) and [pahaz/dokku-static-site](https://github.com/pahaz/dokku-static-site)

[Demo](https://sherman.sg/dokku-static-site/), hosted on GitHub Pages, since, you know, it is a static site after all.

## Now using [Heroku Static Buildpack](https://github.com/heroku/heroku-buildpack-static)

This means that your static site files are now in the /docs folder (can be changed in `static.json`)

There are several options that allow you to host, proxy, and customise all sorts of static sites. Refer to the repository for more configuration options.

## Instructions

1. Clone this repo

```
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
git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git
```

---

### Ignoring certain files

Add line to `.dockerignore` if you want to exclude certain files from getting exposed.

### Differences from [pahaz/dokku-static-site](https://github.com/pahaz/dokku-static-site)

- Removed css files and replaced with cdnjs resources where available
- Removed full-blown bootstrap theme
- Removed brand-specific text and example
- Fixed 404 page not rendering
- Uses [Heroku Static Buildpack](https://github.com/heroku/heroku-buildpack-static)
