export default function renderHtml(initialState) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Chat App 123</title>
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
      </head>
      <body>
        <div id="app"></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script type="text/javascript" src="/app.bundle.js"></script>
      </body>
    </html>
  `
}

