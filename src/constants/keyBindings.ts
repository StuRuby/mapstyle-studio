const bindings = [
    ['INTERFACE$LAYERS_NEW', 'New layer panel'],
    ['INTERFACE$LAYER_DEFINE', 'Toggle data panel'],
    ['INTERFACE$LAYER_STYLE', 'Toggle style panel'],
    ['INTERFACE$TOGGLE_HISTORY', 'Toggle history panel'],
    ['INTERFACE$TOGGLE_HELP', 'Toggle help panel'],
    ['INTERFACE$TOGGLE_PRINT', 'Toggle print panel'],
    ['INTERFACE$TOGGLE_DEBUG', 'Toggle debug panel'],
    ['INTERFACE$TOGGLE_REFERENCE', 'Toggle style reference panel'],
    ['INTERFACE$TOGGLE_LIGHT', 'Toggle light panel'],
    ['INTERFACE$TOGGLE_BASEMAP', 'Toggle basemap panel'],
    ['INTERFACE$TOGGLE_REFERENCE', 'Toggle reference panel'],
    ['INTERFACE$TOGGLE_POSITION', 'Toggle map position panel'],
    ['INTERFACE$TOGGLE_FONTS', 'Toggle fonts panel'],
    ['INTERFACE$SEARCH_STYLE_PLACES', 'Search places'],
    ['INTERFACE$SEARCH_STYLE_LAYERS', 'Filters layers'],
    ['INTERFACE$SEARCH_DATASET', 'Search dataset'],
    ['INTERFACE$FULLSCREEN', 'Fullscreen'],
    ['INTERFACE$TOGGLE_IMAGES', 'Toggle image manager'],
    ['INTERFACE$TOGGLE_COMPATIBILITY', 'Toggle SDK compatibility'],
    ['MAP$SATELLITE_DEBUG_OVERLAY', 'Toggle satellite overlay'],
    ['MAP$RASTER_DEBUG_OVERLAY', 'Toggle raster style overlay'],
    ['MAP$ZOOM_IN', 'Zoom in'],
    ['MAP$ZOOM_OUT', 'Zoom out'],
    ['MAP$PAN', 'Pan'],
    ['MAP$ROTATE_LEFT', 'Rotate left'],
    ['MAP$ROTATE_RIGHT', 'Rotate right'],
    ['MAP$PITCH_UP', 'Pitch up'],
    ['MAP$PITCH_DOWN', 'Pitch down'],
    ['MAP$TILE_BOUNDARIES_OVERLAY', 'Toggle tile boundary overlay'],
    ['MAP$COLLISION_BOXES_OVERLAY', 'Toggle collision box overlay'],
    ['MAP$OVERDRAW_INSPECTOR_OVERLAY', 'Toggle overdraw inspector overlay'],

    ['ACTIONS$ESC', 'Cancel selected layers'],
    ['ACTIONS$LAYERS_UP', 'Move up layer list'],
    ['ACTIONS$LAYERS_DOWN', 'Move down layer list'],
    ['ACTIONS$LAYERS_SELECT_UP', 'Add or remove a layer from the selection'],
    ['ACTIONS$LAYERS_SELECT_DOWN', 'Add or remove a layer from the selection'],
    ['ACTIONS$LAYERS_HIDE', 'Toggle visibility of current layer'],
    ['ACTIONS$LAYERS_GROUP', 'Group layers'],
    ['ACTIONS$LAYERS_DUPLICATE', 'Duplicate the selected layer(s)'],
    ['ACTIONS$LAYERS_DELETE', 'Delete the selected layer(s)'],
    ['ACTIONS$LAYERS_MOVE_UP', 'Move selected layer(s) up the list'],
    ['ACTIONS$LAYERS_MOVE_DOWN', 'Move selected layer(s) down the list'],
    ['ACTIONS$PROPERTIES_UP', 'Move up the property list'],
    ['ACTIONS$PROPERTIES_DOWN', 'Move down the property list'],
    ['ACTIONS$PROPERTIES_FOCUS', 'Focus the active property form'],
    ['ACTIONS$SAVE', 'Save'],
    ['ACTIONS$UNDO', 'Undo'],
    ['ACTIONS$REDO', 'Redo'],
    ['ACTIONS$FORMAT_JSON', 'Format content of JSON editor'],

    ['ACTIONS$ADD_PROPERTY', 'Add a new property'],
    ['ACTIONS$ADD_POINT', 'Draw a point'],
    ['ACTIONS$ADD_LINE', 'Draw a line'],
    ['ACTIONS$ADD_POLYGON', 'Draw a polygon'],
    ['ACTIONS$DESTROY', 'Delete selected features or positions'],
    [
        'ACTIONS$COMBINE_FEATURES',
        'Combine selected features into multifeatures',
    ],
    [
        'ACTIONS$UNCOMBINE_FEATURES',
        'Uncombine selected multifeatures into features',
    ],
    ['ACTIONS$ESCAPE', 'Cancel drawing'],
];

const Keybindings = bindings
    .map((c) => c[0])
    .reduce((obj, key) => {
        obj[key] = key;
        return obj;
    }, {});

const KeybindingNames = bindings.reduce((obj, key) => {
    obj[key[0]] = key[1];
    return obj;
}, {});

export { Keybindings, KeybindingNames };
