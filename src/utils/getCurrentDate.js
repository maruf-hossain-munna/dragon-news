export function getCurrentDate() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
};


