import { Readable } from "node:stream";

class OneToHundredstream extends Readable {
  index = 1;

  _read() {
    
    const i = this.index++;
    
    setTimeout(() => {
      if (i > 100) {
        
        this.push(null);
      
      } else {
        
        const buf = Buffer.from(String(i));

        this.push(buf);
      
      }
    }, 1000);
  }
}

fetch('http://localhost:3334', {
  method:'POST',
  body:new OneToHundredstream(),
  duplex: 'half'
})
