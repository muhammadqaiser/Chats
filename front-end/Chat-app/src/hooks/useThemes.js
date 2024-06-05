import { useState, useEffect } from 'react';

const useTheme = () => {
const [selectedTheme, setSelectedTheme] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchTheme = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/themes/currentTheme");
            const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        setSelectedTheme(data.theme);
        } catch (error) {
        console.error('Error fetching current theme:', error);
        setError(error.message || 'Failed to fetch current theme');
        } finally {
        setLoading(false);
        }
    };

    fetchTheme();
}, []);

const selectTheme = async (theme) => {
    setLoading(true);
    setError(null);
    try {
        const res = await fetch('/api/themes/selectTheme', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Theme: theme })
    });

    if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to set theme');
    }

        const data = await res.json();
        setSelectedTheme(theme);
        console.log(data.message); // Handle success message
    } catch (error) {
        console.error('Error selecting theme:', error); // Log the error
        setError(error.message || 'Failed to set theme');
    } finally {
        setLoading(false);
    }
    };

    return { selectedTheme, selectTheme, loading, error };
};

export default useTheme;
