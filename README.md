# A Next.js Personal Website with a Native Authoring Experience<!-- omit in toc -->

This starter is a statically generated personal website that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content. It comes with a native Sanity Studio that offers features like real-time collaboration, instant side-by-side content previews, and intuitive editing.

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. You can use this starter to kick-start a personal website or learn these technologies.

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

## Features

- A performant, static personal personal website with editable projects
- A native and customizable authoring environment, accessible on `yourpersonalwebsite.com/studio`
- Real-time and collaborative content editing with fine-grained revision history
- Side-by-side instant content preview that works across your whole site
- Support for block content and the most advanced custom fields capability in the industry
- Webhook-triggered Incremental Static Revalidation; no need to wait for a rebuild to publish new content
- Free Sanity project with unlimited admin users, free content updates, and pay-as-you-go for API overages
- A project with starter-friendly and not too heavy-handed TypeScript and Tailwind.css

## Table of Contents

- [Features](#features)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
  - [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Step 1. Set up the environment](#step-1-set-up-the-environment)
  - [Step 2. Set up the project locally](#step-2-set-up-the-project-locally)
  - [Step 3. Run Next.js locally in development mode](#step-3-run-nextjs-locally-in-development-mode)
  - [Step 4. Deploy to production](#step-4-deploy-to-production)
- [Questions and Answers](#questions-and-answers)
  - [It doesn't work! Where can I get help?](#it-doesnt-work-where-can-i-get-help)
  - [How can I remove the "Next steps" block from my personal site?](#how-can-i-remove-the-next-steps-block-from-my-personal-site)
- [Next steps](#next-steps)

## Project Overview

| [Personal Website](https://nextjs-personal-website.sanity.build)                                                          | [Studio](https://nextjs-personal-website.sanity.build/studio)                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Personal Website](https://user-images.githubusercontent.com/6951139/206395107-e58a796d-13a9-400a-94b6-31cb5df054ab.png) | ![Sanity Studio](https://user-images.githubusercontent.com/6951139/206395521-8a5f103d-4a0c-4da8-aff5-d2a1961fb2c0.png) |

### Important files and folders

| File(s)                                     | Description                                              |
| ------------------------------------------- | -------------------------------------------------------- |
| `sanity.config.ts`                          |  Config file for Sanity Studio                           |
| `sanity.cli.ts`                             |  Config file for Sanity CLI                              |
| `/app/studio/[[...index]]/page.tsx`         |  Where Sanity Studio is mounted                          |
| `/pages/preview.ts`                         |  Serverless route for triggering Preview mode            |
| `/schemas`                                  |  Where Sanity Studio gets its content types from         |
| `/plugins`                                  |  Where the advanced Sanity Studio customization is setup |
| `/lib/sanity.api.ts`,`/lib/sanity.image.ts` | Configuration for the Sanity Content Lake client         |
| `/lib/sanity.preview.ts`                    | Configuration for the live Preview Mode                  |

## Configuration

### Step 1. Set up the environment

Use the Deploy Button below. It will let you deploy the starter using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-sanity-example) as well as connect it to your Sanity Content Lake using [the Sanity Vercel Integration][integration].

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

### Step 2. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your personal website should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```

## Questions and Answers

### It doesn't work! Where can I get help?

In case of any issues or questions, you can post:

- [GitHub Discussions for Next.js][vercel-github]
- [Sanity's GitHub Discussions][sanity-github]
- [Sanity's Community Slack][sanity-community]

### How can I remove the "Next steps" block from my personal website?

You can remove it by deleting the `IntroTemplate` component in `/components/pages/home.tsx`.

## Next steps

- [Join our Slack community to ask questions and get help][sanity-community]
- [How to edit my content structure?][sanity-schema-types]
- [How to query content?][sanity-groq]
- [What is content modelling?][sanity-content-modelling]

[vercel-deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsanity-io%2Ftemplate-nextjs-personal-website&project-name=personal-website-nextjs-sanity&repository-name=personal-website-nextjs-sanity&demo-title=Personal%20Website%20with%20Built-in%20Content%20Editing&demo-description=A%20Sanity-powered%20personal%20website%20with%20built-in%20content%20editing%20and%20instant%20previews.&demo-url=https%3A%2F%2Fnextjs-personal-website.sanity.build%2F&demo-image=https%3A%2F%2Fuser-images.githubusercontent.com%2F6951139%2F206395107-e58a796d-13a9-400a-94b6-31cb5df054ab.png&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx&external-id=nextjs;template=nextjs-personal-website-cms-sanity-v3
[integration]: https://www.sanity.io/docs/vercel-integration?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[`.env.local.example`]: .env.local.example
[nextjs]: https://github.com/vercel/next.js
[sanity-create]: https://www.sanity.io/get-started/create-project?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-deployment]: https://www.sanity.io/docs/deployment?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-homepage]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-community]: https://slack.sanity.io/
[sanity-schema-types]: https://www.sanity.io/docs/schema-types?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-github]: https://github.com/sanity-io/sanity/discussions
[sanity-groq]: https://www.sanity.io/docs/groq?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-content-modelling]: https://www.sanity.io/docs/content-modelling?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-webhooks]: https://www.sanity.io/docs/webhooks?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[vercel]: https://vercel.com
[vercel-github]: https://github.com/vercel/next.js/discussions

# Dokku Static Site

This is a dummy static site that you can deploy to a dokku app "x" quickly.
Before using it for the first time, you need to add the dokku remote:

    git remote add dokku ssh://dokku@projects.multimediatechnology.at:5412/friendsqueststaging

later you can change that remote url by running

    rake static[x]

This will:

- change the title and h1 of the static site to display the name of the app "x"
- change the remote url to point the the app x
- deploy to the dokku

## TODO:

       ## WARNING: `heroku-buildpack-static` is deprecated

       This buildpack is deprecated and is no longer being maintained.
       If you are using this project, you can transition over to NGINX via an NGINX buildpack.
       Use your project's existing configuration.
       To find the NGINX configuration generated by the heroku-buildpack-static you can run:

       ```
       $ heroku run bash
       ~ $ bin/config/make-config
       ~ $ cat config/nginx.conf
       ```

       These commands will output your current NGINX config generated from your `static.json` contents.

       - Write these contents to your local repo at `config/nginx.conf.erb`, commit them to git.
       - Replace path logic that previously used `mruby` with static logic.
       - Configure your app to use the NGINX buildpack via `heroku buildpacks:add heroku-community/nginx`.
       - Remove this buildpack via `heroku buildpacks:remove heroku-community/static` (or `heroku buildpacks:remove https://github.com/heroku/heroku-buildpack-static`).

-----> Installed nginx 1.21.3 to /app/bin
Using release configuration from last framework (Static HTML).
-----> Discovering process types
Default types for -> web
-----> Releasing easyshopping (dokku/easyshopping:latest)...
-----> Deploying easyshopping (dokku/easyshopping:latest)...
-----> App Procfile file found (/home/dokku/easyshopping/DOKKU_PROCFILE)
-----> DOKKU_SCALE file not found in app image. Generating one based on Procfile...
DOKKU_SCALE declares scale -> web=1
=====> Processing deployment checks
-----> Attempting pre-flight checks (web.1)
CHECKS expected result:
http://localhost/ => "A Project on Dokku"
Attempt 1/10. Waiting for 1 seconds ...
All checks successful!
=====> easyshopping web container output:
Starting log redirection...
Starting nginx...
172.17.0.1 - - [11/Jan/2023:10:42:00 +0000] "GET / HTTP/1.1" 200 890 "-" "curl/7.47.0"
=====> end easyshopping web container output
-----> Running post-deploy
-----> Configuring easyshopping.projects.multimediatechnology.at...(using built-in template)
-----> Creating http nginx.conf
-----> Setting max upload size to 2M
Reloading nginx configuration (via systemctl): nginx.service.
Reloading nginx
-----> Renaming containers
Renaming container (84593de70ffd) hopeful_stonebraker to easyshopping.web.1
=====> Application deployed:
http://easyshopping.projects.multimediatechnology.at

To ssh://projects.multimediatechnology.at:5412/easyshopping

- [new branch] master -> master
  bjelline@Macbook dokku-static-site (master)\*
  $ rake static[quizme]
  Should work on day quizme
  Objekte aufzählen: 323, fertig.
  Zähle Objekte: 100% (323/323), fertig.
  Delta-Kompression verwendet bis zu 4 Threads.
  Komprimiere Objekte: 100% (280/280), fertig.
  Schreibe Objekte: 100% (323/323), 290.69 KiB | 14.53 MiB/s, fertig.
  Gesamt 323 (Delta 163), Wiederverwendet 105 (Delta 36), Pack wiederverwendet 0
  -----> Cleaning up...
  -----> Building quizme from herokuish...
  -----> Injecting apt repositories and packages ...
  -----> Adding BUILD_ENV to build environment...
  -----> Multipack app detected
  =====> Downloading Buildpack: https://github.com/heroku/heroku-buildpack-static
  =====> Detected Framework: Static HTML ## WARNING: `heroku-buildpack-static` is deprecated

         This buildpack is deprecated and is no longer being maintained.
         If you are using this project, you can transition over to NGINX via an NGINX buildpack.
         Use your project's existing configuration.
         To find the NGINX configuration generated by the heroku-buildpack-static you can run:

         ```
         $ heroku run bash
         ~ $ bin/config/make-config
         ~ $ cat config/nginx.conf
         ```

         These commands will output your current NGINX config generated from your `static.json` contents.

         - Write these contents to your local repo at `config/nginx.conf.erb`, commit them to git.
         - Replace path logic that previously used `mruby` with static logic.
         - Configure your app to use the NGINX buildpack via `heroku buildpacks:add heroku-community/nginx`.
         - Remove this buildpack via `heroku buildpacks:remove heroku-community/static` (or `heroku buildpacks:remove https://github.com/heroku/heroku-buildpack-static`).
