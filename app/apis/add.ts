export const add = async (tasks: { title?: string; color?: string; }) => {
    const url = "http://localhost:8080/tasks";
    try {
        const response = await fetch(url, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(tasks)
        });
        const text = await response.text();
        const ok = response.ok;

        return { ok, text };
    } catch (error) {
        console.error(error);

        return { error };
    }
}