angular-spa-demo
================

Demo code for a Single Page Application using AngularJS.

## Purpose

This is a sample HTML5 / JS / CSS SPA (Single Page Application) developed with AngularJS.

Markup has been styled to be responsive, according to the device used to view the app.

It is intended as a demonstration of technical capabilities rather than design or helpful data. :-)

Note also that it is a work in progress; you can check out what features are in the [pipeline] (#pipeline).

## Functionality

This is a simple application that displays several pages, including profile information for a list of people.

The sample data is contrived, but shows how the data is stored in JSON format, retrieved via AJAX,
and inserted into HTML templates.

## Implementation

The functionality has been implemented using the following features:
* Unobtrusive JS
* AngularJS, documented
* semantic HTML5
* well-structured CSS using LESS
* responsive web development/design (no separate m-dot site)
* Twitter Bootstrap
* page data sourced via XHR JSON object
* multi-browser unit testing with Jasmine & Karma
* grunt-driven builds to dev and prod distributions

## Usage

### Building

Fork/clone this repo, then:
```
bower install
npm install
grunt dev       # build the dev distribution
grunt test      # run the unit tests
grunt docs      # just build the docs
grunt prod      # build the prod distribution (includes clean, test & docs)
```

### Running

Set up local web servers to point to `dist/dev` and `dist/prod` for _dev_ and _prod_ distributions, respectively.

### Customising

To customise the content, modify the contents of the following files:
* `svc/*/*.json`
* `src/js/app/*/*/*.html`

### Viewing the docs

Fire up a web server with `dist/docs` as the webroot, and point your browser.

## Pipeline

- remove async file loading (unnecessary code-bloat)
- upgrade AngularJS version
- upgrade to [Bootstrap v3](http://getbootstrap.com/getting-started/#download)
- [travis](https://travis-ci.org/) integration
- e2e testing with [Protractor](https://github.com/angular/protractor)
- write unit tests for MarkdownToHtml filter
- modify all content to use Markdown instead of HTML
- retrieve content from third-party CMS (http://www.contentful.com/)
- investigate [Browser Swarm] (http://www.browserswarm.com/) integration
- other common website functionality:
  - create contact page (placeholder)
  - implement contact page form
  - a new page that has multiple subpages (1, 2, 3, etc)
- use main menu service to store all info required to dynamically generate routes
- sort out display of bullet points between links (slightly offset)
- i18n

## Demo site
http://mcalthrop.github.io/angular-spa-demo/

This site is kept up to date with the latest code in the codebase.
