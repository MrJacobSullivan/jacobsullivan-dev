---
title: Ultimate Tic-Tac-Toe
date: 2021 - 2022
description: A real-time multiplayer ultimate tic-tac-toe game written in React, TypeScript, and Node.
technologies:
  - React
  - TypeScript
  - Context API
  - SASS
  - Node
  - Express
  - WebSockets
  - Turborepo
github: https://github.com/mrjacobsullivan/ultimate-tic-tac-toe-monorepo
website: https://tic-tac-toe.jacobsullivan.dev
color: blue
---

## Introduction

I used to live with a roommate who had a whiteboard hanging up in the living room. One day, we got the idea to play a meta game of tic-tac-toe using a 3x3 matrix of individual tic-tac-toe boards. The winner of a local board would decide the placement on the global board. The game lasted months as we would only make a move at the strict interval of _every once in a while_. I ultimately lost the game and have not recovered. However, I have been obsessed with the idea ever since.

My roomate has since moved across the country to persure a Ph.D. in Mathematics. I got the idea to create an online version of the game we used to play. This has been a passion-project of mine for over a year. It has seen many iterations. At one point it was written in [Svelte](https://svelte.dev/) (which is a lot of fun to work with). I have since settled on React and TypeScript with a little bit of SASS on the frontend. The backend will be written in Node and TypeScript and I'll use [WebSockets](https://socket.io/) to handle real-time communication. I am also using the _fantastic_ [Turborepo](https://turborepo.org/) to keep everything in the same repository. Using this build tool, as well as Husky and GitHub Actions, I am able to increase build-times by up to 85%. Turborepo also allows me to _share_ logic between the client application and the server application.
