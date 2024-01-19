export const handleVersionChange = (version) => {
    // Update the query parameter "version" to the desired value
    const url = new URL(window.location.href);
    url.searchParams.set('version', version);

    // Navigate to the updated URL
    window.location.href = url.toString();
};