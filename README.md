# My News App

A React app that fetches and displays the latest news articles using the [NewsAPI](https://newsapi.org/).

## Features

- Fetches top headlines from the NewsAPI.
- Supports searching for news articles based on a user-provided search term.
- Paginates through the list of articles to display a limited number of articles per page.

## Technologies Used

- React
- Axios for API requests

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/news-fetcher-app.git

2. Navigate to the project directory: cd news-fetcher-app
3. Install dependencies: npm install
4. Start the development server: npm start
5. Open your browser and go to http://localhost:3000 to view the app.

## Configuration
The app uses the NewsAPI to fetch news articles. Make sure to obtain an API key from NewsAPI and update the apiKey variable in the NewsFetcher component with your API key.

## Usage
1. Enter a search term in the provided input field.
2. Click the "Submit" button to search for news articles related to the entered term.
3. Explore the paginated list of articles and click on titles to view the full articles.

## Deployment
You can deploy the app to GitHub Pages or any other hosting service. Ensure the necessary deployment scripts are set up based on your preferred hosting platform.

## License
This project is licensed under the MIT License.
