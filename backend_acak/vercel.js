{
    'version'; 2,
    'builds'; [
        {
            'scr': '*js',
            'use': '@vercel/node'
        }
    ],
    'routes';[
        {
            'scr': '/(,*)',
            'dest': '/'
        }
    ]
}