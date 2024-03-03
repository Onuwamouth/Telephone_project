class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  AddPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
    this.notifyObservers();
  }

  RemovePhoneNumber(phoneNumber) {
    this.phoneNumbers = this.phoneNumbers.filter((number) => number !== phoneNumber);
    this.notifyObservers();
  }

  DialPhoneNumber(phoneNumber) {
    this.notifyObservers(phoneNumber);
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.update(phoneNumber));
  }
}

class Observer {
  constructor() {}

  update(phoneNumber) {
    console.log(phoneNumber);
  }
}

const telephone = new Telephone();

const observer1 = new Observer();
const observer2 = new Observer();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.AddPhoneNumber("+2348162450569");
telephone.DialPhoneNumber("+2348162450569");
