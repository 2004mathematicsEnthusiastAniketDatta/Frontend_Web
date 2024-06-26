interface User {
    username: string;
    age: number;
}
interface Developer extends User {
    favoriteLanguage: string;
}
interface User {
    isPremiumMember: boolean;
}

function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }
   
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

  interface LabeledValue {
    label: string;
  }
   
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  interface SquareConfig {
    color?: string;
    width?: number;
  }
   
  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
   
  let mySquare = createSquare({ color: "black" });
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);