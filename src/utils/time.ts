const convertTimeToString = (time: number): string => {
    const minutes = Math.ceil(time / 60) % 60;
    const hours = Math.floor(time / 3600) % 24;
    const days = Math.floor(time / 86400);
    return `${days}d ${hours}h ${minutes}m`;
}

export { convertTimeToString };
