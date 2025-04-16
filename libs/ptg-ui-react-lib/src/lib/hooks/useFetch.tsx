import { useState, useEffect } from 'react';

/**
 * PtguseFetch - A custom React hook for fetching data from an API.
 *
 * This hook provides a simple way to fetch data from a given API endpoint.
 * It manages the loading state, error handling, and the fetched data.
 *
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {Object} - An object containing the following properties:
 *   - {Array} data: The fetched data from the API.
 *   - {boolean} isLoading: Indicates whether the data is currently being fetched.
 *   - {string | null} error: The error message, if any, or null if no error occurred.
 *
 * @example
 * const { data, isLoading, error } = PtguseFetch('example-endpoint');
 * if (isLoading) return <p>Loading...</p>;
 * if (error) return <p>Error: {error}</p>;
 * return <div>{JSON.stringify(data)}</div>;
 */
export const PtguseFetch = (url: string) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null); // Use null for no error

	const fetchApi = async () => {
		setIsLoading(true);
		setError(null); // Reset error before fetching
		try {
			const response = await fetch(`https://yash-ui-strapi.azurewebsites.net/api/${url}`);
			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}
			const apiData = await response.json();
			setData(apiData.data);
		} catch (err) {
			// Check if the error is an instance of Error
			if (err instanceof Error) {
				setError(err.message); // Access the message property safely
			} else {
				setError('An unknown error occurred'); // Fallback for non-Error objects
			}
		} finally {
			setIsLoading(false); // Ensure loading state is updated
		}
	};

	useEffect(() => {
		if (url) {
			// Check if url is provided
			fetchApi();
		}
	}, [url]);

	return { data, isLoading, error };
};
