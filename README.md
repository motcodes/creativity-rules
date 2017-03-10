![example](./example.png)

# Dokku static site

This is a reusable Docker image that allows to deploy static sites to Dokku with Dockerfile (and without using buildbacks).

Originally based on <https://github.com/IlyaSemenov/dokku-static-site>

## HOW TO

```
# clone
git clone https://github.com/pahaz/dokku-static-site.git my-static-site
cd my-static-site

# change git origin
git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git

# deploy
DOKKU_HOST=dokku.me dokku-client.sh apps:create my-static-site
git push dokku master
```

The site is now available at <http://my-static-site.dokku.me>

### Ignoring certain files

Add line to `.dockerignore` if you want to exclude certain files from getting exposed.

### Credits 

https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S -- $17 admin panel
