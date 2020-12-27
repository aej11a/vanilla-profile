registerPaint('leaf-border', class {
    constructor () {
        this.hue = 266;
    }

    static get inputProperties() { return ['--control-offset']; }

    paint (ctx, geom, properties, args) {

        const offset = properties.get( '--control-offset' );

        ctx.strokeStyle = "rgba(255,255,255,0.1)";

        ctx.beginPath();

        ctx.moveTo(1,(geom.height-2)/2);
        ctx.bezierCurveTo(0-(2*offset), -10-(0.5*offset),+50,0,(geom.width-2)/2,2);

        ctx.bezierCurveTo(geom.width-1-50-(2*offset), -50,geom.width-1+50, 0,geom.width,(geom.height)/2);

        //ctx.moveTo(geom.width/2,geom.height-2);
        ctx.bezierCurveTo(geom.width+(2*offset), geom.height+(0.5*offset), geom.width, geom.height+10, (geom.width-2)/2,(geom.height-2));

        ctx.bezierCurveTo(0, geom.height+(2*offset),0, geom.height+(2*offset),1,(geom.height-2)/2);

        ctx.shadowBlur = 2;
        ctx.shadowColor = "black";
        ctx.stroke();

        ctx.fillStyle = "rgba(255,255,255,0.1)"
            ctx.fill()

        /*ctx.beginPath();
        ctx.moveTo(1, lt_meet_pt.x);
        ctx.bezierCurveTo(5, 0, lt_meet_pt.x, lt_meet_pt.y)
        ctx.moveTo(lt_meet_pt.x, 1);
        ctx.lineTo(geom.width, 1);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255,255,255,.1)';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(geom.width, 0);
        ctx.lineTo(geom.width - 20, geom.height);
        ctx.lineTo(0, geom.height);
        ctx.fill();
         */

    }
})