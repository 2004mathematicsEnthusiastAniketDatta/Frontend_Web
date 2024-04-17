type QueryOptionsOLD = {
    table: string, //"users" | "widgets" | "sessions",
    userId?: string,
    widgetId?: string,
    sessionId?: string,
    limit?: number,
    offset?: number,
    sort?: string,
};

type  QueryOptionsNEW = 
  {  table: "users";
    userId: string;
}| {
    table: "widgets";
    widgetId: string;
} | {
    table: "sessions";
    sessionId: string;
} | {
    table: "sales",
    sales: string;
} ;

const options: QueryOptionsNEW = {
    table: 'users',
    userId: '123'};

function query(options : QueryOptionsNEW): string {
    switch (options.table) {
        case 'users':
            return options.userId;
            break;
        case 'widgets':
            return options.widgetId;
            break;
        case'sessions':
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

function assertCannotReach(x: never): never {
    throw new Error("Cannot  reach this place in the code");
}