import axios from "axios";
import { useState, useCallback } from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        console.log("1URL:", url);
        setLoading(true);
        try {
            console.log("2URL:", url);
            const response = await axios({ url, method, data: body, headers })
            console.log("3URL:", url);
            if (!response) {
                throw new Error(response || "Something was going wrong...")
            }
            setLoading(false);
            return response;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, [])
    const clearError = () => setError(null);
    return { loading, request, error, clearError }
}