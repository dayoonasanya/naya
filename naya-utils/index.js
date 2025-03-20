// naya-utils: Shared utilities for Naya App

function formatDate(date) {
    return new Date(date).toLocaleString();
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { formatDate, capitalize };
