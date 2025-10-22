# 🌤️ Weather App

A beautiful, minimalistic weather application built with React and Vite. Search for any city worldwide and get real-time weather data with a sleek glassmorphism design.

## ✨ Features

- **🌍 Global Weather Data** - Search for weather in any city worldwide
- **🎨 Modern UI** - Beautiful glassmorphism design with smooth animations
- **📱 Responsive** - Works perfectly on desktop, tablet, and mobile
- **⚡ Fast & Lightweight** - Built with Vite for optimal performance
- **🔍 Easy Search** - Simple search interface with real-time results
- **🌤️ Weather Icons** - Custom SVG weather icons for all conditions
- **📊 Detailed Info** - Temperature, humidity, wind speed, and "feels like"

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Halo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key

4. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your API key:
   ```bash
   VITE_API_KEY=your_actual_api_key_here
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start searching for weather!

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with glassmorphism effects
- **OpenWeatherMap API** - Real-time weather data
- **SVG Icons** - Custom weather icons

## 📱 Usage

1. **Search for a city** - Type any city name in the search bar
2. **View weather data** - See temperature, conditions, humidity, and wind
3. **Refresh data** - Click the refresh button to update current location
4. **Search again** - Search bar stays open for easy re-searching

## 🎨 Design Features

- **Glassmorphism UI** - Translucent background with blur effects
- **Smooth Animations** - Floating weather icons and slide transitions
- **Gradient Backgrounds** - Beautiful purple-to-blue gradients
- **Responsive Layout** - Adapts to all screen sizes
- **Modern Typography** - Clean, readable fonts

## 🌤️ Weather Conditions

The app supports all major weather conditions:
- ☀️ Sunny
- ☁️ Cloudy  
- 🌧️ Rainy
- ❄️ Snowy
- ⛈️ Stormy
- 🌫️ Foggy

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
Halo/
├── src/
│   ├── components/
│   │   ├── Weather.jsx      # Main weather component
│   │   └── Weather.css      # Weather component styles
│   ├── images/              # Weather icons (SVG)
│   │   ├── sunny.svg
│   │   ├── cloudy.svg
│   │   ├── rainy.svg
│   │   ├── snowy.svg
│   │   ├── stormy.svg
│   │   └── foggy.svg
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   └── main.jsx             # Entry point
├── public/
├── .env                     # Environment variables
└── README.md
```

## 🌍 API Integration

This app uses the OpenWeatherMap API to fetch real-time weather data:

- **Free tier** - 1000 calls per day
- **Global coverage** - Weather data for cities worldwide
- **Real-time updates** - Current weather conditions
- **Multiple metrics** - Temperature, humidity, wind speed

## 🚀 Deployment

To deploy your weather app:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - Vercel, Netlify, GitHub Pages, etc.
   - Make sure to set your `VITE_API_KEY` environment variable

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool

---

**Made with ❤️ and React**