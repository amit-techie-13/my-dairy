import axios from "axios";
import { API_URL } from "../constant";

export const signUpUser = async (formData) => {
    let url = `${API_URL}/signup`
    try {
        const response = await axios.post(
            url,
            formData,
            {
                headers: {
                    "Content-Type": 'application/json'
                },
                timeout: 10000
            }
        )
        return {
            success: true,
            message: response?.data?.message
        }
    } catch (error) {

        return {
            success: false,
            message: error?.response?.data?.message,
            data: error.response.data
        }
    }
}

export const loginUser = async (formData) => {
    let url = `${API_URL}/login`;

    try {
        const response = await axios.post(
            url,
            formData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 10000,
            }
        );

        // Get token from response
        const token = response?.data?.token;

        if (token) {
            // Save to localStorage (so you can use it in future requests)
            localStorage.setItem("token", token);
        }

        return {
            success: true,
            message: response?.data?.message || "Login successful",
            token, // return token as well
            user: response?.data?.user, // if backend sends user details
        };

    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || "Login failed",
            data: error?.response?.data,
        };
    }
};

