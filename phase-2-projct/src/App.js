import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MealList from "./components/MealList";
import MealItem from "./components/MealItems";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() 
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
