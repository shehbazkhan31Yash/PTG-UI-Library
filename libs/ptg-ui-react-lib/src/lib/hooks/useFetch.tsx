import { useState, useEffect } from 'react';

export function PtguseFetch(url: any) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('') as any;
	const fetchApi = async () => {
		setIsLoading(true);
		try {
			const apiData = await fetch('https://yash-ui-strapi.azurewebsites.net/api/' + url);
			const apiJsonData = await apiData.json();
			if (!apiData.ok) {
				setError(apiData.status);
				throw new Error();
			}
			setData(apiJsonData.data);
			setIsLoading(false);
			setError('');
		} catch (error) {
			setIsLoading(false);
			setData([]);
		}
	};
	useEffect(() => {
		fetchApi();
	}, [url]);
	return { data, isLoading, error };
}
export default PtguseFetch;
