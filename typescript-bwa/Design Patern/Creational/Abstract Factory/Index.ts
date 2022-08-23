namespace AbstractFactory {
  enum ComputerType {
    PC = "pc",
    LAPTOP = "laptop",
  }

  // Class contract
  abstract class Computer {
    protected type: ComputerType;
    protected monitor: string;

    constructor(type: ComputerType, monitor: string) {
      this.monitor = monitor;
      this.type = type;
    }

    abstract getModel(): string;
  }

  // jenis komputer PC
  class PC extends Computer {
    constructor(monitor: string) {
      super(ComputerType.PC, monitor);
    }

    getModel(): string {
      return `${this.type} with ${this.monitor}`;
    }
  }

  // jenis komputer laptop
  class Laptop extends Computer {
    constructor(monitor: string) {
      super(ComputerType.LAPTOP, monitor);
    }

    getModel(): string {
      return `${this.type} and ${this.monitor}`;
    }
  }

  enum MonitorType {
    LED = "led",
    IPS = "ips",
  }

  // class monitor LED
  class LEDComputerFactory {
    static buildComputer(type: ComputerType): Computer {
      switch (type) {
        case ComputerType.PC:
          return new PC(MonitorType.LED);
        case ComputerType.LAPTOP:
          return new Laptop(MonitorType.LED);
        default:
          throw new Error("type not found");
      }
    }
  }

  // class monitor IPS
  class IPSComputerFactory {
    static buildComputer(type: ComputerType): Computer {
      switch (type) {
        case ComputerType.PC:
          return new PC(MonitorType.IPS);
        case ComputerType.LAPTOP:
          return new Laptop(MonitorType.IPS);
        default:
          throw new Error("type not found");
      }
    }
  }

  // Paling atas factory
  class ComputerFactory {
    static buildComputer(
      monitorType: MonitorType,
      computerType: ComputerType
    ): Computer {
      switch (monitorType) {
        case MonitorType.LED:
          return LEDComputerFactory.buildComputer(computerType);
        case MonitorType.IPS:
          return IPSComputerFactory.buildComputer(computerType);
        default:
          throw new Error("type not found");
      }
    }
  }

  // execute
  const pcLed = ComputerFactory.buildComputer(MonitorType.LED, ComputerType.PC);
  console.log(pcLed.getModel());

  const laptopLed = ComputerFactory.buildComputer(
    MonitorType.LED,
    ComputerType.LAPTOP
  );
  console.log(laptopLed.getModel());
}
