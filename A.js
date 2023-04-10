class B {
  print = () => {
    console.log("B");
  };
}
class A extends B {
  constructor() {
    super();
  }
}

let G = new A();
G.print();
