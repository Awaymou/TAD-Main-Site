# The Advisory Depot website

Ready-to-upload static website for Azure Static Web Apps. No Node.js, npm, React build or server is required.

## Upload to GitHub

1. Unzip this download.
2. Create an empty GitHub repository, or use the repository intended for this website.
3. Choose **Add file > Upload files**.
4. Open the extracted folder and drag **all its contents** into GitHub. Upload the files and folders, not the ZIP or the enclosing TAD-Azure-Ready folder.
5. Commit the upload to `main`.

`index.html` must be visible at the top level of your repository, beside `assets`, `clients`, `carousel.js` and `staticwebapp.config.json`.

Use this package as the website repository contents. If you previously uploaded the React source package, remove that old package from this repository first so Azure does not detect its package.json and try to build it.

## Connect Azure

1. In Azure, create a **Static Web App** and choose GitHub as the deployment source.
2. Authorise GitHub, then select your repository and `main` branch.
3. Set these build details:

| Setting | Value |
| --- | --- |
| Build preset | Custom / No Framework |
| App location | `/` |
| API location | Leave empty |
| Output location | Leave empty |

4. Create the app. Azure creates the GitHub Actions workflow and deployment secret automatically.
5. Wait for the GitHub Actions deployment to succeed, then open the URL Azure provides.

Do not choose the React preset. This package is already rendered HTML, CSS and JavaScript. No custom build command is needed. If editing the generated workflow manually, `skip_app_build: true` can be added to the Azure deployment action, with `app_location: "/"`, `api_location: ""` and `output_location: ""`.

## Editing

- Text and page sections: `index.html`.
- Styling: the CSS file in `assets/`.
- Carousel pause button: `carousel.js`.
- Logos: `clients/`, with sources in `clients/SOURCES.txt`.
- Images: the image files in the repository root.

The site includes the white-logo carousel, updated contact email and bright-white Practical outcomes heading. Reduced-motion preferences are preserved.

This is a standalone export. Later edits to the ChatGPT-hosted version do not automatically update this repository.

Microsoft instructions:
https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal
https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration
