import React, { useState, useEffect } from 'react'
import './Weather.css'
// Import weather icons
import sunnyIcon from '../images/sunny.svg'
import cloudyIcon from '../images/cloudy.svg'
import rainyIcon from '../images/rainy.svg'
import snowyIcon from '../images/snowy.svg'
import stormyIcon from '../images/stormy.svg'
import foggyIcon from '../images/foggy.svg'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchLocation, setSearchLocation] = useState('')
  const [error, setError] = useState(null)

  // Fetch weather data from OpenWeatherMap API
  const fetchWeatherData = async (city) => {
    try {
      setIsLoading(true)
      setError(null)

      const apiKey = import.meta.env.VITE_API_KEY
      
      if (!apiKey) {
        throw new Error('Missing VITE_API_KEY. Add it to your .env and restart the dev server.')
      }

      const encodedCity = encodeURIComponent((city || '').trim())
      
      if (!encodedCity) {
        throw new Error('Please enter a valid city name.')
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric`
      
      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok) {
        const apiMessage = (data && (data.message || data.cod)) ? String(data.message || data.cod) : 'Unknown error'
        throw new Error(`Weather data not found for "${city}" (${apiMessage})`)
      }

      // Map API response to our weather data structure
      const mappedData = {
        location: data.name,
        temperature: Math.round(data.main?.temp ?? 0),
        condition: mapWeatherCondition(data.weather && data.weather[0] ? data.weather[0].main : 'Clear'),
        humidity: data.main?.humidity ?? 0,
        windSpeed: Math.round(((data.wind?.speed ?? 0) * 3.6)), // Convert m/s to km/h
        feelsLike: Math.round(data.main?.feels_like ?? 0)
      }

      setWeatherData(mappedData)
    } catch (error) {
      console.error('Error fetching weather data:', error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Map OpenWeatherMap conditions to our condition names
  const mapWeatherCondition = (apiCondition) => {
    const conditionMap = {
      'Clear': 'Sunny',
      'Clouds': 'Cloudy',
      'Rain': 'Rainy',
      'Drizzle': 'Rainy',
      'Snow': 'Snowy',
      'Thunderstorm': 'Stormy',
      'Mist': 'Foggy',
      'Fog': 'Foggy',
      'Haze': 'Foggy'
    }
    return conditionMap[apiCondition] || 'Sunny'
  }

  const getWeatherIcon = (condition) => {
    const iconMap = {
      'Sunny': sunnyIcon,
      'Cloudy': cloudyIcon,
      'Rainy': rainyIcon,
      'Snowy': snowyIcon,
      'Stormy': stormyIcon,
      'Foggy': foggyIcon
    }
    return iconMap[condition] || sunnyIcon
  }

  const handleRefresh = () => {
    fetchWeatherData(weatherData.location)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchLocation.trim()) {
      fetchWeatherData(searchLocation.trim())
      setSearchLocation('')
      // Keep search bar open for easy re-searching
    }
  }


  // No automatic loading - user must search for a city

  return (
    <div className="weather-app">
      <div className="weather-container">
        <div className="weather-header">
          <h1 className="weather-title">Weather</h1>
          {weatherData && (
            <div className="header-buttons">
              <button 
                className={`refresh-btn ${isLoading ? 'loading' : ''}`}
                onClick={handleRefresh}
                disabled={isLoading}
              >
                {isLoading ? '⟳' : '↻'}
              </button>
            </div>
          )}
        </div>

        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Enter city name..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="search-input"
              autoFocus
            />
            <button type="submit" className="search-submit">
              Search
            </button>
          </form>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {weatherData && (
          <>
            <div className="weather-main">
              <div className="location">{weatherData.location}</div>
              <div className="temperature">
                <span className="temp-value">{weatherData.temperature}</span>
                <span className="temp-unit">°C</span>
              </div>
              <div className="condition">
                <img 
                  src={getWeatherIcon(weatherData.condition)} 
                  alt={weatherData.condition}
                  className="weather-icon"
                />
                <span className="condition-text">{weatherData.condition}</span>
              </div>
              <div className="feels-like">Feels like {weatherData.feelsLike}°C</div>
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <div className="detail-label">Humidity</div>
                <div className="detail-value">{weatherData.humidity}%</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Wind</div>
                <div className="detail-value">{weatherData.windSpeed} km/h</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Weather