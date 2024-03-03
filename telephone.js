class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  AddPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  RemovePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index > -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  DialPhoneNumber(phoneNumber) {
    this.notifyObservers(phoneNumber);
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => {
      observer.update(phoneNumber);
    });
  }
}

class Observer {
  constructor() { }

  update(phoneNumber) {
    console.log(phoneNumber);
  }
}

const telephone = new Telephone();
const observer1 = new Observer();
const observer2 = new Observer();
telephone.addObserver(observer1);
telephone.addObserver(observer2);
telephone.DialPhoneNumber("+2348162450569");
