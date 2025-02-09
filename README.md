# NextJS Form Builder Capstone Project

## Tasks

- [x] add the env.js configuration from t3stack
- [x] add upload thing credentials and library to the project
- [ ] add clerk credentials and library to the project
- [ ] add posthog credentials and library to the project
- [ ] add at least a few routes
- [ ] add upload thing to the project
- [ ] add authentication and protect routes
- [ ] create the form response route, with public and private versions
- [ ] add the create form route, which will then be broken into multiple tasks
- [ ] add an e-mail service that allows sending pdf
- [ ] add a cron service
- [ ] add a background job to generate the pdfs and save them to upload thing

## Motivation

I built a couple NextJS apps now, and I would like to build a big project, that does a lot of things, and highlights skills.

I also want this project to be something beyond trivial and not just a follow along tutorial.

The objective is simple: learn, solidify and display my NextJS skills.

## What I'm building

This will be a form and dashboard application.

- The idea is simple, you build a form that is fully customizable.
- You send that form link to someone you want to respond.
- The dashboard is updated displaying their response.

Other things that will be included

- full authentication flow (using clerk)
  - only you will be able to alter your forms
  - only you should be able to view the response to your forms
- require responder authentication
  - you can build a form that requires the responder to authenticate themselves
  - you can also build an annonymous form that doesn't require authentication
- analytics (using posthog)
  - try to add as many custom events as seem reasonable
- good UX (though not amazing, I'm no expert)
  - optimistic updates
  - streaming
  - loading and error states
- pdf generation
  - it should be possible to generate a pdf report from the dashboard
  - it should also be possible to generate a pdf for the responses to a form
- the form
  - there should be a draft model which is updated anytime the user changes the form
  - there should be a published model which is the one the responder sees
  - questions and responses should be drag-n-droppable, including their nested trees, to any siblings or parents, not to its children
  - you should be able to duplicate questions, which includes all its children
  - if possible, I'll look into nesting forms, so you can have a part of your form which is in itself another form (how drafts and publishing will work I have no idea yet)
- email functionality
  - there should be e-mail settings, a user could receive an e-mail anytime a form receives a response
  - or a user could receive an e-mail daily about form responses, or weekly
  - a user could also receive a periodic report on their email, in pdf form

## Routes I'll try to add

- homepage, fully cached, includes the description of the product and a sign in button
- sign in page, maybe also sign up on the same route?
- dashboard, requires authentication, stream the dashboards so the user doesn't wait
- forms, list the forms and possibly link to the responses
- forms/[id], where the user edits a form they created
  - try to make this as server-authoritative as possible (avoid client state)
  - try to make it good for the user (optmistic UI)

## What are forms?

Forms are questions at the root level, which have a type and responses.

Type of questions could be: pick one, pick multiple, reply in text, upload file

Questions could be required or skippable.

Each response could in turn open up multiple questions.

A response could have points associated and could also instantly qualify or unqualify a respondant.

A question, or response, could also include a file for download, or a link, possibly to explain its context.
