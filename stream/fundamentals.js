
import { Readable, Transform, Writable } from 'node:stream'

class OneToHundredstream extends Readable{

    index = 1;

    _read(){
        setTimeout(() => {
            const i = this.index++
            if(i>100){
                this.push(null)
            }

            else{
                const buf = Buffer.from(String(i))

                this.push(buf)
            }
        }, 1000);
    }

}

class trans extends Transform{
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1;

        callback(null, Buffer.from(String(transformed)))
    }
}

class esc extends Writable{
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10)

        callback()
    }
}
new OneToHundredstream()
    .pipe(new trans())
    .pipe(new esc())
