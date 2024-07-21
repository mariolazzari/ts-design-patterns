interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...clone };

    return clone;
  }

  getUserDetails(): UserDetails {
    return this.user;
  }
}

const user1 = new ConcretePrototype({
  name: "Mario",
  age: 49,
  email: "mario.lazzari@gmail.com",
});

const user2 = user1.clone();

console.log("user1 eq user2 = ", user1 === user2);

interface ShapeProps {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public props: ShapeProps) {}
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(props: ShapeProps, public width: number, public height: number) {
    super(props);
  }

  clone(): Shape {
    const cloneProps: ShapeProps = {
      color: this.props.color,
      x: this.props.x,
      y: this.props.y,
    };

    return new Rectangle(cloneProps, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(props: ShapeProps, public radius: number) {
    super(props);
  }

  clone(): Shape {
    const cloneProps: ShapeProps = {
      color: this.props.color,
      x: this.props.x,
      y: this.props.y,
    };

    return new Circle(cloneProps, this.radius);
  }
}

const redRect: Shape = new Rectangle(
  {
    color: "red",
    x: 20,
    y: 100,
  },
  10,
  20
);

const blueRect = redRect.clone();
blueRect.props.color = "blue";

console.log(redRect, blueRect);

// shallow vs deep
let original = {
  name: "Mario",
  address: {
    street: "Via Archimede Martini 7/A",
    city: "Riva del Garda ",
  },
};

// shallow copy: only at top level!
const shallowCopy = { ...original };
shallowCopy.address.city = "Coccaglio";
console.log("Shallow Copy", shallowCopy, original);

// deep copy (not working with complex ojects)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Riva del Garda";
console.log("Deep copy", deepCopy, original);
