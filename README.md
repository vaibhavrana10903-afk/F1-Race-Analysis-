# Formula 1 Race Intelligence

A black-and-red F1 analytics website: hero with headline KPIs, a dashboard of driver, team and country charts, a tabbed story, and a short data note.

## Technologies

No framework and no build step. The site is plain HTML, CSS and JavaScript.

- Fonts: Orbitron and Rajdhani, loaded from Google Fonts (needs an internet connection)
- Charts: drawn with HTML/CSS bars, no chart library
- Original analysis: a Tableau workbook on the "F1 Racing Project Dataset" (`race_results` sheet, 6,464 rows)

## Project structure

```
f1-race-intelligence/
├── index.html        page markup
├── css/styles.css    all styling and design tokens
├── js/data.js        chart data (edit this to change the numbers)
├── js/main.js        charts, Top N slider, story tabs, KPI counters
├── package.json      optional, only provides the `npm start` shortcut
├── .gitignore
└── README.md
```

## Run locally

Option 1: double-click `index.html`.

Option 2 (local server, needs Node.js):

```
npm start
```

then open http://localhost:3000. Or with Python: `python3 -m http.server 3000`.

## Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open Settings > Pages.
3. Set the source to the `main` branch, root folder, and save.

## Data note

The values in `js/data.js` come from the Tableau dashboard screenshots: the four KPIs, the driver points, Red Bull Racing's 8,006 and the country entry counts. Team bars other than Red Bull are scaled from the chart and are approximate. To use real figures, export the `race_results` sheet and update `data.js`.
