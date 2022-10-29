import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29792872-34dff640cdece5e3f0723ffc1';

export const fetchSearchWord = async (searchWord, page) => {
  const response = await axios.get(
    `/?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`)

    return response.data;

};