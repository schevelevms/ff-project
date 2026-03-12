export default () => {
    const uniqueID = `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    return uniqueID
}