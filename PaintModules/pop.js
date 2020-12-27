registerPaint('pop-rays', class {
    constructor () {}

    static get inputProperties() {
        return ['--ray-length', '--ray-width'];
    }

    paint(ctx, geom, properties, args) {
        const ray_length = parseInt(properties.get('--ray-length').toString()) || 0;
        const ray_width = parseInt(properties.get('--ray-width').toString()) || 2;

        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = ray_width;
        //ctx.moveTo(0,0);

        for(let x = 0; x < geom.width; x += 25){
            ctx.moveTo(x, geom.height - ray_length)
            ctx.lineTo(x - Math.cos(2*x/geom.width), ray_length);

        }

        ctx.stroke()
    }
})