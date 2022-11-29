tailwind.config = {
    theme: {
        extend:{
            colors:{
                coffee:{
                    100: '#edbb82',
                    600: '#663c0b'
                }
            }
        },
        fontFamily: {
            sans: ['PT sans','微軟正黑體' ,'sans-serif'],
            serif: ['Lora','新細明體', 'serif'],
            title: ['Monoton']
        },
        screens: {
            'sm':'576px',
            'md':'768px',
            'lg':'920px',
            'xl':'1200px',
            '2xl':'1440px'
        }
    },
}