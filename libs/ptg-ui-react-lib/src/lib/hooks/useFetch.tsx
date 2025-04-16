import { useState, useEffect } from 'react';

export function PtguseFetch(url: string) {
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
}


