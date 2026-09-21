# devMasrafi Portfolio

A personal portfolio website for Masrafi Mondol, focused on MERN stack development, responsive frontend interfaces, WordPress experience, and practical React projects.
## Why I Built This

I built this portfolio to bring my professional work, learning projects, and development process into one place. My earlier React applications helped me understand state, API integration, filtering, pagination, and responsive UI. My WordPress work helped me understand real client requirements, maintenance, and working inside existing systems.

The portfolio reflects my current direction: growing from frontend and WordPress experience toward stronger MERN stack development.

## About

I am a MERN stack developer focused on building responsive and practical web applications with:

- MongoDB
- Express
- React
- Node.js
- JavaScript
- REST APIs

I also have previous WordPress experience and working knowledge of Angular. My design background helps me think about layout, hierarchy, usability, and responsive interfaces.

## Website Features

- Recruiter-focused homepage
- Professional About page
- Professional experience section
- Starter-project showcase
- Contact and social links
- CV download
- Certificate link
- Light and dark themes
- Responsive mobile, tablet, and desktop layouts
- Route-based navigation
- Scroll reset when changing pages
- Web3Forms contact submission
- Reusable React components

## Routes

| Route          | Purpose                                                 |
| -------------- | ------------------------------------------------------- |
| `/`            | Portfolio homepage                                      |
| `/about`       | Profile, experience, skills, education, and certificate |
| `/projects`    | Professional work and starter projects                  |
| `/contact`     | Email, LinkedIn, GitHub, and WhatsApp contact options   |
| `/todoApp`     | Todo application                                        |
| `/weather`     | Live weather dashboard                                  |
| `/apiData`     | API search and pagination project                       |
| `/recipiebook` | Reserved route for a future recipe project              |

## Starter Projects

### Todo Application

A React task management application with:

- Task creation
- Completion and deletion
- Active/completed filters
- Local storage persistence
- Responsive layout
- Internal scrollable task list
- Empty and validation states

### Weather Dashboard

A live weather application using WeatherAPI with:

- City and location search
- Current temperature
- Weather condition
- Wind speed
- Humidity
- UV index
- Visibility
- Responsive layout

### API Search and Pagination

An API data browser using JSONPlaceholder with:

- API fetching
- Search by title and body
- Pagination
- Empty search results
- Selected post details
- Smooth scroll when changing pages

## Professional Experience

The portfolio presents professional frontend and WordPress experience separately from starter projects.

Professional experience includes:

- Responsive frontend interface development
- WordPress website development
- Theme and plugin integration
- UI implementation
- Website maintenance
- Bug fixing
- Reusable layout patterns
- Collaboration on real projects

The starter projects remain visible because they represent the foundation of my React and API development journey.

## Main Technical Stack

### Primary

- MongoDB
- Express
- React
- Node.js
- JavaScript
- REST APIs

### Additional Experience

- WordPress
- Angular
- Next.js
- Tailwind CSS
- Firebase
- Git
- Vite

### Design Background

- Figma
- Photoshop
- Canva
- UI/UX principles

## Problems Encountered and Solutions

### Route changes preserved the previous scroll position

React Router changes pages without a full browser reload. Because of this, the browser could preserve the previous page's scroll position.

The solution was a reusable `ScrollToTop` component using `useLocation`, `useLayoutEffect`, and manual browser scroll restoration.

### API pagination moved to the wrong position

The API page used a scroll target of `250px`, which caused pagination to land below the top of the page.

The behavior was corrected to scroll to `0px` when changing pages or search results.

### Weather layout broke on medium and large screens

The weather detail cards used fixed widths and `text-nowrap`. Four cards could become wider than their parent container.

The solution was to allow cards to use `w-full`, remove fixed widths, allow text wrapping, and control the number of grid columns responsively.

### API requests did not clearly handle failures

The API projects needed more complete loading, error, empty, and success states.

The solution was to check `response.ok`, expose loading and error state, and use `AbortController` to prevent outdated requests from updating the interface.

### Todo tasks stretched the entire page

The task list originally grew with every new task.

The solution was an internal scroll container with a maximum height, while keeping the main page layout stable.

A visual scroll hint and bottom fade were added so users understand that more tasks are available below.

### Native form submission did not clear the contact form

The Web3Forms integration uses a normal HTML form submission. Because React does not control the submitted fields, the component does not automatically receive a success callback to clear them.

The current behavior is intentionally kept native. A future improvement could use `fetch()` and `form.reset()` after a confirmed successful response.

## What I Learned

This project helped me understand that a working interface is not automatically a usable interface.

I learned to:

- Separate professional work from early learning projects instead of hiding the earlier work.
- Use responsive constraints instead of fixed widths for cards and dashboard layouts.
- Treat loading, error, and empty states as part of the feature.
- Investigate route scroll behavior instead of assuming React Router would reset it automatically.
- Use internal scroll containers carefully so long task lists do not stretch the entire page.
- Choose clear labels that represent my actual level of experience.
- Review AI suggestions critically instead of accepting every proposed change.

## Key Decisions

### MERN as the primary direction

I chose to present MERN as my primary stack because it is the direction I want to grow in. WordPress represents previous professional experience, while Angular and other tools are supporting knowledge rather than my main specialization.

### Keeping the starter projects

I kept the Todo, Weather, and API projects because they document the foundation of my React development. They show where I practiced state management, API requests, filtering, pagination, persistence, and responsive layouts.

### Separating professional work

I separated professional work from starter projects so recruiters can distinguish client-facing experience from personal learning projects.

### Keeping the design simple

I kept the border-based visual system, restrained colors, and light/dark themes because the portfolio should be readable and easy to scan. I prioritized hierarchy and clarity over decorative effects.

## Local Development

Install dependencies:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Development Process

I used AI as a support tool for brainstorming UI alternatives, checking responsive behavior, and discussing possible causes of bugs. I reviewed, adapted, and tested the suggestions myself. The product direction, content, implementation decisions, and final validation remained my responsibility.