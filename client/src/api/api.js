const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export const getProjects = async () => {
    const response = await fetch(`${API_BASE_URL}/projects`);

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    return response.json();
};

export const getSkills = async () => {
    const response = await fetch(`${API_BASE_URL}/skills`);

    if (!response.ok) {
        throw new Error("Failed to fetch skills");
    }

    return response.json();
};

export const getEducation = async () => {
    const response = await fetch(`${API_BASE_URL}/education`);

    if (!response.ok) {
        throw new Error("Failed to fetch education");
    }

    return response.json();
};

export const sendMessage = async (messageData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
    }

    return data;
};

export const getCertifications = async () => {
    const response = await fetch(`${API_BASE_URL}/certifications`);

    if (!response.ok) {
        throw new Error("Failed to fetch certifications");
    }

    return response.json();
};