const pathAlias = {
    "home": {
        route: '/',
    },
    "root": {
        route: '/',
    },
    'style-edit': {
        route: 'edit',
    },
};

export function namedRoute(name: string): string {
    return pathAlias[name].route;
}
