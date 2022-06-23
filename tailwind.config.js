module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Configure your color palette here
                'purple-store': '#201942',
                dark: '#161C24',
                dark_doubts: '#212B36',
                button: '#FD4357',
            },
            backgroundImage: {
                Fundo: "url('/public/Ellipse18.png')",
            },
        },
    },
    plugins: [require('daisyui')],
}
