export const deleteTask = async (id: number) => {
    try {
        const url = `http://localhost:8080/tasks/${id}`
        const response = await fetch(url, {
            method: 'delete'
        });
        const text = await response.text();
        return text;
    } catch (error) {
        console.error(error);
    }
};
