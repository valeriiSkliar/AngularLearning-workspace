import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios, { AxiosResponse } from 'axios';

@Injectable({
	providedIn: 'root',
})
export class MovieService {
	private apiKey = '63319af8femsh8c9c58805a84125p1e698djsn32ae57ffa357';

	private apiUrl = 'https://moviesdatabase-sadrian-api.p.rapidapi.com/';

	constructor(private http: HttpClient) {}

	async getPopularMovies(page = 1, listName: string | null = 'most_pop_movies') {
		const options = {
			method: 'GET',
			url: 'https://moviesdatabase.p.rapidapi.com/titles',
			params: {
				list: listName,
				page,
			},
			headers: {
				'content-type': 'application/octet-stream',
				'X-RapidAPI-Key': this.apiKey,
				'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
			},
		};

		try {
			const response: AxiosResponse = await axios.request(options);
			return response.data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async getLists() {
		const options = {
			method: 'GET',
			url: 'https://moviesdatabase.p.rapidapi.com/titles/utils/lists',
			headers: {
				'content-type': 'application/octet-stream',
				'X-RapidAPI-Key': '63319af8femsh8c9c58805a84125p1e698djsn32ae57ffa357',
				'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
			},
		};

		try {
			const response: AxiosResponse = await axios.request(options);
			return response.data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async getMovieDetails(id?: string | null) {
		const options = {
			method: 'GET',
			url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
			headers: {
				'content-type': 'application/octet-stream',
				'X-RapidAPI-Key': this.apiKey,
				'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
			},
		};

		try {
			const response: AxiosResponse = await axios.request(options);
			return response.data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async getMovieRatings(id?: string | null) {
		const options = {
			method: 'GET',
			url: `https://moviesdatabase.p.rapidapi.com/titles/${id}/ratings`,
			headers: {
				'content-type': 'application/octet-stream',
				'X-RapidAPI-Key': `${id}`,
				'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
			},
		};

		try {
			const response: AxiosResponse = await axios.request(options);
			return response.data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}
