function detectTypes(val) {
    if (typeof val === 'number')
        return 'number';
    if (typeof val === 'string') {
        return 'string';
    }
    if (Array.isArray(val)) {
        return 'array';
    }
    if (typeof val === 'object') {
        return 'object';
    }
    if (typeof val === null) {
        return 'null';
    }
}
