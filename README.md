# _Personal Reflection Project: Discussion Forum_

#### _A reflection on my development as a coder so far, 11.03.2017_

#### By _Margaret Berry_

## Description
_Fourteen weeks into my coding bootcamp, Epicodus gave me a day to reflect on my strengths and weaknesses as a programmer. It was an open-ended assignment to think about my strengths and weaknesses, and to dive into something I need to work on or learn more about._

_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0._

## Setup and Installation Instructions
1. `$ git clone [this repository]`
2. `$ cd personal_reflection_project`
3. `$ cd discussion-forum`
4. `$ npm install`
5. `$ npm install --save-dev @types/jasmine`
  * `$ bower install -g` _to install bower if needed_
6. `$ bower install bootstrap --save`
7. _Firebase setup:_
* _Go to [firebase](https://firebase.google.com/) and login or create a free account._
* _Go to the firebase console and create a project called 'discussion-forum'._
* _Click 'add firebase to your web app'._
* `$ touch src/app/api-keys.ts` _then add the following code:_`export var masterFirebaseConfig = { apiKey: "xxxx", authDomain: "xxxx.firebaseapp.com", databaseURL: "https://xxxx.firebaseio.com", storageBucket: "xxxx.appspot.com", messagingSenderId: "xxxx" };` _but replace the x's with your information._
* _Add the following code to your .gitignore file:_ `#Firebase credentials /src/app/api-keys.ts `
* _Visit the Firebase console, click 'discussion-forum,' and click the database option from the lefthand side of the menu._
* _Click 'Realtime Database,' then 'Rules.' Set the value of .read and .write to 'true' and click 'publish.'_
* _'Click 'Data,' then click the three dots in the upper righthand corner. Select 'Import JSON' and navigate to 'sample-posts.json' from this project._

## Angular Information

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.
#### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
#### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
#### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## My Strengths
* _Clear documentation: my commits and READMEs are generally clear and easy to understand._
* _Attention to detail: I am careful when writing initial code and am often able to find small syntax errors._
* _Affinity for test-driven development: I like the process of writing a test first to clarify my purpose, writing the minimum amount of code to make it pass, and then refactoring._
* _Love of learning: my favorite thing about coding is that I will always be learning new things._
* _Deep understanding of concepts: once I learn a new concept, I generally understand it well and remember it._
* _Clear personal communication: I am usually able to articulate my thinking clearly._
* _Working in a team: I have really enjoyed working with and learning from my classmates at Epicodus. I have generally been able to communicate productively with my teammates both about code and interpersonal dynamics._
* _Working independently: I think I have found a good balance between working through a problem on my own, and knowing when to ask for help._

## My Weaknesses
* _Experience: I had very little coding experience before beginning code school, so many tools and concepts are new to me._
* _Persistence: I have been actively working on this and have gotten much better, but sometimes I still don't stick with a problem long enough._
* _Slower learning curve for conceptual understanding: it takes me a while to learn new concepts._
* _Big picture: I am sometimes able to make code work without a solid understanding of why it works and how the different pieces fit together. Sometimes my learning is also somewhat scattered. I may quickly get a difficult concept while struggling to grasp a more basic one._
* _Intimidated by new things: I am sometimes hesitant to jump into using a completely new tool or library._

## Project Goal
_One of my strengths is that I like to write tests, and one of my weaknesses is being intimidated by new things, so I am going to explore testing in Angular, which is completely new to me. Epicodus teaches students Angular in its JavaScript course, but does not touch on testing in Angular. I'm going to try to write an Angular application from scratch and test it thoroughly. I'm also going to explore integration testing with Protractor, and practice debugging in Angular. If I have extra time, I'll add Sass to my project._

## User Stories
* _As a user, I want to..._
* _See all posts and several discussion categories on the main page._

## Future Features
* _As a user, I want to..._
* _Click a category to visit its collection of posts._
* _Click a post to view its contents._
* _Add new posts to a discussion category._
* _Update my post as necessary._
* _Delete my post._

## Bugs
_There are no known bugs at this time._

## How I Spent Today
_I started a project from [this Epicodus lesson](https://www.learnhowtoprogram.com/javascript/angular-extended/online-store-discussion-forum-craigslist) I hadn't tried yet, a discussion forum app._
_I began working through [this angular testing tutorial](https://angular.io/guide/testing)._
_As I went, I took notes on [Angular CLI Setup](https://www.evernote.com/shard/s148/sh/a3f7b207-5749-4fc4-9164-c1e790a94b27/f261f4f83a6e8c9097b502a394a027bc) and [Angular Testing](https://www.evernote.com/shard/s148/sh/c61c49bc-7ac3-4493-9cc4-17c4906ad991/0987cfc7c0271ff071b9f16c98b80567)._

## Future Study and Preparation
_Read Angular documentation and learn more about what the different components I'm importing are doing._
_Learn about Protractor integration testing._
_Read more about time management._

## Technologies Used
* _JavaScript_
* _TypeScript_
* _Angular2_
* _Node_
* _Bower_
* _Bootstrap_
* _Firebase_
* _Jasmine and Karma_

## Support and contact details

_If you have any updates, questions, or suggestions please contact [Margaret](codeberry1@gmail.com) or make a contribution._

### License

MIT License

Copyright (c) 2017 Margaret Berry
