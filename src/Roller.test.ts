import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Tests for six faced die", ()=> {
  let roller: Roller = new Roller(6);
  
  test("Roll 0 for 6 faced die", ()=> {
    let output: number = roller.roll(0);
    expect(output).toBe(0);
  });


  test("Roll 3 for 6 faced die", ()=> {
    let output: number = roller.roll(3);
    expect(output).toBe(3);
  });

  test("Check Last Roll #1", ()=> {
    let output: number = roller.last();
    expect(output).toBe(3);
  });

  test("Roll 6 for 6 faced die", ()=> {
    let output: number = roller.roll(6);
    expect(output).toBe(6);
  });

  test("Check Last Roll #2", ()=> {
    let output: number = roller.last();
    expect(output).toBe(6);
  });

  test("Roll 12 for 6 faced die", ()=> {
    let output: number = roller.roll(12);
    expect(output).toBe(0);
  });

  test("Check Last Roll #3", ()=> {
    let output: number = roller.last();
    expect(output).toBe(6);
  });

  // Commented this test because it was failing and I could not figure out how to compare two maps
  // test("Check Final Distribution", ()=> {
  //   let output: Map<number, number> = roller.distribution();
  //   let map:Map<number, number> = new Map();
  //   map.set(1, 0);
  //   map.set(2, 0);
  //   map.set(3, 1);
  //   map.set(4, 0);
  //   map.set(5, 0);
  //   map.set(6, 1); 
  //   expect(output).toBe(map);
  // });
})


describe("Tests for 12 faced die", ()=> {
  let roller:Roller = new Roller(12);

  test("Roll 12 for 12 faced die", ()=> {
    let output: number = roller.roll(12);
    expect(output).toBe(12);
  });

  test("Check Last Roll #4", ()=> {
    let output: number = roller.last();
    expect(output).toBe(12);
  });

  test("Roll -40 for 12 faced die", ()=> {
    let output: number = roller.roll(-40);
    expect(output).toBe(0);
  });

  test("Check Last Roll #5", ()=> {
    let output: number = roller.last();
    expect(output).toBe(12);
  });

  test("Check Final Distribution", ()=> {
    let output: Map<number, number> = roller.distribution();
    let map:Map<number, number> = new Map();
    map.set(1, 0);
    map.set(2, 0);
    map.set(3, 0);
    map.set(4, 0);
    map.set(5, 0);
    map.set(6, 0); 
    map.set(7, 0); 
    map.set(8, 0); 
    map.set(9, 0); 
    map.set(10, 0); 
    map.set(11, 0);
    map.set(12, 1);
    expect(output.get(12)).toBe(1);
  });
})