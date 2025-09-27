Client (Vite + React) — Deploy to Firebase Hosting

This README explains how to build and deploy the client to Firebase Hosting locally and via GitHub Actions.

Local build & preview

1. Install dependencies:

```powershell
cd C:\Users\Anmol\Desktop\portfolio\client
npm install
```

2. Build the production bundle:

```powershell
npm run build
```

3. Preview the production build locally:

```powershell
npm run preview
# opens at http://localhost:5173 (or another port shown in the output)
```

Manual Firebase Hosting deploy (one-time setup)

1. Install Firebase CLI if you don't have it already:

```powershell
npm install -g firebase-tools
```

2. Login and initialize hosting (run only once per machine/project):

```powershell
firebase login
cd C:\Users\Anmol\Desktop\portfolio\client
firebase init hosting
# When prompted:
# - Select your Firebase project
# - Set public directory to: dist
# - Configure as SPA: Yes
# - Overwrite index.html? No
```

3. Build and deploy:

```powershell
npm run build
firebase deploy --only hosting
```

Automated deploy via GitHub Actions

The repository contains a GitHub Actions workflow that builds and deploys the client on pushes to `main`. It requires a Firebase service account key to be added to GitHub secrets.

Steps to create the service account and add the secret:

1. In the Firebase Console (https://console.firebase.google.com), open your project and go to Project Settings > Service accounts > Generate new private key.
   - Save the downloaded JSON file (e.g. `firebase-service-account.json`).

2. (Optional, but recommended) Restrict the service account to the `Firebase Hosting Admin` role.

3. Convert the JSON to a GitHub secret value (base64 recommended on Windows PowerShell):

```powershell
# Replace the path below with where you saved the JSON
$file = 'C:\path\to\firebase-service-account.json'
$raw = Get-Content $file -Raw
$encoded = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($raw))
Write-Output $encoded
```

4. In your GitHub repository settings -> Secrets -> Actions, create a secret named `FIREBASE_SERVICE_ACCOUNT` and paste the base64 string from the previous step.

5. Also ensure the workflow (or `.firebaserc`) references your Firebase project id. The current files include placeholders; either:
   - Update `.firebaserc` with your project id, or
   - Set the `PROJECT_ID` environment value in the workflow to your project id.

Notes & troubleshooting
- If Vite errors about missing PostCSS plugins (e.g., `autoprefixer`), run `npm install` in the client folder to install devDependencies.
- If you prefer a token instead of service account JSON, you can create a CI deploy token with the Firebase CLI (`firebase login:ci`) and add `FIREBASE_TOKEN` as a GitHub secret — but service account is recommended for the Actions workflow used here.

What I need from you
- Please provide your Firebase project id (the id visible in the Firebase Console). Once you provide it I will:
  - Update `client/.firebaserc` with your project id.
  - Update the GitHub Actions workflow `client/.github/workflows/firebase-hosting.yml` to set the `PROJECT_ID` environment value.

If you want, I can also prepare a step-by-step PowerShell snippet to generate the base64 secret from your downloaded service account JSON.
