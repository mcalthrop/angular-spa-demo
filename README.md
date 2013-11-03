angular-spa-demo
================

Demo code for a Single Page Application using AngularJS

## Purpose
This is a sample HTML5 / JS / CSS SPA (Single Page Application) developed with AngularJS.

Markup has been styled to be responsive, according to the device used to view the app.

It is intended as a demonstration of technical capabilities rather than design or helpful data. :-)

Note also that it is a work in progress; you can check out what features are in the [pipeline] (#Pipeline).

## Functionality

This is a simple application that displays profile information for a list of people.

The sample data is contrived, but shows how the data is stored in JSON format, retrieved via AJAX,
and inserted into HTML templates.

## Implementation

The functionality has been implemented using the following features:
* Unobtrusive JS
* AngularJS
* semantic HTML5
* well-structured CSS using LESS
* responsive web development/design (no separate m-dot site)
* Twitter Bootstrap
* page data sourced via XHR JSON object
* multi-browser unit testing with Jasmine & Karma
* grunt-driven builds to dev and prod distributions

## Pipeline
- write unit tests for MarkdownToHtml filter
- modify all content to use Markdown instead of HTML
- retrieve content from third-party CMS (intention: http://www.contentful.com/)
- upgrade to Bootstrap v3
- travis integration
- investigate [Browser Swarm] (http://www.browserswarm.com/) integration
- e2e testing
- other common website functionality:
  - create contact page (placeholder)
  - implement contact page form
  - a new page that has multiple subpages (1, 2, 3, etc)
- use main menu service to store all info required to dynamically generate routes
- sort out display of bullet points between links (slightly offset)
- i18n

## Demo site
http://www.mattcalthrop.com/angular-spa-demo/

This site is kept up to date with the latest code in the codebase.

## Usage

Do one of the following:
* view on my website (links above)
* pull the relevant branch, as listed above

To customise the content, modify the contents of the `svc/pagedata.json` file to suit your requirements.

Observe the contents of the sample file to see what fields to fill in.
