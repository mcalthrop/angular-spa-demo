[![Build Status](https://travis-ci.org/mcalthrop/angular-spa-demo.svg?branch=master)](https://travis-ci.org/mcalthrop/angular-spa-demo)

angular-spa-demo
================

Demo code for a Single Page Application using AngularJS.

## Purpose

This is a sample HTML5 / JS / CSS SPA (Single Page Application) developed with AngularJS.

Markup has been styled to be responsive, according to the device used to view the app.

It is intended as a demonstration of technical capabilities rather than design or helpful data. :-)

Note also that it is a work in progress; you can check out what features are in the pipeline in the [issues](#issues) list.

## Functionality

This is a simple application that displays several pages, including profile information for a list of people.

The sample data is contrived, but shows how the data is stored in JSON format, retrieved via AJAX,
and inserted into HTML templates.

## Implementation

The functionality has been implemented using the following features:

* AngularJS 1.2, documented
* Twitter Bootstrap 3.2
* Javascript validated with JSHint and JSCS
* automated CI build on code repo change
* semantic HTML5
* well-structured CSS built with LESS
* responsive web development/design (no separate m-dot site)
* page content sourced via XHR service call with JSON response (static)
* multi-browser unit testing with Jasmine & Karma
* grunt-driven builds to dev and prod distributions

## Usage

### Building

Fork/clone this repo, then:

``` sh
$ bower install && npm install
# build the dev distribution:
$ grunt dev
# run the unit tests:
$ grunt test
# just build the docs
$ grunt docs
# build the prod distribution (includes clean, test & docs) :
$ grunt prod
```

### Running

Set up local web servers to point to `dist/dev` and `dist/prod` for _dev_ and _prod_ distributions, respectively.

### Customising

To customise the content, modify the contents of the following files:

* `svc/*/*.json`
* `src/js/app/*/*/*.html`

### Viewing the docs

Fire up a web server with `dist/docs` as the webroot, and point your browser.

## Issues

The github issue system holds the issues for this project:

* [all](https://github.com/mcalthrop/angular-spa-demo/issues)
* [bugs](https://github.com/mcalthrop/angular-spa-demo/labels/bug)
* [enhancements](https://github.com/mcalthrop/angular-spa-demo/labels/enhancement)
* [investigate](https://github.com/mcalthrop/angular-spa-demo/labels/investigate)

## Demo site

[mcalthrop.github.io/angular-spa-demo/](http://mcalthrop.github.io/angular-spa-demo/)

This site is kept up to date with the latest code in the codebase.
