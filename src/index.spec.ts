import raw from './index'
describe('raw-string', ()=>{
    it('parses the a string without any special chars', ()=>{
        const str = 'M.A.N.D.Y'
        expect(raw(str)).toEqual('mandy')
    })
})