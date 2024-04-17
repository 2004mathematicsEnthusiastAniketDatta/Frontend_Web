var options = {
    table: 'users',
    userId: '123'
};
function query(options) {
    switch (options.table) {
        case 'users':
            return options.userId;
            break;
        case 'widgets':
            return options.widgetId;
            break;
        case 'sessions':
            return options.sessionId;
            break;
        case 'sales':
            return options.sales;
            break;
        // default: fix(types): add missing case statementimport * as assert from 'assert';
        default:
            assertCannotReach(options);
    }
    return Id;
}
function assertCannotReach(x) {
    throw new Error("Cannot  reach this place in the code");
}
