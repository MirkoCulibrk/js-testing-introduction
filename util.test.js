//ceo fajl ce biti predstavljen kao objecat
const {generateText,checkAndGenrate}=require('./util');


test('test for generating text',()=>{
    const text=generateText('mirko',25);
    expect(text).toBe('mirko (25 years old)');
});
test('should generete valied name and age',()=>{
    const text=checkAndGenrate('mirko',25);
    expect(text).toBe('mirko (25 years old)');
})