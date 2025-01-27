export const updateTask = async (taskToUpdate: { id: number, title?: string, color?: string, completed?: boolean }) => {
    const url = `http://localhost:8080/tasks/${taskToUpdate.id}`;
    try {
        const response = await fetch(url, {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(taskToUpdate)
        });
        const text = await response.text();

        return text;
    } catch (error) {
        console.error(error);

        return error;
    }
};
