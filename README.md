
# raw-string
one liner to clean up all possible special chars, useful to compare strings.
returns a lowercase string, stripped of special characters
used internally for www.refinemusic.io

`yarn add raw-string`

```
   const raw = require('raw-string);
   raw('M.A.N.D.Y. vs. Booka Shade / Âme ‎– Body Language / Rèj')    
    // outputs: mandyvsbookashadeamebodylanguagerej

   raw('Âme') === raw('Àm e')
	// true
```
