export const getAdvice = async () => {
    try {

        const response = await fetch("https://api.adviceslip.com/advice", {
            method: "GET"
        });
        return response.json();
    } catch (error) {
        throw new Error("Error to get new advice")
    }
}